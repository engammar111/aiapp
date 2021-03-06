import React, { Component } from "react"

export class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onEmail: "",
      onPassword: "",
      onName: "",
    }
  }

  onName = (event) => {
    this.setState({ onName: event.target.value })
    console.log(event.target.value)
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
    fetch("http://protected-oasis-78063.herokuapp.com/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.onEmail,
        password: this.state.onPassword,
        name: this.state.onName,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          this.props.updateUser(user)
          this.props.onRouter("home")
        }
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
          <main className="pa4 black-80">
            <div className="measure ">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0">Sign Up</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f3" htmlFor="email-address">
                    Name
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="name"
                    name="name"
                    id="name"
                    onChange={this.onName}
                  />
                </div>
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
              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib"
                  type="submit"
                  value="Sign Up"
                  onClick={this.onSubmitLogin}
                />
              </div>
            </div>
          </main>
        </article>
      </div>
    )
  }
}

export default SignUp
