import axios from "axios";

const instance = axios.create({
    baseURL: "/", // common base URL
});

// Request interceptor: automatically add token
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// Response interceptor: handle 401 (expired or invalid token)
instance.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err.response?.status === 401) {
            const errMsg = err.response.data?.error;
            if (errMsg === "Token expired") {
                alert("Session expired. Please login again.");
            } else {
                alert(errMsg || "Unauthorized access. Please login.");
            }
            localStorage.removeItem("token");
            window.location.href = "/";
        }
        return Promise.reject(err);
    }
);

export default instance;