import axios from "axios";

const api = axios.create({
    baseURL: "https://node-do-zero-6x05.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
