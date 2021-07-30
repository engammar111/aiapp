import React, { Component } from "react"
import "./imageform.css"

class ImageForm extends Component {
  render() {
    return (
      <div>
        <p className="f2">
          this application will detect the items you sumbit init
        </p>

        <div className="center">
          <input className="f4 pa3 w-75 center  " type="text" />
          <button className="w-25 grow f4 link pointer dib pv2 bg-blue ">
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
    )
  }
}

export default ImageForm
