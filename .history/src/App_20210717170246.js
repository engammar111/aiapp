import React, { Component } from "react"
import Clarifai from "clarifai"
import Particles from "react-particles-js"
import { particlesParms } from "./particlesparms.js"
import "./App.css"
import ImageForm from "./components/imageform/imageform"
import Logo from "./components/logo/logo"
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
      imageUrl: "",
      newResponse: {},
      data1: {},
    }
  }

  homeShowRes = (data) => {
    const newResponse = data.outputs[0].data.concepts.find(
      ({ value }) => value > 0.8
    )
    this.setState({ newResponse: newResponse })
    console.log(newResponse)
  }

  displayReponse = (data1) => {
    console.log(data1)
    this.setState({ data1: data1 })
  }

  onImageChange = (event) => {
    this.setState({ imageInput: event.target.value })
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.imageInput })
    app.models
      .predict(Clarifai.FOOD_MODEL, this.state.imageInput)
      .then((response) => this.homeShowRes(response))
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesParms} />
        <Home newResponse={this.state.newResponse} />
        <Logo />
        <Ai imageUrl={this.state.imageUrl} />
        <UserInfo />
        <ImageForm
          onImageChange={this.onImageChange}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export default App
