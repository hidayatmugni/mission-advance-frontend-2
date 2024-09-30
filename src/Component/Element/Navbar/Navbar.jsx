import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="navbar flex justify-between items-center lg:py-6 md:py-4 p-2 mt-2 bg-slate-900">
          <div className="flex items-center gap-4 lg:gap-8 md:gap-6 ml-2 lg:ml-8 md:ml-6">
            <Link to="/beranda" className="flex items-center justify-center">
              <img src="../assets/logo.svg" alt="" className="w-8 lg:w-12" />
              <p className="font-londrina font-text-3xl font-bold lg:text-5xl text-white hidden lg:block font-sans">CHILL</p>
            </Link>
            <div className="flex text-sm gap-2 lg:gap-8 md:gap-6 lg:text-xl md:text-lg text-white font-md text-xs ml-10 ">
              <a href="#">Series</a>
              <a href="#">Films</a>
              <a href="#" className="">
                Daftar Saya
              </a>
            </div>
          </div>
          <div className="flex mr-[-20px] lg:mr-6 md:mr-6">
            <div className="">
              <img alt="" src="../assets/profil.svg" className="w-6 lg:w-10" />
            </div>
            <ul className="menu menu-horizontal">
              <li>
                <details open className="dropdown-end bg-slate-900 text-white text-sm">
                  <summary className="mr-4" />
                  <ul className="bg-slate-800 w-48 relative right-0 z-10">
                    <li className="">
                      <Link to="/beranda/profile">
                        <img src="../assets/user.svg" alt="" />
                        <p>Profil saya</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/beranda/premium">
                        <img src="../assets/star.svg" alt="" />
                        <p>Ubah Premium</p>
                      </Link>
                    </li>
                    <li>
                      <div>
                        <img src="../assets/keluar.svg" alt="" />
                        <Link to="/login">Keluar</Link>
                      </div>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
