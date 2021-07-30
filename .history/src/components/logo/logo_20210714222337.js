import React from "react"
import Tilt from "react-parallax-tilt"

class Logo extends React.Component {
  render() {
    return (
      <div>
        <Tilt>
          <div style={{ height: "300px", backgroundColor: "darkgreen" }}>
            <h1>React Parallax Tilt 👀</h1>
          </div>
        </Tilt>
      </div>
    )
  }
}

export default Logo
