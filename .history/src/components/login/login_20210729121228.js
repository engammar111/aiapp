import React, { Component } from "react"
import "./login.css"

export class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onEmail: "",
      onPassword: "",
    }
  }

  onEmail = (event) => {
    this.setState({ onEmail: event.target.value })
    console.log(event.target.value)
  }

  onPassword = (event) => {
    this.setState({ onPassword: event.target.value })
    console.log(event.target.value)
  }

  onSubmitLogin = () => {
    fetch("http://localhost:3001/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.onEmail,
        password: this.state.onPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "valid") {
          this.props.onRouter("home")
          this.props.updateUser()
        } else {
          console.log("u can not login")
        }
      })
      .catch((err) => console.log(err))
  }

  render() {
    const { onRouter } = this.props
    return (
      <div>
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0">Log In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f3" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmail}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f3" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="on"
                    onChange={this.onPassword}
                  />
                </div>
                <label className="pa0 ma0 lh-copy f6 pointer">
                  <input type="checkbox" /> Remember me
                </label>
              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib"
                  type="submit"
                  value="Log in"
                  onClick={this.onSubmitLogin}
                />
              </div>
              <div className="lh-copy mt3">
                <h1
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
                  onClick={() => onRouter("signup")}
                >
                  Sign up
                </h1>{" "}
              </div>
            </div>
          </main>
        </article>
      </div>
    )
  }
}

export default LogIn
