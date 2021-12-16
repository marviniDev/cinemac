import axios from "axios";

//http://localhost:8080/api/ - url local

var Api = axios.create({
  baseURL: "https://3747-189-44-221-242.ngrok.io/api/",
});

export default Api;
