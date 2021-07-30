import React from "react"
import "./App.css"
import Particles from "tsparticles"
import Home from "./components/home/home"

const particles = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5,
      },
    },
  },
}

function App() {
  return (
    <div className="App">
      <Particles params={particles} />
      <Home />
      {/* <ImageForm />
      <Ai />
      <Logo></Logo> */}
    </div>
  )
}

export default App
