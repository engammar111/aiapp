import React from "react"

const Home = ({ newResponse, onRuter }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-start" }}>
      <p className="f2 link dim black pa4 pointer " onClick={onRuter}>
        {" "}
        Log Out {newResponse}
      </p>
    </nav>
  )
}

export default Home
