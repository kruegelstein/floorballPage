import axios from "axios";

const BACKEND_URL = "http://localhost:8080";

export const login = (username, password) =>
  axios.post(`${BACKEND_URL}/login`, { username, password });
