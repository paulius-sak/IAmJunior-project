import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Your API base URL
});

// Interceptor to add token to headers
AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
	console.log("Adding token to request:", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default AxiosInstance;
