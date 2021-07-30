import React from "react"
import Particles from "react-particles-js"
import "./App.css"
import Home from "./components/home/home"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          params={{
            particles: {
              color: {
                value: "#000000",
              },
              line_linked: {
                color: {
                  value: "#000000",
                },
              },
              number: {
                value: 500,
              },
              size: {
                value: 3,
              },
            },
          }}
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
