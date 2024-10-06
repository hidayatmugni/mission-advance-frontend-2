/* eslint-disable react/no-children-prop */
import { Link } from "react-router-dom";
import InputForm from "../Element/Input";
import { useState } from "react";
// import useAuthStore from "../../stores/useAuthStore";

const FormRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState([]);

  const handleRegister = (e) => {
    e.preventDefault();
    setUser([...user, { username, email, password }]);
    console.log(user);

    // Cek apakah password dan konfirmasi password cocok
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Simpan data pengguna ke localStorage
    // const userData = { username, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    console.log("user", user);

    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrorMessage("");

    // console.log("user", userData);
  };
  return (
    <>
      <form onSubmit={handleRegister} className="w-full mt-[-2]">
        <InputForm type="text" name="username" placeholder="Masukan Username" children="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <InputForm type="email" name="email" placeholder="Masukan Email" children="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <InputForm type="password" name="password" placeholder="Masukan Password" children="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <InputForm type="password" name="password" placeholder="Masukan Password" children="Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        <div>
          <p>
            Sudah punya akun?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Masuk
            </Link>
          </p>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
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
