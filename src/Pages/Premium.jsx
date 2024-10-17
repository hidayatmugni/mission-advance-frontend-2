import Footer from "../Component/Element/Footer/Footer";
import Navbar from "../Component/Element/Navbar/Navbar";

const Premium = () => {
  return (
    <div className="bg-slate-900">
      <Navbar></Navbar>
      {/* why choice us */}
      <div className="lg:mx-[80px] my-[80px] ">
        <h1 className="text-white font-semibold text-2xl lg:text-4xl text-center mt-20 mb-10">Menapa Harus Berlangganan?</h1>
        <div className="flex flex-wrap gap-[40px] justify-center py-[40px] ">
          <div className="flex flex-col items-center gap-[24px] lg:w-[400px]">
            <img src="../assets/arrow-down.svg" alt="" className="h-10" />
            <p className="text-center text-grey-600 font-medium w-[150px] ">Download Konten Pilihan</p>
          </div>
          <div className="flex flex-col items-center gap-[24px] lg:w-[400px]">
            <img src="../assets/ads.svg" alt="" className="h-10" />
            <p className="text-center text-grey-600 font-medium w-32 ">Tidak Ada Iklan</p>
          </div>
          <div className="flex flex-col items-center gap-[24px] lg:w-[400px]">
            <img src="../assets/movie.svg" alt="" className="h-10" />
            <p className="text-center text-grey-600 font-medium w-[180px] ">Tonton Semua Konten</p>
          </div>
          <div className="flex flex-col items-center gap-[24px] lg:w-[400px]">
            <img src="../assets/4k.svg" alt="" className="h-10" />
            <p className="text-center text-grey-600 font-medium w-[150px] ">Kualitas Maksimal Sampai Dengan 4K</p>
          </div>
          <div className="flex flex-col items-center gap-[24px] lg:w-[400px]">
            <img src="../assets/viewport.svg" alt="" className="h-10" />
            <p className="text-center text-grey-600 font-medium w-[150px] ">Tonton di Tv, Tablet, Mobile, dan Laptop</p>
          </div>
          <div className="flex flex-col items-center gap-[24px] lg:w-[426.67px]">
            <img src="../assets/subtitle.svg" alt="" className="h-10" />
            <p className="text-center text-grey-600 font-medium w-[150px] ">Subtitle Untuk Konten Pilihan</p>
          </div>
        </div>
      </div>
      <div className="px-6 bg-gray-800 py-10 mx-4 lg:py-14">
        <h1 className="text-white font-semibold text-3xl text-center mb-2">Pilih Paketmu</h1>
        <p className="text-white  text-center mb-10 font-light">Temukan paket sesuai kebutuhanmu!</p>
        {/* paket premim */}
        <div className="flex flex-col lg:flex-row justify-center px-3 gap-16">
          <div className="bg-blue-800 w-full rounded-2xl px-[25px] lg:w-[320px] py-[30px]">
            <h1 className="text-white font-md rounded-[28px] text-2xl  bg-gray-800 p-4 w-1/2 text-center ml-3 mt-3">Individual</h1>
            <p className="text-white mt-8 font-light text-2xl">Mulai dari Rp49,990/bulan</p>
            <p className="text-white font-light text-2xl">1 Akun</p>
            <div className="mt-6 px-6">
              <div className="mt-10 flex  items-center gap-[8px]">
                <img src="../assets/chekclist.svg" alt="" className="h-4" />
                <p className="text-white font-light text-xl">Tidak ada iklan</p>
              </div>
              <div className="mt-3 flex  items-center gap-[8px]">
                <img src="../assets/chekclist.svg" alt="" className="h-4" />
                <p className="text-white font-light text-xl">Kualitas 720p</p>
              </div>
              <div className="mt-3 flex  items-center gap-[8px] border-b-2 border-gray-500 pb-10">
                <img src="../assets/chekclist.svg" alt="" className="h-4" />
                <p className="text-white font-light text-xl">Download konten plihan</p>
              </div>
            </div>
            <div className="flex flex-col justify-center px-5 gap-3 mt-4 lg:mt-3">
              <button className="bg-white hover:bg-gray-300 py-4 w-full mt-6 rounded-[48px] text-xl font-semibold text-blue-800 mx-auto">Langganan</button>
              <h2 className="text-center text-white text-xl lg:text-sm">Syarat dan Ketentuan Berlaku</h2>
            </div>
          </div>
          <div className="bg-blue-800 w-full rounded-2xl px-[25px] lg:w-[320px] py-[30px]">
            <h1 className="text-white font-md rounded-[28px] text-2xl  bg-gray-800 p-4 w-1/2 text-center ml-3 mt-3">Berdua</h1>
            <p className="text-white mt-8 font-light text-2xl">Mulai dari Rp79,990/bulan</p>
            <p className="text-white font-light text-2xl">2 Akun</p>
            <div className="mt-6 px-6">
              <div className="mt-10 flex  items-center gap-[8px]">
                <img src="../assets/chekclist.svg" alt="" className="h-4" />
                <p className="text-white font-light text-xl">Tidak ada iklan</p>
              </div>
              <div className="mt-3 flex  items-center gap-[8px]">
                <img src="../assets/chekclist.svg" alt="" className="h-4" />
                <p className="text-white font-light text-xl">Kualitas 1080p</p>
              </div>
              <div className="mt-3 flex  items-center gap-[8px] border-b-2 border-gray-500 pb-10">
                <img src="../assets/chekclist.svg" alt="" className="h-4" />
                <p className="text-white font-light text-xl">Download konten plihan</p>
              </div>
            </div>
            <div className="flex flex-col justify-center px-5 gap-3 mt-4 lg:mt-3">
              <button className="bg-white hover:bg-gray-300 py-4 w-full mt-6 rounded-[48px] text-xl font-semibold text-blue-800 mx-auto">Langganan</button>
              <h2 className="text-center text-white text-xl lg:text-sm">Syarat dan Ketentuan Berlaku</h2>
            </div>
          </div>
          <div className="bg-blue-800 w-full rounded-2xl px-[25px] lg:w-[320px] py-[30px]">
            <h1 className="text-white font-md rounded-[28px] text-2xl  bg-gray-800 p-4 w-1/2 text-center ml-3 mt-3">Keluarga</h1>
            <p className="text-white mt-8 font-light text-2xl">Mulai dari Rp49,990/bulan</p>
            <p className="text-white font-light text-2xl">5-7 Akun</p>
            <div className="mt-6 px-6">
              <div className="mt-10 flex  items-center gap-[8px]">
                <img src="../assets/chekclist.svg" alt="" className="h-4" />
                <p className="text-white font-light text-xl">Tidak ada iklan</p>
              </div>
              <div className="mt-3 flex  items-center gap-[8px]">
                <img src="../assets/chekclist.svg" alt="" className="h-4" />
                <p className="text-white font-light text-xl">Kualitas 4K</p>
              </div>
              <div className="mt-3 flex  items-center gap-[8px] border-b-2 border-gray-500 pb-10">
                <img src="../assets/chekclist.svg" alt="" className="h-4" />
                <p className="text-white font-light text-xl">Download konten plihan</p>
              </div>
            </div>
            <div className="flex flex-col justify-center px-5 gap-3 mt-4 lg:mt-3">
              <button className="bg-white hover:bg-gray-300 py-4 w-full mt-6 rounded-[48px] text-xl font-semibold text-blue-800 mx-auto">Langganan</button>
              <h2 className="text-center text-white text-xl lg:text-sm">Syarat dan Ketentuan Berlaku</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Premium;
