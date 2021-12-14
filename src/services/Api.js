import axios from "axios";

var Api = axios.create({
  baseURL: "https://moody-zebra-52.loca.lt/api/",
});

export default Api;
