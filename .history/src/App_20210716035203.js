import React, { Component } from "react"
import Particles from "react-particles-js"
import { particlesParms } from "./particlesparms.js"
import "./App.css"
import ImageForm from "./components/imageform/imageform"
import Logo from "./components/logo/logo"
import Clarifai from "clarifai"
import UserInfo from "./components/userinfo/userinfo"
import Home from "./components/home/home"
import Ai from "./components/ai/ai"

const app = new Clarifai.App({
  apiKey: "59a3da814eb441228a9f65534b4db777",
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      imageInput: "",
    }
  }

  onImageChange = (event) => {
    console.log(event.target.value)
  }

  onSubmit = () => {
    console.log("submit")
    app.models
      .predict(
        Clarifai.FOOD_MODEL,
        "https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg"
      )
      .then(
        function (response) {
          console.log(response)
        },
        function (err) {}
      )
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesParms} />
        <Home />
        <Logo />
        <UserInfo />
        <ImageForm
          onImageChange={this.onImageChange}
          onSubmit={this.onSubmit}
        />
        <Ai />
      </div>
    )
  }
}

export default App
