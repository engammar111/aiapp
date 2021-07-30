import React, { Component } from "react"
import "./imageform.css"

class ImageForm extends Component {
  render() {
    return (
      <div>
        <p className="f3">
          this application will detect the items you submit init
        </p>
        <div className="center">
          <div className="center form pa4 br3">
            <input className="f4 pa3  w-75 center" type="text" />
            <button className="w-25 grow f4 ph3 link pointer dib pv2 bg-blue  ">
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageForm
