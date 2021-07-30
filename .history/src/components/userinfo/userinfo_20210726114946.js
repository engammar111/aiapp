import React, { Component } from "react"

class UserInfo extends Component {
  const {name, imageCounrter}
  render() {
    return (
      <div>
        <div className=" black b f2">{`${name} you use our app ${imageCounter} times`}</div>
      </div>
    )
  }
}

export default UserInfo
