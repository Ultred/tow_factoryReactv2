import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const axiosConfig = {
  withCredentials: true,
};

const makeRequest = async (url, method, data) => {
  //console.log(data);
  try {
    const config = {
      ...axiosConfig,
    };

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
  makeRequest("/api/users/register", "post", data);
