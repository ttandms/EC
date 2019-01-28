import { apiClient, apiPath } from "../api";

export default class Dispatchers {
  constructor(dispatch) {
    this.dispatch = dispatch;
    this.singup = this.singup.bind(this);
  }
  async singup(name, email, tell, birthday, password) {
    const response = await apiClient.post(apiPath.example, {
      name,
      email,
      tell,
      birthday,
      password
    });
    const { data: payload } = response;
  }
}
