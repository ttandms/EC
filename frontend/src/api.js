import axios from "axios";

export const baseURL = "http://localhost:8765/";

export const apiClient = axios.create({
  baseURL,
  timeout: 24000,
  headers: { Accept: "applicasstion/json", "Content-Type": "application/json" }
});

// define api endpoint
export const apiPath = {
  // [POST] ログアウト
  logout: "logout",

  // [POST] emailログイン {"email", "password"}
  login: "login",

  // [POST] 会員登録 {name, email, tell, birthday, password}
  register: "register",

  // apiの例
  example: "apis"
};
