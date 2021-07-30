import React, { Component } from "react"
import Particles from "react-particles-js"
import "./App.css"
import ImageForm from "./components/imageform/imageform"
import Logo from "./components/logo/logo"
import Clarifai from "clarifai"
import UserInfo from "./components/userinfo/userinfo"
import Home from "./components/home/home"
import { particlesParms } from "./particlesparms.js"

// const app = new Clarifai.App({
//   apiKey: "59a3da814eb441228a9f65534b4db777",
// })

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       imageInput: "",
//     }
//   }

//   onImageChange = (event) => {
//     console.log(event.target.value)
//   }

//   onSubmit = () => {
//     console.log("submit")
//     app.models
//       .predict(
//         Clarifai.GENERAL_MODEL,
//         "59a3da814eb441228a9f65534b4db777",
//         "https://theconversation.com/following-a-t-shirt-from-cotton-field-to-landfill-shows-the-true-cost-of-fast-fashion-127363"
//       )
//       .then(
//         function (response) {
//           console.log(response)
//         },
//         function (err) {}
//       )
//   }

//   render() {
//     return (
//       <div className="App">
//         <Particles className="particles" params={particlesParms} />
//         <Home />
//         <Logo />
//         <UserInfo />
//         <ImageForm
//           onImageChange={this.onImageChange}
//           onSubmit={this.onSubmit}
//         />
//         {/* <Ai /> */}
//       </div>
//     )
//   }
// }

// export default App

const app = new Clarifai.App({
  apiKey: "my_api_key",
})
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
    }
  }
  calculateFaceLocation = (response) => {
    let width
    let height
    let clarifaiFace
    response.outputs[0].data.regions.forEach(function differentfaces(item) {
      clarifaiFace = item.region_info.bounding_box
      const image = document.getElementById("inputImage")
      width = Number(image.width)
      height = Number(image.height)
    })
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    )
  }
}

export default App
