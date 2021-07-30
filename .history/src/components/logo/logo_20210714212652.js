import React, { Component } from "react"
import "./logo.css"
import ai from "./ai.png"

class Logo extends Component {
  render() {
    return (
      <div
        className="  pa0 br2 shadow-1 mt-8 ma4"
        style={{ height: 200, width: 200 }}
      >
        {" "}
        <img src={ai} alt="ai" />
      </div>
    )
  }
}

export default Logo
