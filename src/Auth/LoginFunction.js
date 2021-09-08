import React from "react";
import Login from './Login';
import {useApiRequest} from '../Services/useApiRequest';
import {
  useHistory
} from "react-router-dom";


function LoginFunction() {

  let history = useHistory();
  let api = useApiRequest();
  let loginCall = (email, parola) => {
    api.login({ email : email, password : parola}).then(
      response => {
        localStorage.setItem("username",`${response.data.data.user.first_name} ${response.data.data.user.last_name}`);
        localStorage.setItem("email", response.data.data.user.email);
        localStorage.setItem("token", response.data.data.authentication.access_token);
        localStorage.setItem("idUser", response.data.data.user.id);
        history.push("/home");
      }
    );
  }
  return (
    <Login onClick={(email, parola) => loginCall(email, parola)}> </Login>
  );
}

export default LoginFunction;
