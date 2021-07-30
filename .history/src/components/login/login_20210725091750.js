import React, { Component } from "react"
import "./login.css"

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  onEmail = (e) => {
    this.setState({ email: e.target.value })
  }
  onPassword = (e) => {
    this.setState({ password: e.target.value })
  }

  onSubmitLogin = () => {
    console.log(this.state)
    this.props.onRouter("home")}
  }

  render() {
    const onRouter = this.props.onRouter
    return (
      <div>
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
          <main className="pa4 black-80">
            <div className="measure ">
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
                 
                  onChange = {this.onSubmitLogin}
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

export default Login
