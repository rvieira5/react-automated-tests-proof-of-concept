import {useState} from 'react'

function Switch({ initial }) {
  const [active, setActive] = useState(initial)

  const outerDivStyles = {
    width: "700px",
    backgroundColor: active ? "green" : "red",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center"
  }

  const innerDivStyles = {
    marginTop: "15px",
    marginBottom: "15px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px"
  }

  return (
    <div className="switch-container" style={outerDivStyles} onClick={() => setActive(!active)}>
      <div className="switch-label" style={innerDivStyles}>{active ? "ON" : "OFF" }</div>
    </div>
  );
}

export { Switch };
