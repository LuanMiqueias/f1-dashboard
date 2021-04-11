import axios from "axios";

const api = axios.create({
  baseURL: "https://v1.formula-1.api-sports.io",
});

export default api;
