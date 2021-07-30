import React, { Component } from "react"

class ImageForm extends Component {
  render() {
    return (
      <>
        <p className="f4">
          this application will detect the items 
          you submit init
        </p>
        <div>
          <input className="f5 pa3 center" type="text"/>
            <button>Submit</button>
          </input>
        </div>
      </    )
  }
}

export default ImageForm
