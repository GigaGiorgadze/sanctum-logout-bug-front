import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withCredentials: true,
    withXSRFToken: true,
});

instance.interceptors.request.use(async (config) => {
    if (config.withXSRFToken && config.method === "post") {
        await instance.get("/sanctum/csrf-cookie");
    }
    return config;
});

export { instance };
