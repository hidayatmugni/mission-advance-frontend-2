import FormLogin from "../Fragment/FormLogin";
import FormRegister from "../Fragment/FormRegister";

const AuthLayout = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, title } = props;

  return (
    <div className="flex  justify-center min-h-screen items-center bg-cover bg-center p-2" style={{ backgroundImage: `url(${type === "login" ? "../assets/Login.jpg" : "../assets/Register.jpg"})` }}>
      <div className="w-[95%] relative max-w-xl bg-black/80 rounded-xl flex flex-col items-center text-xl text-white p-7">
        <img src="../assets/Logo.png" alt="" width={150} className="mb-4" />
        <h1 className="text-white font-semibold text-2xl lg:text-3xl text-center ">{title}</h1>
        <p className=" font-light mb-6 text-md lg:text-lg text-center text-white">{type === "login" ? "Selamat datang kembali!" : "Selamat Datang!"}</p>
        {type === "login" ? <FormLogin /> : <FormRegister />}
      </div>
    </div>
  );
};

export default AuthLayout;
