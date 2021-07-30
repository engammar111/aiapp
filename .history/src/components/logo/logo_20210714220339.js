// import React, { Component } from "react"
// import "./logo.css"
// import ai from "./ai.png"

// class Logo extends Component {
//   render() {
//     return (
//       <div
//         className=" logo pa0 br2 shadow-1 ma5"
//         style={{ height: 200, width: 200 }}
//       >
//         {" "}
//         <img src={ai} alt="ai" />
//       </div>
//     )
//   }
// }

import React from "react"
import { Header, Image } from "semantic-ui-react"

class Logo extends Component {
    render() {
       return ( 
         <div>
 <Header as="h2">
    <Image circular src={ai} alt="ai" />
  </Header>
         </div>
 
)}

export default Logo

// export default Logo
