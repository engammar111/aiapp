import React, { Component } from "react"
import Particles from "react-particles-js"
import "./App.css"
import ImageForm from "./components/imageform/imageform"
import UserInfo from "./components/userinfo/userinfo"
import Logo from "./components/Logo/Logo"
import Home from "./components/home/home"
import { particlesParms } from "./particlesparms.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesParms} />
        <Home />
        <UserInfo />
        <ImageForm />

        {/* <Ai /> */}
        <Logo />
      </div>
    )
  }
}

export default App
