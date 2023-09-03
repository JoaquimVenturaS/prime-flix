import axios from "axios";
//BASE_URL: https://api.themoviedb.org/3/
//URL DA API: https://api.themoviedb.org/3/person/popular?language=en-US&page=1

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
