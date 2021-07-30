import React from "react"

const Home = ({ newResponse }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-start" }}>
      <p className="f2 link dim black pa4 pointer "> Log In </p>
      <p className="f2 link dim white b pa4 pointer ">
        {" "}
        your image contain
      </p>{" "}
      <h1 className="f1 link dim white b pa4 pointer ">{newResponse} </h1>
    </nav>
  )
}

export default Home
