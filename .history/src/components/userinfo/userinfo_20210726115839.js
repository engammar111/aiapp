import React, { Component } from "react"

class UserInfo extends Component {
  render() {
    const { name, imageCounter } = this.props
    return (
      <div>
        <div className=" black b f2">{`${name} you use our app </div>
        <div className=" white b f1">{`${name} you use our app ${imageCounter} times`}</div>
      </div>
    )
  }
}

export default UserInfo
