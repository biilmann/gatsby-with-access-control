import React from "react"
import identity from "netlify-identity-widget"

export default class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {user: identity.currentUser()}
    identity.on('init', (user) => this.setState({user}))
    identity.on('login', (user) => this.setState({user}))
    identity.on('logout', () => this.setState({user: null}))
  }

  componentDidMount() {
    identity.init();
  }

  handleClick = (e) => {
    e.preventDefault()
    identity.open()
  }

  render() {
    const {user} = this.state;

    return <div><a href="#" onClick={this.handleClick}>{user ? "User Details" : "Login"}</a></div>
  }

}
