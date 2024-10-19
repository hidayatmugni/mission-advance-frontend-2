import { Link } from "react-router-dom";
// import InputForm from "../Element/Input";
import { useState } from "react";
// import useAuthStore from "../../stores/useAuthStore";

const FormRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Cek apakah password dan konfirmasi password cocok
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Simpan data pengguna ke localStorage
    const userData = { username, email, password };
    localStorage.setItem("user", JSON.stringify(userData));

    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrorMessage("");

    alert("Registration Successful!");
    console.log(userData);
  };
  return (
    <>
      <form onSubmit={handleRegister} className="w-full mt-[-2] flex flex-col gap-2">
        <label htmlFor="">Username</label>
        <input type="text" name="username" placeholder="Masukan Username" className="w-full p-2 lg:p-3 rounded-3xl bg-transparent text-white border border-white" onChange={(e) => setUsername(e.target.value)} value={username} />
        <label htmlFor="">Email</label>
        <input type="email" name="email" placeholder="Masukan email" className="w-full p-2 lg:p-3 rounded-3xl bg-transparent text-white border border-white" onChange={(e) => setEmail(e.target.value)} value={email} />
        <label htmlFor="">password</label>
        <input
          type="password"
          name="password"
          placeholder="Masukan password"
          className="w-full p-2 lg:p-3 rounded-3xl bg-transparent text-white border border-white"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          autoComplete="off"
        />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          name="password"
          placeholder="Masukan password"
          className="w-full p-2 lg:p-3 rounded-3xl bg-transparent text-white border border-white"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          autoComplete="off"
        />

        <div className="text-sm lg:text-lg">
          <p>
            Sudah punya akun?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Masuk
            </Link>
          </p>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <button type="submit" className="w-full bg-gray-800 border border-white hover:bg-gray-800/80 hover:text-white text-xl rounded-3xl py-2 lg:py-2 text-sm lg:text-lg mt-6">
            <Link to="/login">Daftar</Link>
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
