import axios from "axios";

//http://localhost:8080/api/ - url local

var Api = axios.create({
  baseURL: "http://2db3-168-121-25-140.ngrok.io/api/",
});

export default Api;
