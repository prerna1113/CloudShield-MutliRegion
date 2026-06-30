import axios from "axios";

const api = axios.create({
  baseURL: "http://43.204.214.68:5002/api"
});

export default api;