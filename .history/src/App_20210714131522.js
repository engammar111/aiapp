import React from "react"
import "./App.css"
import Home from "./components/home/home"
import Particles from "react-particles-js"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Particles
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 5,
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
