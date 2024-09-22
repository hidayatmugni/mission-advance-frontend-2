/* eslint-disable react/no-children-prop */
import { Link } from "react-router-dom";
import Button from "../Element/Button/Button";
import FormLogin from "../Fragment/FormLogin";
import FormRegister from "../Fragment/FormRegister";

const AuthLayout = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, type } = props;
  return (
    <div className="flex  justify-center min-h-screen items-center bg-cover bg-center p-2" style={{ backgroundImage: `url(${type === "login" ? "../assets/Login.jpg" : "../assets/Register.jpg"})` }}>
      <div className="w-[95%] relative max-w-xl bg-black/80 rounded-xl flex flex-col items-center text-xl text-white p-7">
        <img src="../assets/Logo.png" alt="" width={150} className="mb-4" />
        <h1 className="text-white font-semibold text-2xl lg:text-3xl text-center ">{title}</h1>
        <p className=" font-light mb-6 text-md lg:text-lg text-center text-white">{type === "login" ? "Selamat datang kembali!" : "Selamat Datang!"}</p>
        {type === "login" ? <FormLogin /> : <FormRegister />}
        <div className="mt-4 flex flex-row text-sm w-full text-lg text-start font-light">
          <div className="w-full flex justify-between">
            <div className="text-sm lg:text-lg relative">
              {type === "login" ? "Belum punya akun? " : "Sudah punya akun? "}
              {type === "login" && (
                <Link to="/register" className="text-blue-600 font-semibold ">
                  Daftar
                </Link>
              )}
            </div>
            {type === "login" ? (
              <Link href="" className="relative right-0 text-white font-light text-end text-md">
                Lupa Password ?
              </Link>
            ) : (
              ""
            )}
          </div>
          {type === "register" && (
            <Link to="/login" className="text-blue-600 font-semibold absolute left-[150px] lg:left-[180px] md:left-[150px] md:text-lg lg:text-xl text-sm md:text-sm">
              Masuk
            </Link>
          )}
        </div>

        <Button variant="w-full bg-gray-600 hover:bg-gray-700 text-white rounded-3xl py-2 lg:py-3 text-sm lg:text-lg" children={type === "login" ? <Link to="/beranda">Masuk</Link> : "Daftar"} />
        <h1 className="mt-4 text-sm text-center text-white">Atau</h1>
        <Button
          variant="w-full bg-transparent text-white flex items-center justify-center rounded-3xl hover:bg-gray-600 border py-1.5 lg:py-3 lg:text-lg md:text-md md:py-2 md:px-4 text-sm"
          children={
            <>
              <img src="../assets/goggle.webp" alt="" className="mr-2" width={25} />
              {type === "login" ? "Masuk Dengan Google" : "Daftar Dengan Google"}
            </>
          }
        />
      </div>
    </div>
  );
};
export default AuthLayout;
