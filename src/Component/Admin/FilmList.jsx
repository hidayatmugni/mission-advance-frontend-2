/* eslint-disable react/prop-types */
const FilmList = ({ films, deleteFilm, editFilm }) => {
  return (
    <div className="film-list text-white bg-slate-900 p-4 w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Film List</h2>
      <table className="text-black border border-slate-300 w-full mt-4 text-lg font-medium text-center">
        <thead className="text-black bg-slate-300 ">
          <tr className="bg-slate-500">
            <th className="border border-slate-900">Id</th>
            <th className="border border-slate-900">Name</th>
            <th className="border border-slate-900">Series</th>
            <th className="border border-slate-900">Image</th>
            <th className="border border-slate-900">Actions</th>
          </tr>
        </thead>
        <tbody className="text-slate-900 bg-slate-500 ">
          {films.length > 0 ? (
            films.map((film) => (
              <tr key={film.id} className="odd:bg-slate-400 even:bg-slate-300 ">
                <td className="border border-slate-900">{film.id}</td>
                <td className="border border-slate-900">{film.name}</td>
                <td className="border border-slate-900">{film.series}</td>
                <td className="border border-slate-900">
                  <img src={film.image} className="w-20 h-20 lg:w-40 lg:h-40 rounded-lg m-auto" alt="" />
                </td>
                <td className="flex gap-2 justify-center  items-center   ">
                  <button onClick={() => editFilm(film)} className="bg-blue-500 hover:bg-blue-700 text-slate-200 font-bold py-1 px-2 rounded">
                    Edit
                  </button>
                  <button onClick={() => deleteFilm(film.id)} className="bg-red-500 hover:bg-red-700 text-slate-200 font-bold py-1 px-2 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No films</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FilmList;
