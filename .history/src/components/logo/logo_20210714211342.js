import React, { Component } from "react"
import "./logo.css"
import ai from "./ai.png"

class Logo extends Component {
  render() {
    return (
      <div className="logo ma3 mt0" style={{ height: 150, width: 150 }}>
        {" "}
        <img className="logo" src={ai} alt="ai" />
      </div>
    )
  }
}

export default Logo
