import axios from "axios";

const api = axios.create({
  baseURL: "http://65.1.110.207:5002/api"
});

export default api;