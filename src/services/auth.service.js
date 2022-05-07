import axios from "axios";

import { API_URL } from "../Config";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  let token = localStorage.getItem("session");
  return axios.get(API_URL + "mobile/login/get_token_authentication",{headers: {
    'token': token
  }}).then((response) => {
    if(response.data.status === true){
      localStorage.setItem("session", response.data.result)
      return true;
    }
    return false;
  });
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
