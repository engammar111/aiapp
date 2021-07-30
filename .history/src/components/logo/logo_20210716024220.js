import React from "react"
import Tilt from "react-parallax-tilt"
import ai from "./ai.png"
import "./logo.css"

class Logo extends React.Component {
  render() {
    return (
      <div>
        <Tilt className="move">
          <div
            className=" Tilt ma6 mt0 pa3 Tilt-inner pointer grow "
            style={{
              height: "150px",
              width: "150px",
            }}
          >
            <img src={ai} alt="ai" />
          </div>
        </Tilt>
      </div>
    )
  }
}

export default Logo
