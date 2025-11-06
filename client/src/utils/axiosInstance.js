import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://auth-server-k6ms.onrender.com/api",
    withCredentials: true,
});

export default axiosInstance;
