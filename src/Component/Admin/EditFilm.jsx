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
      <input type="text" name="series" value={film.series} onChange={handleInputChange} readOnly={false} />
      <button type="submit" className=" ml-2 mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Update Film
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditFilm;
