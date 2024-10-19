import { Link } from "react-router-dom";
import Navbar from "../Component/Element/Navbar/Navbar";
import Footer from "../Component/Element/Footer/Footer";
import Button from "../Component/Element/Button/Button";
import { useEffect, useState } from "react";
// import useLoginStore from "../store/store";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Ambil data pengguna yang sedang login dari localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);
  const hidePassword = (password) => {
    // Ganti password dengan tanda bintang (*)
    return "*".repeat(password.length);
  };

  if (!user) {
    return <p>No user is logged in. Please login first.</p>;
  }

  return (
    <div className="bg-slate-900">
      <Navbar />
      <div className="flex flex-col justify-center mx-[20px] lg:mx-[80px] mt-10">
        <div>
          <div className="lg:absolute flex justify-center bg-gray-300/10 rounded-3xl p-4 lg:w-[40%] lg:right-[40px] lg:mt-10">
            <img src="../assets/warning.svg" alt="" className="h-28" />
            {/* text Berlangganan */}
            <div className="flex flex-col gap-2 text-white">
              <h1 className="font-semibold text-3xl ">Beralangganan</h1>
              <p>Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p>
              <Link
                to=""
                className="bg-black/30 p-2 text-center lg:mr-8 w-[150px] ml-[60px]
              rounded-3xl py-2 lg:py-1 text-sm lg:text-lg mt-4 lg:w-1/2 hover:cursor-pointer hover:bg-gray-700"
              >
                Mulai Berlangganan
              </Link>
            </div>
          </div>
          {/* profil */}
          <h1 className="text-white font-semibold text-3xl mt-10 lg:mt-2">Profile saya</h1>
          <div className="lg:w-1/2">
            <div className="flex">
              <img src="../assets/profil.svg" alt="" className="w-32 mt-8" />
              <div className="flex flex-col gap-2 justify-center ml-10 text-white w-2/3">
                {/* edit foto */}
                <button className="border-2 border-blue-800 h-10 w-28 rounded-3xl text-blue-500">Ubah Foto</button>
                <p>
                  <img src="../assets/file.svg" alt="" className="w-5 inline mr-2" />
                  Maksimal 2 MB
                </p>
              </div>
            </div>
            {/* Edit Data Profil */}
            <div>
              <div className="relative bg-gray-200/10 rounded-xl  border-none px-6 h-20 mt-10">
                <label htmlFor="OrderNotes" className="block text-lg font-medium text-gray-300 ">
                  Username
                </label>
                <input className="text-white text-xl bg-transparent" value={user.username} readOnly />
                <div>
                  <button type="button" className="absolute right-3 top-6 text-xl bg-none ">
                    🖊
                  </button>
                </div>
              </div>
              <div className="relative bg-gray-200/10 rounded-xl  border-none px-6 h-20 mt-10">
                <label htmlFor="OrderNotes" className="block text-lg font-medium text-gray-300 ">
                  Email
                </label>
                <input className="text-white text-xl bg-transparent " value={user.email} readOnly />
                <div>
                  <button type="button" className="absolute right-3 top-6 text-xl bg-none ">
                    🖊
                  </button>
                </div>
              </div>
              <div className="relative bg-gray-200/10 rounded-xl border-none px-6 h-20 mt-10">
                <label htmlFor="OrderNotes" className="block text-lg font-medium text-gray-300 ">
                  Kata Sandi
                </label>
                <input className="text-white text-xl bg-transparent border-none" type="password" value={hidePassword(user.password)} readOnly />
                <div>
                  <button type="button" className="absolute right-3 top-6 text-xl bg-none ">
                    🖊
                  </button>
                </div>
                <Button variant="bg-blue-800 lg:ml-[-20px] hover:bg-blue-700 text-white rounded-3xl py-2 lg:py-2 text-sm lg:text-lg">Simpan</Button>
              </div>
            </div>
          </div>
          {/* Daftar Saya */}
          <h1 className="text-white font-semibold text-3xl mt-28">Daftar Saya</h1>
          <div className="flex justify-center gap-4 flex-wrap mb-10">
            {/* Card */}
            <div>
              <img src="../assets/number/Number=15.png" alt="" className="w-28 lg:w-[200px] mt-8" />
            </div>
            <div>
              <img src="../assets/number/Number=16.png" alt="" className="w-28 lg:w-[200px] mt-8" />
            </div>
            <div>
              <img src="../assets/number/Number=17.png" alt="" className="w-28 lg:w-[200px] mt-8" />
            </div>
            <div>
              <img src="../assets/number/Number=19.png" alt="" className="w-28 lg:w-[200px] mt-8" />
            </div>
            <div>
              <img src="../assets/number/Number=20.png" alt="" className="w-28 lg:w-[200px] mt-8" />
            </div>
            <div>
              <img src="../assets/number/Number=21.png" alt="" className="w-28 lg:w-[200px] mt-8" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
