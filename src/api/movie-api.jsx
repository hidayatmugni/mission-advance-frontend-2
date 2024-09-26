import Axios from "axios";

const movieApi = Axios.create({
  baseURL: "http://localhost:4000/movies",
});

export default movieApi;
