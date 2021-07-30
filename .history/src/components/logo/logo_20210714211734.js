import React, { Component } from "react"
import "./logo.css"
import ai from "./ai.png"

class Logo extends Component {
  render() {
    return (
      <div style={{ height: 150, width: 150, border: "solid" }}>
        {" "}
        <img src={ai} alt="ai" />
      </div>
    )
  }
}

export default Logo
