import axios from 'axios';

export const apiLogin = (email, parola) =>{
  const headers = {
    'security-token': 'test',
  };
  return axios.post("http://meetprep.beta.bitstone.eu/api/v1/login", {
    email : email,
    password : parola
  }, {headers} );
}

export const apiLogout = () =>{
  const headers = {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'security-token': 'test'};
  return axios.post("http://meetprep.beta.bitstone.eu/api/v1/logout", {}, {headers} );
}
