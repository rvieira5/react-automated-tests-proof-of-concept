import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";

import { Switch } from "./Switch";

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let root = null;
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  act(() => {
    root.unmount()
  });
  container.remove();
  container = null;
});

describe("Behaviors on inactive switch", () => {
  it("uses initial value from props", () => {
    act(() => {
      const initial = false

      root = createRoot(container);
      root.render(<Switch initial={initial} />)
    });
    const element = container.querySelector(".switch-label")
    expect(element.textContent).toBe("OFF");
  });
  it("changes output after click", () => {
    act(() => {
      const initial = false

      root = createRoot(container);
      root.render(<Switch initial={initial} />)
    });

    act(() => {
      const element = container.querySelector(".switch-label")
      element.click()
    });
    const element = container.querySelector(".switch-label")
    expect(element.textContent).toBe("ON");
  });
})
