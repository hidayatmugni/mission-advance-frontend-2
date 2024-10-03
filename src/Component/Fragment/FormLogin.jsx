/* eslint-disable react/no-children-prop */

import InputForm from "../Element/Input";
import { Link } from "react-router-dom";
// import useLoginStore from "../../store/store";
import { useState } from "react";
// import { useShallow } from "zustand/shallow";
// import { useShallow } from "zustand/shallow";
const FormLogin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const userName = localStorage.getItem("username") ? localStorage.getItem("username") : "admin";
  const userEmail = localStorage.getItem("email") ? localStorage.getItem("email") : "admin@admin.com";
  const userPassword = localStorage.getItem("password") ? localStorage.getItem("password") : "Admin1234";

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName === userName && userEmail === userEmail && userPassword === userPassword) {
      localStorage.setItem("username", userName);
      localStorage.setItem("email", userEmail);
      localStorage.setItem("password", userPassword);
      window.location.href = "/beranda";
    } else {
      alert("Username, Email, dan Password yang anda masukkan tidak sesuai");
    }
  };
  return (
    <>
      <form className="w-full">
        <InputForm type="text" name="username" placeholder="Masukan Username" children="Username" value={name} onChange={(e) => setName(e.target.value)} />
        <InputForm type="email" name="email" placeholder="Masukan Email" children="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputForm type="password" name="password" placeholder="Masukan Password" children="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="flex justify-between">
          <p>
            Belum punya akun?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Daftar
            </Link>
          </p>
          <p>
            <Link to="/forgot-password" className="text-white hover:underline">
              Lupa Password
            </Link>
          </p>
        </div>

        <button type="submit" onClick={handleLogin} className="w-full bg-gray-800 border border-white hover:bg-gray-800/80 hover:text-white text-xl rounded-3xl py-2 lg:py-2 text-sm lg:text-lg mt-6">
          Masuk
        </button>
        <h1 className="text-white font-light text-sm text-center mt-4">Atau</h1>
        <button className="w-full bg-black/80 border border-white hover:bg-gray-800/80 hover:text-white text-xl rounded-3xl py-2 lg:py-2 text-sm lg:text-lg mt-6">
          <img src="../assets/goggle.webp" alt="" className="w-6 h-6 inline mr-2" />
          Masuk Dengan Google
        </button>
      </form>
    </>
  );
};
export default FormLogin;
