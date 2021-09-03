import React from 'react';
import {apiLogin} from '../Services/LoginService';
import {useAuth} from '../Routing/PrivateRoute';
import {
  Redirect,
} from "react-router-dom";

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {email : "", parola : "", isLoggedIn : false};
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeParola = this.handleChangeParola.bind(this);
  }

  loginCall(){
    apiLogin(this.state.email, this.state.parola)
    .then(
      data => {
        const stringifiedData = JSON.stringify(data);
        const parsedJson = JSON.parse(stringifiedData);

        localStorage.setItem("username",`${parsedJson.data.data.user.first_name} ${parsedJson.data.data.user.last_name}`);
        localStorage.setItem("email", parsedJson.data.data.user.email);
        localStorage.setItem("token", parsedJson.data.data.authentication.access_token);
        localStorage.setItem("idUser", parsedJson.data.data.user.id);
        this.setState({isLoggedIn : true});
      }
    );
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangeParola(event) {
    this.setState({parola: event.target.value});
  }

  render() {
    const ceva = this.state.isLoggedIn ? (
      <Redirect to={{pathname: "/home"}}/>
    ) : (
      <></>
    );
    return (
      <div style = {{padding : "10px"}}>
        <label> Email</label>
        <input value={this.state.email} onChange={this.handleChangeEmail}/>
        <label> Parola</label>
        <input type = "password" value={this.state.parola} onChange={this.handleChangeParola}/>
        <button onClick={this.loginCall.bind(this)}>Login</button>
        {ceva}
      </div>
    );
  }
}

export default Login;
