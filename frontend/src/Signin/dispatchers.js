import { apiClient, apiPath } from "../api";
import { GET_USER_INFO } from "./actions";

export default class Dispatchers {
  constructor(dispatch) {
    this.dispatch = dispatch;
    this.Singin = this.Singin.bind(this);
  }
  async Singin(email, password) {
    const response = await apiClient.post(apiPath.example, { email, password });
    const { data: payload } = response;
    this.dispatch({ type: GET_USER_INFO, payload });
  }
}
