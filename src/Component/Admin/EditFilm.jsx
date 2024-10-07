import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const EditFilm = ({ currentFilm, updateFilm, setEditing }) => {
  const [film, setFilm] = useState(currentFilm);

  useEffect(() => {
    setFilm(currentFilm);
  }, [currentFilm]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilm({ ...film, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateFilm(film.id, film);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>name</label>
      <input type="text" name="title" value={film.name} onChange={handleInputChange} />
      <label>name</label>
      <input type="text" name="genre" value={film.name} onChange={handleInputChange} />
      <button type="submit">Update Film</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditFilm;
