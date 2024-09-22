/* eslint-disable react/no-children-prop */
import InputForm from "../Element/Input";
const FormLogin = () => {
  return (
    <>
      <form className="w-full">
        <InputForm type="email" name="email" placeholder="Masukan Username" children="Username" />
        <InputForm type="password" name="password" placeholder="Masukan Password" children="Password" />
      </form>
    </>
  );
};
export default FormLogin;
