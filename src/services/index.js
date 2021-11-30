import axios from "axios"

//servidor local
const api = axios.create({
  baseURL: "http://localhost:3001",
})

export default api