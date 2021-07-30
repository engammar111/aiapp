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
        "https://d1uz88p17r663j.cloudfront.net/resized/2c0472ad81427fcd1fbf9c431f48052e_Cheese-Pizza_HB-2_1500_700.jpg"
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
