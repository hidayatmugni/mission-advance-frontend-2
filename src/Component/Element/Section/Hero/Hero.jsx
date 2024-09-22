import Button from "../../Button/Button";

const Hero = () => {
  return (
    <div>
      <section className="relative bg-[url('../assets/coverhero.png')] bg-cover bg-center bg-no-repeat  bg-no-repeat">
        <div className="flex flex-col justify-center items-start p-6 lg:h-[80vh]">
          <div className="flex flex-col gap-4 max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-4xl lg:text-6xl font-semibold text-start text-white">Duty After School</h1>

            <p className="mt-4 max-w-lg text-white font-md text-md lg:text-lg text-start">
              Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang{" "}
            </p>
          </div>
          <div className="mt-2 flex justify-start gap-4 lg:justify-start">
            <Button variant="bg-blue-800 hover:bg-blue-700 text-white rounded-3xl py-2 lg:py-2 text-sm lg:text-lg">Mulai</Button>
            <Button variant="bg-gray-700 hover:bg-gray-800 text-white rounded-3xl py-2 lg:py-2 text-sm lg:text-lg">Tentang Kami</Button>
            <Button variant="bg-transparent border text-white rounded-4xl text-sm lg:text-lg">18+</Button>
            <img src="../assets/sound.png" alt="" className="absolute right-2 lg:right-16 lg:h-14 lg:bottom-28 md:h-10 md:bottom-8 md:right-6   bottom-6 h-8 cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
