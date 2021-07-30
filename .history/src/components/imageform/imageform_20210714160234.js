import React, { Component } from "react"

class ImageForm extends React.Component {
  render() {
    return (
      <div>
        <p className="f4">
          this application will detect the items you submit init
        </p>
        <div>
          <input className="f5 pa3 center" type="text">
            <button>Submit</button>
          </input>
        </div>
      </div>
    )
  }
}

export default ImageForm
