import axios from "axios";

var Api = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export default Api;
