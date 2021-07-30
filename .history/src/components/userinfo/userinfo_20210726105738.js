import React, { Component } from "react"

class UserInfo extends Component {
  render() {
    const { name, imageCounter } = this.props
    return (
      <div>
        <div className=" black b f2">{`${name} you user our app ${imageCounter} times`}</div>
      </div>
    )
  }
}

export default UserInfo
