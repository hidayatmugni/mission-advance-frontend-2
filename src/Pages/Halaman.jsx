import { Link } from "react-router-dom";
import Button from "../Component/Element/Button/Button";

const Halaman = () => {
  return (
    <>
      <section className="bg-slate-900 text-white my-auto bo">
        <div className="my-auto max-w-screen-xl mx-auto px-4  py-auto sm:px-6  ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 lg:h-screen ">
            <div className="lg:py-12 my-20 lg:ml-20 ml-0">
              <p className="text-white text-xl font-light mb-6">MOVIE STREAMING PLATFORM</p>
              <h2 className="text-5xl font-bold sm:text-4xl">CHILL</h2>

              <p className="mt-4 text-white text-white text-md font-light mb-6">
                Chill adalah aplikasi berbasis web yang dirancang untuk memberi pengguna akses ke library film dan acara TV yang luas dari perangkat mereka. Chill menawarkan antarmuka yang ramah pengguna yang memungkinkan pengguna mencari
                film dan acara TV, dan mulai menonton secara instan. Chill menawarkan rekomendasi hasil personalisasi berdasarkan kebiasaan menonton pengguna, membantu pengguna menemukan film dan acara TV baru yang mungkin tidak mereka
                temukan sebelumnya. Selain itu, Chill juga menawarkan konten orisinal, termasuk film dan acara TV, yang hanya dapat ditemukan di aplikasi Chill, menjadikannya sumber yang unik dan berharga bagi pengguna.
              </p>
              <Button variant=" bg-blue-600 hover:bg-blue-700 text-white rounded-3xl py-3 text-md">
                <Link to="/login" className="text-white">
                  Get Started Today
                </Link>
              </Button>
            </div>
            <div className="relative overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-[81%] lg:mt-20">
              <img alt="" src="../assets/phone.png" className="relative inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Halaman;
