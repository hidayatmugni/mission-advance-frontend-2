import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="navbar flex justify-between items-center mt-4">
          <div className="flex items-center gap-4 lg:gap-8 md:gap-6 ml-2 lg:ml-8 md:ml-6">
            <a className="">
              <img src="../assets/Logo.png" alt="" />
            </a>
            <div className="flex text-sm gap-2 lg:gap-8 md:gap-6 lg:text-xl md:text-lg text-white font-semibold text-xs ">
              <a href="#">Series</a>
              <a href="#">Films</a>
              <a href="#" className="">
                Daftar Saya
              </a>
            </div>
          </div>
          <div className="flex-none ">
            <ul className="menu menu-horizontal">
              <li>
                <div className="">
                  <img alt="" src="../assets/profil.png" className="w-6 lg:w-10" />
                </div>
              </li>
              <li>
                <details open className="dropdown-end bg-slate-900 text-white text-sm">
                  <summary className="mr-4" />
                  <ul className=" bg-slate-900 w-40 relative right-0 z-10">
                    <li className="">
                      <a>Profil saya</a>
                    </li>
                    <li>
                      <a>Ubah Premium</a>
                    </li>
                    <li>
                      <a href="">
                        <Link to="/login">Keluar</Link>
                      </a>
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
