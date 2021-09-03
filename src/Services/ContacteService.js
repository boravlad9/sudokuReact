import axios from 'axios';

export const apiContacte = () =>{
  const headers = {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'security-token': 'test'};
  return axios.get("http://meetprep.beta.bitstone.eu/api/v1/contacts", {headers} );
}
