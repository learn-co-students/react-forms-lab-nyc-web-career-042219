import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  // handleLogin = (event) => {
  //   debugger
  //   if (username.value.lengut > 0 || password.value.lengut > 0) {
  //     event.preventDefault()
  //     this.setState({
  //       [event.target.name]: event.target.value
  //     })
  //   }
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0 ) {
      console.log("checking")
    return this.props.handleLogin(this.state)
    }
  }

  

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  } 

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}/>
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
