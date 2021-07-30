import React from "react"

const Home = ({ newResponse }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-start" }}>
      <p className="f2 link dim black pa4 pointer "> Log In </p>
      <p className="f2 link dim black pa4 pointer ">
        {" "}
        your image contain {newResponse}
      </p>
    </nav>
  )
}

export default Home
