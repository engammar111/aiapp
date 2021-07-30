import React from "react"

const Home = ({ data1 }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-start" }}>
      <p className="f2 link dim black pa4 pointer "> Log In </p>
      <p>{data1}</p>
    </nav>
  )
}

export default Home
