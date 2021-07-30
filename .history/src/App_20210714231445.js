import React, { Component } from "react"
import Particles from "react-particles-js"
import "./App.css"
import ImageForm from "./components/imageform/imageform"
import Logo from "./components/logo/logo"

import UserInfo from "./components/userinfo/userinfo"
import Home from "./components/home/home"
import { particlesParms } from "./particlesparms.js"

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: "",
    }
  }

  onInputChange = (event) => {
    console.log(event)
  }
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesParms} />
        <Home />
        <Logo />
        <UserInfo />
        <ImageForm onInputChange={this.state.onInputChange} />
        {/* <Ai /> */}
      </div>
    )
  }
}

export default App