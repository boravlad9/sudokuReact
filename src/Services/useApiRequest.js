import axios from 'axios';
import {useState} from 'react';

function getFunction(requestType, url, body, header){
  switch(requestType) {
  case 'get':
  {
    return axios.get(url, header);
  }
  case 'post':
    return axios.post(url, body, header);
  }
}

function excuteRequest(requestType, url, body, header){
  return getFunction(requestType, url, body, header);
}

export function useApiRequest(){
  const [api] = useState({excuteRequest});
  return api;
}
