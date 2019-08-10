import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = (e) => 
  {
    this.setState ({
      username: e.target.value
    })
  }

  handlePassword = (e) => 
  {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => 
  {
    e.preventDefault();
    if (this.state.username.length > 0 && this.state.password.length > 0)
    {
      this.props.handleLogin(this.state);
    }
    console.log(this.state.username);
    console.log(this.state.password);


  }

  render() {
    return (
      <form onSubmit = {e => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input onChange = {e => this.handleUsername(e)} value = {this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange = {e => this.handlePassword(e)} id="password" name="password" type="password" />
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
