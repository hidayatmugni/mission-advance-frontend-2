/* eslint-disable react/prop-types */
const FilmList = ({ films, deleteFilm, editFilm }) => {
  return (
    <div className="film-list text-white">
      <h2>Film List</h2>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {films.length > 0 ? (
            films.map((film) => (
              <tr key={film.id}>
                <td>{film.title}</td>
                <td>{film.genre}</td>
                <td>
                  <button onClick={() => editFilm(film)}>Edit</button>
                  <button onClick={() => deleteFilm(film.id)}>Delete</button>
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
