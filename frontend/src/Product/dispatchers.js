import { apiClient, apiPath } from "../api";

export default class Dispatchers {
  constructor(dispatch) {
    this.dispatch = dispatch;
    this.create = this.create.bind(this);
  }
  async create(name, detail, img_path, price, stock, category) {
    const response = await apiClient.post(apiPath.example, {
      name,
      detail,
      img_path,
      price,
      stock,
      category
    });
    const { data: payload } = response;
  }
}
