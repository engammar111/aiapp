import React from "react"
import Tilt from "react-parallax-tilt"
import ai from "./ai.png"

class Logo extends React.Component {
  render() {
    return (
      <div>
        <Tilt>
          <div
            className=" ma4 mt0"
            style={{
              height: "150px",
              width: "150px",
            }}
          >
            <img src="ai" alt="ai" />
          </div>
        </Tilt>
      </div>
    )
  }
}

export default Logo