import axios from 'axios';
import {useState} from 'react';

const API_METHODS = {POST : "post", GET : "get"};

const API_ENDPOINTS = {
  LOGIN: {
    name: 'login',
    url : "/login",
    method: API_METHODS.POST
  },
  REGISTER: {
    name: 'register',
    url : "/register",
    method: API_METHODS.POST
  },
  CONSTACTS: {
    name: 'contacts',
    url : "/contacts",
    method: API_METHODS.GET
  },
  LOGOUT: {
    name: 'logout',
    url : "/logout",
    method: API_METHODS.POST
  }
};

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

//(body) => axios[apiEndpoint.method](apiEndpoint.url, body, header)
