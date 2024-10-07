import { useState } from "react";

// eslint-disable-next-line react/prop-types
const AddFilm = ({ addFilm }) => {
  const initialFormState = { id: null, title: "", genre: "" };
  const [film, setFilm] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilm({ ...film, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!film.title || !film.genre) return;
    addFilm(film);
    setFilm(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" name="title" value={film.title} onChange={handleInputChange} />
      <label>Genre</label>
      <input type="text" name="genre" value={film.genre} onChange={handleInputChange} />
      <button type="submit">Add Film</button>
    </form>
  );
};

export default AddFilm;
