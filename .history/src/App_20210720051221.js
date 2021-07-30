import React, { Component } from "react"
import Clarifai from "clarifai"
import Particles from "react-particles-js"
import { particlesParms } from "./particlesparms.js"
import "./App.css"
import ImageForm from "./components/imageform/imageform"
import Logo from "./components/logo/logo"
import UserInfo from "./components/userinfo/userinfo"
import Result from "./components/result/result"
import Home from "./components/home/home"
import Ai from "./components/ai/ai"
import LogIn from "./components/login/login"
import SignUp from "./components/signup/signup"

const app = new Clarifai.App({
  apiKey: "59a3da814eb441228a9f65534b4db777",
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      imageInput: "",
      imageUrl: "",
      newResponse: "",
      router: "login",
    }
  }

  displayResult = (data) => {
    const newResponse = data.outputs[0].data.concepts.find(
      ({ value }) => value > 0.9
    )

    this.setState({ newResponse: newResponse.name })
    console.log(newResponse.name)
  }

  onImageChange = (event) => {
    this.setState({ imageInput: event.target.value })
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.imageInput })
    app.models
      .predict(Clarifai.GENERAL_MODEL, this.state.imageInput)
      .then((response) => this.displayResult(response))
      .catch((err) => console.log(err))
  }

  onRouter = (router) => {
    this.setState({ router: router })
  }

  render() {
    if ({this.state.router === 'home'}) {
return ( 
    <div className="App">
        <Particles className="particles" params={particlesParms} />
        <Home onRouter={this.onRouter} />
</div>)
    }
    return (
      <div className="App">
        <Particles className="particles" params={particlesParms} />
        <Home onRouter={this.onRouter} />
        {this.state.router === "login" ? (
          <LogIn onRouter={this.onRouter} />
        ) : (
          <div>
            <Logo />
            <SignUp />
            <Ai imageUrl={this.state.imageUrl} />
            <Result newResponse={this.state.newResponse} />
            <UserInfo />
            <ImageForm
              onImageChange={this.onImageChange}
              onSubmit={this.onSubmit}
            />
          </div>
        )}
      </div>
    )
  }
}

export default App
