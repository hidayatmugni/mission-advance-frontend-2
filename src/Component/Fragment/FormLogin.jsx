/* eslint-disable react/no-children-prop */

import InputForm from "../Element/Input";
import { Link } from "react-router-dom";
// import useLoginStore from "../../store/store";
import { useState } from "react";
// import { useShallow } from "zustand/shallow";
// import { useShallow } from "zustand/shallow";
const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Ambil data pengguna dari localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      if (storedUser.email === email && storedUser.password === password) {
        alert("Login Successful!");

        // Simpan status login ke localStorage
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("loggedInUser", JSON.stringify(storedUser));

        // Redirect ke halaman profil atau state perubahan
        window.location.href = "/profile"; // Ini hanya contoh untuk redirect
      } else {
        setErrorMessage("Invalid email or password");
      }
    } else {
      setErrorMessage("No user found. Please register.");
    }
  };

  return (
    <>
      <form onSubmit={handleLogin} className="w-full">
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
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="submit" className="w-full bg-gray-800 border border-white hover:bg-gray-800/80 hover:text-white text-xl rounded-3xl py-2 lg:py-2 text-sm lg:text-lg mt-6">
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
