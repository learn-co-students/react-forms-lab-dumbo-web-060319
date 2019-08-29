import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  hasValidFields = () => {
    const fieldValues = Object.keys(this.state).map(i => this.state[i] !== '')
    return fieldValues.every(i => i === true);
  }

  login = (e) => {
    e.preventDefault()
    console.log(this.state.username);
    this.hasValidFields() ? this.props.handleLogin(this.state) : console.log('inwalid');
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <div>
          <label>
            Username
            <input id="username" value={this.state.username} onChange={this.handleInputChange} name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" value={this.state.password} onChange={this.handleInputChange} name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
