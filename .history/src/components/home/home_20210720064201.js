import React from "react"

const Home = ({ onRouter, registered }) => {
  if (registered) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-start" }}>
        <p
          className="f2 link dim black pa4 pointer "
          onClick={() => onRouter("logout")}
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
          onClick={() => onRouter("login")}
        >
          {" "}
          Log In
        </p>
        <p
          className="f2 link dim black pa4 pointer "
          onClick={() => onRouter("signup")}
        >
          {" "}
          Sign Up
        </p>
      </nav>
    )
  }
}

export default Home
