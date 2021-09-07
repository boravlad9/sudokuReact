import React from "react";
import Login from './Login';
import {apiLogin} from '../Services/LoginService';
import {
  useHistory
} from "react-router-dom";


function LoginFunction() {

  let history = useHistory();
  let loginCall = (email, parola) => {
    apiLogin(email, parola)
    .then(
      data => {
        localStorage.setItem("username",`${data.data.data.user.first_name} ${data.data.data.user.last_name}`);
        localStorage.setItem("email", data.data.data.user.email);
        localStorage.setItem("token", data.data.data.authentication.access_token);
        localStorage.setItem("idUser", data.data.data.user.id);
        history.push("/home");
      }
    );
  }

  return (
    <Login onClick={(email, parola) => loginCall(email, parola)}> </Login>
  );
}

export default LoginFunction;
