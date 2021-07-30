import React from "react"
import Particles from "react-particles-js"
import "./App.css"
import Home from "./components/home/home"
import particlesParms from "./particlesparms.js"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesParms} />
        <Home />
        {/* <ImageForm />
        <Ai />
        <Logo> */}
      </div>
    )
  }
}

export default App
