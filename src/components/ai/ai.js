import React, { Component } from "react"

export class Ai extends Component {
  render() {
    const imageUrl = this.props.imageUrl
    return (
      <div className="center ">
        <div className="center mt3">
          <img width="500px" height="auto" src={imageUrl} alt="" />
        </div>
      </div>
    )
  }
}

export default Ai
