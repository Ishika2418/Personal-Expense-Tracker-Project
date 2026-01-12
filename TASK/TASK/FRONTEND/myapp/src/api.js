import axios from "axios";

export const api = axios.create({
  baseURL: "https://personal-expense-tracker-project-3.onrender.com/api/",
});
