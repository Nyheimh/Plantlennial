import axios from "axios";

const baseUrl =
  process.env.VERCEL_ENV === "production"
    ? "https://plantlennial.vercel.app"
    : "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
