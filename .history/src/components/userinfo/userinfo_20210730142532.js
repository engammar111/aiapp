import React, { Component } from "react"

class UserInfo extends Component {
  render() {
    const { name, imageCounter } = this.props
    return (
      <div>
        <div className=" black b f2">{`${name} you use my app`}</div>
        <div className=" white b f1">{` ${imageCounter} times`}</div>
      </div>
    )
  }
}

export default UserInfo
