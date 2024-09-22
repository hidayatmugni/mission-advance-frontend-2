import FormRegister from "../Component/Fragment/FormRegister";
import AuthLayout from "../Component/Layout/AuthLayout";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout title="Daftar" type="register">
      <FormRegister></FormRegister>
    </AuthLayout>
  );
};
export default RegisterPage;
