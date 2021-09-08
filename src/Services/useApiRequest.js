import axios from 'axios';
import {useState} from 'react';
import {API_METHODS, API_ENDPOINTS} from "./ApiService"

const getUrl = (url) => {
  return `http://meetprep.beta.bitstone.eu/api/v1${url}`;
}

const getHeader = () => {
  let headers;
  if (localStorage.getItem('token') !== null){
    headers = {'Authorization': `Bearer ${localStorage.getItem('token')}`,'security-token' : 'test'};
  }
  else {
    headers = {'security-token': 'test'};
  }
  return {headers};
}

const computeApiRequest = (apiEndpoint) => {
  if (apiEndpoint.method === API_METHODS.GET)
    return () => axios[apiEndpoint.method](getUrl(apiEndpoint.url), getHeader());
  return (body) => axios[apiEndpoint.method](getUrl(apiEndpoint.url), body, getHeader());
}

export const useApiRequest = () => {
  let requests = {};
  Object.values(API_ENDPOINTS).map(apiEndpoint => {
    requests = {
      ...requests,
      [apiEndpoint.name]: computeApiRequest(apiEndpoint)
    }
  })
  return requests;
}
