import { useEffect, useState } from "react";
import useApi from "../stores/useApi";
import { Link, useNavigate } from "react-router-dom";

const App = () => {
  const { data, loading, error, fetchData, addData, updateData, deleteData } = useApi(); // Menggunakan custom hook
  const [name, setName] = useState("");
  const [series, setSeries] = useState("");
  const [editId, setEditId] = useState(null); // Untuk menyimpan ID film yang sedang di-edit
  const [editTitle, setEditTitle] = useState("");

  useEffect(() => {
    fetchData(); // Mengambil data ketika komponen di-mount
  }, [fetchData]);

  const handleAddFilm = () => {
    const newFilm = { name, series };
    addData(newFilm);
    setName("");
    setSeries(""); // Reset input setelah menambah Film
  };

  const handleEditFilm = (film) => {
    setName(film.name);
    setSeries(film.series);
    setEditId(film.id); // Menyimpan ID film yang akan di-edit
    setEditTitle("Edit Film");
  };

  const handleUpdateFilm = () => {
    const updatedFilm = { name, series };
    updateData(editId, updatedFilm); // Update film dengan ID yang disimpan
    setName("");
    setSeries("");
    setEditId(null); // Reset form setelah update
    setEditTitle(""); // Kembali ke mode tambah film
  };

  const handleDeleteFilm = (id) => {
    deleteData(id); // Menghapus Film berdasarkan id
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex w-full bg-slate-900">
      {/* Sidebar dan Logout */}
      <div>
        <div className="flex min-h-full  w-16 flex-col justify-between border-r border-e bg-slate-800  fixed ">
          <div>
            <div className="inline-flex size-16 items-center justify-center">
              <span className="grid size-12 place-content-center rounded-lg bg-gray-600 text-sm px-2 font-semibold text-slate-200">CHILL</span>
            </div>

            <div className="border-t border-gray-100">
              <div className="px-2">
                <div className="py-4">
                  <Link to="/beranda" className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">Beranda</span>
                  </Link>
                </div>

                <ul className="space-y-1 border-t border-gray-100 pt-4">
                  <li>
                    <a href="#" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>

                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">Teams</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>

                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">Billing</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>

                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">Invoices</span>
                    </a>
                  </li>

                  <li>
                    <Link to="/beranda/profile" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>

                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">Profil</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-slate-900 p-2">
            <form action="#">
              <button onClick={handleLogout} className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-slate-900 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>

                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-slate-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">Logout</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-black bg-slate-900 pl-14 lg:p-20 lg:w-full w-3/4">
        <h1 className="text-2xl font-bold mb-4 lg:text-5xl ml-24 lg:ml-0 text-center mt-10 mb-20 text-white border-b-2 border-slate-300 pb-6">Admin Dashboard - CRUD Films</h1>

        {/* Form Input */}
        <div className="flex justify-center items-center w-full">
          <form onSubmit={editTitle === "Edit Film" ? handleUpdateFilm : handleAddFilm} className="flex flex-col ml-24 lg:ml-0 gap-2 w-full lg:w-1/2">
            <label className="text-2xl text-slate-200">Name</label>
            <input className="p-2 lg:p-3 rounded-3xl bg-transparent text-white w-full border-white" type="text" placeholder="Masukan nama film" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label className="text-2xl text-slate-200">Series</label>
            <input className="p-2 lg:p-3 rounded-3xl bg-transparent text-white w-full border-white" type="text" placeholder="Masukan series film" name="series" value={series} onChange={(e) => setSeries(e.target.value)} />
            <button className="bg-blue-800 hover:bg-blue-600 text-slate-200 font-bold py-2 mt-4 px-4 rounded-3xl" type="submit">
              {editTitle === "Edit Film" ? "Update Film" : "Add Film"}
            </button>
          </form>
        </div>

        {/* Film List */}
        <div className="film-list text-white bg-slate-900 p-4 w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Film List</h2>
          <table className="text-black border border-slate-300 w-full mt-4 text-xs lg:text-lg font-medium text-center">
            <thead className="text-black bg-slate-300">
              <tr className="bg-slate-500">
                <th className="border border-slate-900">Id</th>
                <th className="border border-slate-900">Name</th>
                <th className="border border-slate-900">Series</th>
                <th className="border border-slate-900">Image</th>
                <th className="border border-slate-900">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-900 bg-slate-500">
              {data.length > 0 ? (
                data.map((film) => (
                  <tr key={film.id} className="odd:bg-slate-400 even:bg-slate-300">
                    <td className="border border-slate-900">{film.id}</td>
                    <td className="border border-slate-900">{film.name}</td>
                    <td className="border border-slate-900">{film.series}</td>
                    <td className="border border-slate-900">{film.image}</td>
                    <td className="flex gap-2 justify-center items-center">
                      <button onClick={() => handleEditFilm(film)} className="bg-blue-500 hover:bg-blue-700 text-slate-200 font-bold py-1 px-2 rounded">
                        Edit
                      </button>
                      <button onClick={() => handleDeleteFilm(film.id)} className="bg-red-500 hover:bg-red-700 text-slate-200 font-bold py-1 px-2 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No films</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
