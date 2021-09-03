import axios from 'axios';

export const apiRegister = (email, parola, firstName, lastName) =>{
  const headers = {
    'security-token': 'test',
  };
  return axios.post("http://meetprep.beta.bitstone.eu/api/v1/register", {
    email : email,
    password : parola,
    first_name : firstName,
    last_name : lastName,
    preferred_industries: {20: [3]},
    other_topics : [],
    attending_reasons: ["2"],
    terms: true,
    linkedin: 0
  }, {headers} );
}
