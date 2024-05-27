import axios from "axios";
import useAuthStore from "../context/useAuthStore";
import { jwtDecode } from "jwt-decode";
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const getUserId = () => {
  const token = useAuthStore.getState().token;
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.userId;
  return userId;
};

const redirectToLogin = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

const axiosConfig = () => {
  const token = useAuthStore.getState().token || localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const makeRequest = async (url, method, data) => {
  try {
    const config = axiosConfig();
    if (data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }
    console.log(data);
    const response = await axios({
      url: `${BASE_URL}${url}`,
      method,
      data,
      ...config,
    });
    console.log(response);
    if (!response) {
      throw new Error(`${method} Error`);
    }

    return response.data;
  } catch (error) {
    if (error.response?.data?.message === "jwt expired") {
      redirectToLogin();
    }
    const customError = error;
    throw new Error(customError.response?.data?.message || "An error occurred");
  }
};

export const postRegister = async (data) =>
  makeRequest("api/v1/accounts/register", "post", data);

export const postLogin = async (data) =>
  makeRequest("api/v1/accounts/login", "post", data);

export const putChangePassword = async (data) =>
  makeRequest(`api/v1/accounts/${getUserId()}/change-password`, "put", data);

export const getSingleProfile = async () =>
  makeRequest(`api/v1/users/${getUserId()}/findById`, "get");

export const postCreateBookings = async (data) =>
  makeRequest(`api/v1/bookings/create`, "post", data);

export const getUnitAll = async () => makeRequest(`api/v1/units/all`, "get");

export const getInsuranceAll = async () =>
  makeRequest(`api/v1/insurance/all`, "get");
