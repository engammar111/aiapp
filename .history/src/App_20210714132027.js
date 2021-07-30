import React from "react"
import Particles from "react-particles-js"
import "./App.css"
import Home from "./components/home/home"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Particles
           params={{
            polygon: {
                enable: true,
                type: 'inside',
                move: {
                    radius: 10
                },}}
        />
        <Home />
        {/* <ImageForm />
        <Ai />
        <Logo> */}
      </div>
    )
  }
}

export default App
