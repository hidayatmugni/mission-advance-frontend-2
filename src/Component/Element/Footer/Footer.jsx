const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 w-full">
        <div className=" lg:w-screen py-12 px-4 sm:px-6 lg:px-8 lg:py-12">
          <div className="lg:flex lg:items-center lg:gap-20 lg:justify-around border-t border-gray-700-4">
            <div className="text-left lg:text-left lg:w-1/4">
              <img src="../assets/Logo.png" alt="" className="w-40" />
              <p className="text-sm text-white mt-4 lg:mt-8 lg:text-lg ">Copyright 2024 By mugnihidayat</p>
            </div>
            <div>
              <p className="font-semibold text-2xl text-white mb-4 mt-8 lg:mt-4">Genre</p>
              <ul className="mt-2 flex flex-col gap-4 text-sm text-white lg:flex lg:flex-row lg:gap-10 lg:justify-between lg:items-start ">
                <div className="lg:flex lg:flex-col lg:gap-2 lg:items-start ">
                  <li>
                    <a href="#" className="hover:text-gray-600">
                      Aksi
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:text-gray-600">
                      Anak-anak
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:text-gray-600">
                      Anime
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-600">
                      Britania
                    </a>
                  </li>
                </div>
                <div className=" lg:flex lg:flex-col lg:gap-2 lg:items-start">
                  <li>
                    <a href="#" className="hover:text-gray-600">
                      Drama
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-600">
                      Fantasi Ilmiah dan Ilmiah
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-600">
                      kejahatan
                    </a>
                  </li>
                </div>
                <div className="lg:flex lg:flex-col lg:gap-2 lg:items-start">
                  <li>
                    <a href="#" className="hover:text-gray-600">
                      KDrama
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-600">
                      Komedi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-600">
                      Pertualangan
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-600">
                      Perang
                    </a>
                  </li>
                </div>
                <div className="lg:flex lg:flex-col lg:gap-2 lg:items-start">
                  <li>
                    <a href="#" className="hover:text-gray-600">
                      Romantis
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-600">
                      Sains & Alam
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-600">
                      Thriller
                    </a>
                  </li>
                </div>
              </ul>
            </div>
            <div>
              <p className="font-medium mt-10 text-2xl text-white">Bantuan</p>

              <ul className="mt-6 space-y-4 text-sm text-white">
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    {" "}
                    FAQ{" "}
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    {" "}
                    Kontak Kami{" "}
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    {" "}
                    Privasi{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    {" "}
                    Syarat & Ketentuan{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
