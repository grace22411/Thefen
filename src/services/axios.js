import axios from "axios";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    /** Redirect to login if a 401 status code is returned*/
    if (error?.response?.status === 401)
      //   appHistory.replace('/login');
      return Promise.reject(error);
  }
);
