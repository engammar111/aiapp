import React, { Component } from "react"

export class Result extends Component {
  render() {
      const newResponse = this.props.newResponse
    return (<div>
        <div className=" f2 link dim black pa4 ">YOUR IMAGE CONTAIN </div>
        <div className=" f1 link dim white pa4 pointer">{newResponse} </div>
      </div>
    </)
  }
}

export default Result
