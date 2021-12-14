import axios from "axios";

var Api = axios.create({
  baseURL: "https://7505-189-44-221-242.ngrok.io/api/",
});

export default Api;
