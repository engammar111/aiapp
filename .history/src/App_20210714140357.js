import React from "react"
import Particles from "react-particles-js"
import "./App.css"
import Home from "./components/home/home"

const particlesOptions = {
  particles: {
    color: {
      value: "#ffffff",
    },
    line_linked: {
      color: {
        value: "#ffffff",
      },
    },
    number: {
      value: 200,
    },
    size: {
      value: 5,
    },
  },
  line_linked: {
    shadow: {
      enable: true,
      color: "#3CA9D1",
      blur: 5,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Home />
        {/* <ImageForm />
        <Ai />
        <Logo> */}
      </div>
    )
  }
}

export default App
