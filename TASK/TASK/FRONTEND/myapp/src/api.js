import axios from "axios";

export const api = axios.create({
  baseURL: "https://YOUR_BACKEND_URL/api/",
});
