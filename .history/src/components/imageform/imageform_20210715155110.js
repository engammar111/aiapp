import React, { Component } from "react"
import "./imageform.css"

class ImageForm extends Component {
  render() {
    return (
      <div>
        <p className="f3 b">
          this application will detect the items you sumbit init
        </p>

        <div className="center">
          <div className=" center form pa4 br3 shadow-3">
            <input
              className="f4 pa3 w-75 center  "
              type="text"
              onChange={onImageChange}
            />
            <button
              className="w-25 grow f4 link pointer dib pv2 bg-blue
             "
            >
              {" "}
              Submit{" "}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageForm
