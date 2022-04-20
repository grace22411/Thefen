import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

// const http: AxiosInstance = axios.create({
//   baseURL: `https://fierce-crag-66560.herokuapp.com/api/v1`,
//   headers: { Accept: "application/json", "Content-Type": "application/json" },
// });

// http.defaults.headers.post["Content-Type"] = "application/json";

// http.interceptors.response.use(
//   async (response: AxiosResponse) => {
//     return response;
//   },
//   (error: AxiosError) => {
//     const {
//       response,
//       request,
//     }: {
//       response?: AxiosResponse;
//       request?: XMLHttpRequest;
//     } = error;
//     console.log(response?.data);
//     if (response) {
//       if (
//         response?.status === 401 &&
//         response?.data?.error === "Token expired"
//       ) {
//         console.log("Err");
//       }
//       // return null;
//     } else if (request) {
//       console.log("Err");
//       // return null;
//     }
//     return Promise.reject(error);
//   }
// );

export const register = `auth/signup`;
export const login = `auth/login`;
export const forgotpassword = `auth/forgotpassword`;
export const resetpassword = `auth/resetpassword`;
export const updatepassword = `auth/changepassword`;

//add store
export const addstore = `store`;
export const getAllStore = `store`;

//get categories

export const getCategory = `category`;
//initiaite request
export const initiateRequest = `request`;

// export default http;
