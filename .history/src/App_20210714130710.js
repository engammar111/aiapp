import React from "react"
import "./App.css"
import Home from "./components/home/home"
import Particles from "react-tsparticles"
import { render } from "@testing-library/react"

class App extends Component() {
  constructor(props) {
    super(props)

    this.particlesInit = this.particlesInit.bind(this)
    this.particlesLoaded = this.particlesLoaded.bind(this)
  }

  particlesInit(main) {
    console.log(main)
  }

  particlesLoaded(container) {
    console.log(container)
  }

  render() {
    return (
      <div className="App">
        <Home />
        <Particles
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={{
            background: {
              color: {
                value: "#0d47a1",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        {/* <ImageForm />
        <Ai />
        <Logo></Logo> */}
      </div>
    )
  }
}

export default App
