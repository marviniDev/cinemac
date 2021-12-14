import axios from "axios";

var Api = axios.create({
  baseURL: "http://a832-187-18-128-172.ngrok.io/api/",
});

export default Api;
