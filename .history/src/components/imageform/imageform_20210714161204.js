import React, { Component } from "react"

class ImageForm extends Component {
  render() {
    return (
      <div>
        <p className="f3">
          this application will detect the items you submit init
        </p>
        <div>
          <input className="f4 pa3 center" type="text" />
          <button className="w-25 grow f4 ph3 link  ">Submit</button>
        </div>
      </div>
    )
  }
}

export default ImageForm
