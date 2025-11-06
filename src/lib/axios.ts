import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
});

export default instance;
