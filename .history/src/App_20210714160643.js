import React, { Component } from "react"
import Particles from "react-particles-js"
import "./App.css"
import Home from "./components/home/home"
import ImageForm from "./components/imageform/imageform"
import { particlesParms } from "./particlesparms.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesParms} />
        <Home />
        <ImageForm />
        {/* <Ai />
        <Logo />  */}
      </div>
    )
  }
}

export default App
