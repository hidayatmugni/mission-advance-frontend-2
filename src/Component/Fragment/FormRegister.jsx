/* eslint-disable react/no-children-prop */
import InputForm from "../Element/Input";
const FormRegister = () => {
  return (
    <>
      <form className="w-full mt-[-2]">
        <InputForm type="text" name="name" placeholder="Masukan Username" children="Username" />
        <InputForm type="email" name="email" placeholder="Masukan Email" children="Email" />
        <InputForm type="password" name="password" placeholder="Masukan Password" children="Password" />
        <InputForm type="password" name="password" placeholder="Konfirmasi Password" children="Konfirmasi password" />
      </form>
    </>
  );
};
export default FormRegister;
