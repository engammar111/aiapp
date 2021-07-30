import React, { Component } from "react"

class UserInfo extends Component {
  render() {
    const newResponse = this.props.newResponse
    return (
      <div>
        <div className=" black b f2">{`your image contain  {newResponse}`}</div>
      </div>
    )
  }
}

export default UserInfo
