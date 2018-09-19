import axiosInstance from "../config/axios.config";

const headers = {};
const baseUrl = "http://localhost:1988/";

export function registerUser(userData) {
  const config = {
    method: "POST",
    headers,
    data: userData
  };

  return axiosInstance(baseUrl, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
}

const responseSuccessHandler = response => {
  return response.data;
};

const responseErrorHandler = error => {
  console.log(error);
  return Promise.reject(error);
};