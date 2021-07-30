import React, { Component } from "react"

class UserInfo extends Component {
  render() {
    const { name, imageCounter } = this.props
    return (
      <div>
        <div className=" black b f2">{`Ammar you are the great # 1`}</div>
      </div>
    )
  }
}

export default UserInfo
