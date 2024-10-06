import axios from "axios";

const getMovies = (callback) => {
  axios
    .get("https://670026164da5bd2375535bbc.mockapi.io/api/movie/movie")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getMovies;
