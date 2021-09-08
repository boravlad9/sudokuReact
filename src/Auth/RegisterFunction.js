import React from 'react';
import {
  useHistory,
} from "react-router-dom";
import {useApiRequest} from '../Services/useApiRequest';
import Register from './Register';

function RegisterFunction() {

  let history = useHistory();
  let api = useApiRequest();

  let registerCall = (firstName, lastName, email, parola) =>{
    api.register({
      email : email,
      password : parola,
      first_name : firstName,
      last_name : lastName,
      preferred_industries: {20: [3]},
      other_topics : [],
      attending_reasons: ["2"],
      terms: true,
      linkedin: 0
    }).then(data => {
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
