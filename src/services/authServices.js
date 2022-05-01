import axios from "axios";
import Cookies from "js-cookie";
import history from "../utils/history";
const API = `https://fierce-crag-66560.herokuapp.com/api/v1`;

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-access-token"] = token;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.defaults.baseURL = API + "";
  } else {
    delete axios.defaults.headers.common["x-access-token"];
  }
};

const clearUserData = (route = "/login", reroute = true) => {
  localStorage.removeItem("userDetails");
  Cookies.remove("token");
  reroute && history.replace(route);
};

const isTokenExpired = (token) => {
  const authToken = token.split(".");
  const expiry = new Date(atob(authToken[1])).exp * 1000;
  const today = new Date();
  return today >= expiry;
};

export const handleRouteAuthStatus = ({ cancelLoading }, { showMessage }) => {
  if (Cookies.get("token")) {
    // we have a user token
    isTokenExpired(Cookies.get("token")) &&
      (() => {
        showMessage("Session Expired");
        clearUserData();
      })();
    cancelLoading();
  } else {
    //no previous login/activity
    showMessage("Please, login 😊");
    clearUserData();
    cancelLoading();
  }
};

export const handleBasicAuth = ({ cancelLoading }, { showMessage }) => {
  axios.defaults.baseURL = API;
  //   check if we have auths in the first place
  if (Cookies.get("token")) {
    // we have a user token
    const token = Cookies.get("token");
    isTokenExpired(token)
      ? (() => {
          showMessage("Session Expired");
          clearUserData();
        })()
      : setAuthToken(token);
    cancelLoading();
  } else {
    //no previous login/activity
    // showMessage("Please, login 😊");
    clearUserData("", false);
    cancelLoading();
  }
};

export const isLoggedIn = () => {
  if (Cookies.get("token")) {
    // we have a user token
    const token = Cookies.get("token");
    return isTokenExpired(token) ? false : true;
  } else {
    return false;
  }
};
