import React from 'react';
import {apiRegister} from '../Services/RegisterServicies';
import {
  useHistory,
} from "react-router-dom";
import Register from './Register';

function RegisterFunction() {

  let history = useHistory();

  let registerCall = (firstName, lastName, email, parola) =>{
    apiRegister(firstName, lastName, email, parola)
    .then(data => {
        localStorage.setItem("username",`${data.data.data.user.first_name} ${data.data.data.user.last_name}`);
        localStorage.setItem("email", data.data.data.user.email);
        localStorage.setItem("token", data.data.data.access_token);
        localStorage.setItem("idUser", data.data.data.user.id);
        history.push("/home");
      });
  }

  return (
    <Register onClick={(firstName, lastName, email, parola) => registerCall(firstName, lastName, email, parola)}> </Register>
  );
}

export default RegisterFunction;
