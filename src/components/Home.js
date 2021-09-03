import React from 'react';
import {
  Redirect,
} from "react-router-dom";
import {apiLogout} from '../Services/LoginService';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {isLoggedOut : false, contacte : false};
  }

  logoutCall(){
    apiLogout().then(
      data => {
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("idUser");
        this.setState({isLoggedOut : true});
      }
    );
  }

  contacteCall(){
    this.setState({contacte : true});
  }

  render() {
    const logout = this.state.isLoggedOut ? (
      <Redirect to={{pathname: "/login"}}/>
    ) : (
      <></>
    );
    const contacte = this.state.contacte ? (
      <Redirect to={{pathname: "/contacte"}}/>
    ) : (
      <></>
    );
    return (
      <div>
        <button onClick={this.logoutCall.bind(this)}>Logout</button>
        <button onClick={this.contacteCall.bind(this)}>Contacte</button>
        {logout}
        {contacte}
      </div>
    );
  }
}

export default Home;
