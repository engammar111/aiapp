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
        "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/tomato_health_benefits_slideshow/493ss_thinkstock_rf_tomatoes_ripening_on_the_vine.jpg"
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
