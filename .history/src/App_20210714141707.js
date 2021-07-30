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
                value: "#ffffff",
              },
              line_linked: {
                color: {
                  value: "#ffffff",
                },
              },
              number: {
                value: 180,
              },
              size: {
                value: 3,
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
