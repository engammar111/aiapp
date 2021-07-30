import React from "react"

const Home = ({ onRouter, logged }) => {
  if (logged) {
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
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-start" }}>
        <p
          className="f2 link dim black pa4 pointer "
          onClick={() => onRouter("home")}
        >
          {" "}
          Log In
        </p>
        <p
          className="f2 link dim black pa4 pointer "
          onClick={() => onRouter("logihomen")}
        >
          {" "}
          Sign Up
        </p>
      </nav>
    )
  }
}

export default Home
