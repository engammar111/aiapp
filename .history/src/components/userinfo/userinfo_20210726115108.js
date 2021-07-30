import React, { Component } from "react"

class UserInfo extends Component {
  render() {
    const { name, imageounrte } = this.props
    return (
      <div>
        <div className=" black b f2">{`${name} you use our app ${imageCounter} times`}</div>
      </div>
    )
  }
}

export default UserInfo
