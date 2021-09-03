import React from 'react';
import {apiRegister} from '../Services/RegisterServicies';
import {
  Redirect,
} from "react-router-dom";


class Register extends React.Component {

  constructor(props){
    super(props);
    this.state = {isLoggedIn :false, firstName : "", lastName : "", email : "", parola : "", preferred_industries : "", preferred_topics : "", other_topics : "", attending_reasons : ""};
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeParola = this.handleChangeParola.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
  }

  registerCall(){
    apiRegister(this.state.email, this.state.parola, this.state.firstName, this.state.lastName)
    .then(data => {
        const stringifiedData = JSON.stringify(data);
        const parsedJson = JSON.parse(stringifiedData);
        localStorage.setItem("username",`${parsedJson.data.data.user.first_name} ${parsedJson.data.data.user.last_name}`);
        localStorage.setItem("email", parsedJson.data.data.user.email);
        localStorage.setItem("token", parsedJson.data.data.access_token);
        localStorage.setItem("idUser", parsedJson.data.data.user.id);
      });
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangeParola(event) {
    this.setState({parola: event.target.value});
  }

  handleChangeFirstName(event){
    this.setState({firstName: event.target.value});
  }

  handleChangeLastName(event){
    this.setState({lastName: event.target.value});
  }

  render() {
    const ceva = this.state.isLoggedIn ? (
      <Redirect to={{pathname: "/home"}}/>
    ) : (
      <></>
    );
    return (
      <div style = {{padding : "10px"}}>
        <label> First name: </label>
        <input value={this.state.firstName} onChange={this.handleChangeFirstName}/>
        <label> Last name: </label>
        <input value={this.state.lastName} onChange={this.handleChangeLastName}/>
        <label> Email</label>
        <input value={this.state.email} onChange={this.handleChangeEmail}/>
        <label> Parola</label>
        <input type = "password" value={this.state.parola} onChange={this.handleChangeParola}/>
        <button onClick={this.registerCall.bind(this)}>Register</button>
        {ceva}
      </div>
    );
  }
}
export default Register;
