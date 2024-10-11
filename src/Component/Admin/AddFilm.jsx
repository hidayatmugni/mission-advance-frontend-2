import { useState } from "react";

// eslint-disable-next-line react/prop-types
const AddFilm = ({ addFilm }) => {
  const initialFormState = { id: null, name: "", series: "" };
  const [film, setFilm] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilm({ ...film, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!film.name || !film.series) return;
    addFilm(film);
    setFilm(initialFormState);
  };

  return (
    <div className=" flex justify-center items-center w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-1/2">
        <label className="text-2xl text-slate-200">Name</label>
        <input className="p-2 lg:p-3 rounded-3xl bg-transparent text-white w-full border-white" type="text" name="name" value={film.name} onChange={handleInputChange} />
        <label className="text-2xl text-slate-200">Series</label>
        <input className="p-2 lg:p-3 rounded-3xl bg-transparent text-white w-full border-white" type="text" name="series" value={film.series} onChange={handleInputChange} />
        <button className="bg-blue-800 hover:bg-blue-700 text-slate-200 font-bold py-2 px-4 rounded-3xl" type="submit">
          Add Film
        </button>
      </form>
    </div>
  );
};

export default AddFilm;
