import React, { Component } from "react"
import Particles from "react-particles-js"
import MyComponent from "./components/animation/animation"
import "./App.css"
import ImageForm from "./components/imageform/imageform"
import Logo from "./components/logo/logo"
import Clarifai from "clarifai"
import UserInfo from "./components/userinfo/userinfo"
import Home from "./components/home/home"
import { particlesParms } from "./particlesparms.js"

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
        Clarifai.FACE_DETECT_MODEL,
        "59a3da814eb441228a9f65534b4db777",
        "https://cdn.shopify.com/s/files/1/0274/3641/7160/products/PG.SEGALAXIE3-LPI01.PZ_2000x.jpg"
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
        {/* <Ai /> */}
      </div>
    )
  }
}

export default App