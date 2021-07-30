import React from "react"
import Particles from "react-particles-js"
import "./App.css"
import Home from "./components/home/home"

const particlesOptions = {
  particles: {
    color: {
      value: "#b61924",
    },
    line_linked: {
      color: {
        value: "#b61924",
      },
    },
    number: {
      value: 100,
    },
    size: {
      value: 2,
    },
  },
  line_linked: {
    shadow: {
      enable: true,
      color: "#3CA9D1",
      blur: 5,
    },
  },
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          params={{
            particlesOptions,
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
