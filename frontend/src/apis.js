import axios from "axios";

export const baseURL = "http://localhost:8765/";

export const apiClient = axios.create({
  baseURL,
  timeout: 24000,
  headers: { Accept: "applicasstion/json", "Content-Type": "application/json" }
});

// define api endpoint
export const apiPath = {
  logout: "index/logout",
  email_login: "index/email_login",
  do_register: "index/do_register",
  example: "apis"
};
