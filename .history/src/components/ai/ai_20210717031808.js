import React, { Component } from "react"

export class Ai extends Component {
  render() {
    const imageUrl = this.props.imageUrl
    return (
      <div className="center ">
        <div className="center mt3">
          <img
            width="500px"
            height="auto"
            src={
              "https://cdn.gourmetegypt.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/b/a/banana.jpg"
            }
            alt="123"
          />
        </div>
      </div>
    )
  }
}

export default Ai
