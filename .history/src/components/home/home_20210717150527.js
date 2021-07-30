import React from "react"

const Home = ({ data }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-start" }}>
      <p className="f2 link dim black pa4 pointer "> Log In </p>
      <p>{data}</p>
    </nav>
  )
}

export default Home
