import axios from "axios";
import useAuthStore from "../context/useAuthStore";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
const token = useAuthStore.getState().token;

const axiosConfig = {
  // withCredentials: true,
  headers: {
    // Add Authorization header with your bearer token
    Authorization: token,
  },
};

const makeRequest = async (url, method, data) => {
  try {
    const config = {
      ...axiosConfig,
    };
    console.log(data);
    if (data instanceof FormData) {
      config.headers = {
        "Content-Type": "multipart/form-data",
      };
    }

    const response = await axios({
      url: `${BASE_URL}${url}`,
      method,
      data,
      ...config,
    });

    if (!response) {
      throw new Error(`${method} Error`);
    }

    return response.data;
  } catch (error) {
    const customError = error;
    throw new Error(customError.response?.data?.message || "An error occurred");
  }
};

export const postRegister = async (data) =>
  makeRequest("api/v1/accounts/register", "post", data);

export const postLogin = async (data) =>
  makeRequest("api/v1/accounts/login", "post", data);

export const putChangePassword = async (userId, data) =>
  makeRequest(`api/v1/accounts/${userId}/change-password`, "put", data);
