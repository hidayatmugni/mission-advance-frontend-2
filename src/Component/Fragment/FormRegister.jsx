/* eslint-disable react/no-children-prop */
import { Link } from "react-router-dom";
import InputForm from "../Element/Input";
const FormRegister = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("name", e.target.name.value);
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
  };
  return (
    <>
      <form onSubmit={handleRegister} className="w-full mt-[-2]">
        <InputForm type="text" name="name" placeholder="Masukan Username" children="Username" />
        <InputForm type="email" name="email" placeholder="Masukan Email" children="Email" />
        <InputForm type="password" name="password" placeholder="Masukan Password" children="Password" />
        <InputForm type="password" name="password" placeholder="Konfirmasi Password" children="Konfirmasi password" />
        <div>
          <p>
            Sudah punya akun?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Masuk
            </Link>
          </p>
          <button type="submit" className="w-full bg-gray-800 border border-white hover:bg-gray-800/80 hover:text-white text-xl rounded-3xl py-2 lg:py-2 text-sm lg:text-lg mt-6">
            Daftar
          </button>
          <h1 className="text-white font-light text-sm text-center mt-4">Atau</h1>
          <button className="w-full bg-black/80 border border-white hover:bg-gray-800/80 hover:text-white text-xl rounded-3xl py-2 lg:py-2 text-sm lg:text-lg mt-6">
            <img src="../assets/goggle.webp" alt="" className="h-6 w-6 inline mr-2" />
            Masuk dengan Google
          </button>
        </div>
      </form>
    </>
  );
};
export default FormRegister;
