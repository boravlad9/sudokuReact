import React from 'react';
import axios from 'axios';

export const apiLogin = (email, parola) =>{
//  axios.post('https://reqres.in/api/articles', article, { headers })
//      .then(response => this.setState({ articleId: response.data.id }));
  console.log(email);
  console.log(parola);
  const headers = {
    'security-token': 'test',
  };
  return axios.post("http://meetprep.beta.bitstone.eu/api/v1/login", {
    email : email,
    password : parola
  }, {headers} );
}
