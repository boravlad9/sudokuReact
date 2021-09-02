import React from 'react';
import {apiLogin} from '../Services/LoginService';
import {
  Route,
  Redirect,
} from "react-router-dom";

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {email : "", parola : ""};
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeParola = this.handleChangeParola.bind(this);
  }

  loginCall(){
    apiLogin(this.state.email, this.state.parola)
    .then(response => console.log(response));
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangeParola(event) {
    this.setState({parola: event.target.value});
  }

  render() {
    return (
      <div style = {{padding : "10px"}}>
        <label> Email</label>
        <input value={this.state.email} onChange={this.handleChangeEmail}/>
        <label> Parola</label>
        <input type = "password" value={this.state.parola} onChange={this.handleChangeParola}/>
        <button onClick={this.loginCall.bind(this)}>Login</button>
      </div>
    );
  }
}

export default Login;
