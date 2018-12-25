import axios from "axios";

// Google Maps APIが指定した必須パラメータ(この場合はaddress)をparamsに渡す。
export default function handleGetLatAndLng() {
  const ENDPOINT = "http://localhost:8765/apis?query=test&from=React";
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  };
  axios.defaults.headers.post["Content-Type"] =
    "application/json;charset=utf-8";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  axios
    .get(ENDPOINT)
    .then(results => {
      // 以下のGoogle API のレスポンスの例を元に欲しいデータを取得
      console.log(results);
      const data = results.data;
      console.log(data);
    })
    .catch(() => {
      console.log("通信に失敗しました。");
    });
}
