import React from "react"

const Home = (response) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-start" }}>
      <p className="f2 link dim black pa4 pointer "> Log In</p>
      <p>
        {response.map((response) =>  <div>
          {response.name
        }) </div>}
      </p>
    </nav>
  )
}

export default Home
