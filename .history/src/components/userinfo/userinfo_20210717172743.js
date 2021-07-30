import React, { Component } from "react"

class UserInfo extends Component {
  render() {
    const newResponse = this.props.newResponse
    return (
      <div>
        <div className=" black b f2">your image contain </div>
        <div className="f1 link  b dim white pa4 pointer "> {newResponse}</div>
      </div>
    )
  }
}

export default UserInfo
