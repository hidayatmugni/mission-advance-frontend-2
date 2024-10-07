import { useEffect, useState } from "react";
import axios from "axios";
import FilmList from "../Component/Admin/FilmList";
import AddFilm from "../Component/Admin/AddFilm";
import EditFilm from "../Component/Admin/EditFilm";

const API_URL = "https://670026164da5bd2375535bbc.mockapi.io/api/movie/movie"; // Ganti dengan URL MockAPI Anda

const App = () => {
  const [films, setFilms] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentFilm, setCurrentFilm] = useState({
    id: null,
    name: "",
    image: "",
  });

  // Fetch data dari API
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setFilms(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the films!", error);
      });
  }, []);

  // Tambah Film
  const addFilm = (film) => {
    axios.post(API_URL, film).then((response) => {
      setFilms([...films, response.data]);
    });
  };

  // Hapus Film
  const deleteFilm = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setFilms(films.filter((film) => film.id !== id));
    });
  };

  // Edit Film
  const editFilm = (film) => {
    setEditing(true);
    setCurrentFilm(film);
  };

  // Update Film
  const updateFilm = (id, updatedFilm) => {
    axios.put(`${API_URL}/${id}`, updatedFilm).then(() => {
      setFilms(films.map((film) => (film.id === id ? updatedFilm : film)));
      setEditing(false);
      setCurrentFilm({ id: null, name: "", image: "" });
    });
  };

  return (
    <div className="container mx-auto bg-slate-900">
      <h1>Admin Dashboard - CRUD Films</h1>
      {editing ? <EditFilm currentFilm={currentFilm} updateFilm={updateFilm} setEditing={setEditing} /> : <AddFilm addFilm={addFilm} />}
      <FilmList films={films} deleteFilm={deleteFilm} editFilm={editFilm} />
    </div>
  );
};

export default App;
