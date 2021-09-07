import axios from 'axios';
import {useState} from 'react';

const getFunction = (requestType) => {
  switch(requestType) {
  case 'get':
    return axios.get;
  case 'post':
    return axios.post;
  }
}

const excuteRequest = (requestType, url, body, header) => {
  let ceva = getFunction(requestType);
  console.log(ceva);
  return ceva(url, body, header);
}

function useApiRequest(requestType, url, body, header){
  const [items, setItems] = useState(excuteRequest);
  return items;
}


 export default useApiRequest;
