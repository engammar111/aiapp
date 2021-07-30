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
  constructor(props) {
    super(props)
    this.state = {
      imageInput: "",
      imageUrl: "",
      newResponse: "",
      router: "login",
      registered: false,
      onEmail: "",
      onPassword: "",
    }
  }

  onEmail = (event) => {
    this.setState({ onEmail: event.target.value })
  }

  onPassword = (event) => {
    this.setState({ onPassword: event.target.value })
  }

  onSubmitLogin = () => {
    console.log(this.state)
    this.props.onRouter("home")
  }

  displayResult = (data) => {
    const newResponse = data.outputs[0].data.concepts.find(
      ({ value }) => value > 0.9
    )

    this.setState({ newResponse: newResponse.name })
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
    if (router === "logout") {
      this.setState({ registered: false })
    } else if (router === "home") {
      this.setState({ registered: true })
    }
    this.setState({ router: router })
  }

  render() {
    const { registered, imageUrl, newResponse, router } = this.state
    return (
      <div className="App">
        <Particles className="particles" params={particlesParms} />
        <Home registered={registered} onRouter={this.onRouter} />
        {this.state.router === "home" ? (
          <div>
            <Logo />
            <Ai imageUrl={imageUrl} />
            <Result newResponse={newResponse} />
            <UserInfo />
            <ImageForm
              onImageChange={this.onImageChange}
              onSubmit={this.onSubmit}
            />
          </div>
        ) : router === "login" ? (
          <LogIn
            onRouter={this.onRouter}
            onEmail={this.onEmail}
            onPassword={this.onPassword}
            onSubmitLogin={this.onSubmitLogin}
          />
        ) : (
          <SignUp onRouter={this.onRouter} />
        )}
      </div>
    )
  }
}

export default App
