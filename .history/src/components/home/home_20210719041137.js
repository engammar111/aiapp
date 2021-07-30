import React from "react"

const Home = ({ onRouter }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-start" }}>
      <p
        className="f2 link dim black pa4 pointer "
        onClick={() => onRouter("login")}
      >
        {" "}
        Log Out
      </p>
    </nav>
  )
}

export default Home
