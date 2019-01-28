import { push } from "connected-react-router";

export default class Dispatchers {
  constructor(dispatch) {
    this.dispatch = dispatch;
    this.userWillTransfer = this.userWillTransfer.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  //  ログイン済み→projects ログインしてない→signup　にRedirect
  userWillTransfer() {
    if (this.isLoggedIn()) {
      this.dispatch(push("/projects"));
    } else {
      this.dispatch(push("/signin"));
    }
  }

  // ログインしてるかここで判定
  isLoggedIn() {
    return false;
  }
}
