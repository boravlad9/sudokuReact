export const API_METHODS = {POST : "post", GET : "get"};

export const API_ENDPOINTS = {
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
