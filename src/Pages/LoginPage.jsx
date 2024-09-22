import FormLogin from "../Component/Fragment/FormLogin";
import AuthLayout from "../Component/Layout/AuthLayout";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout title="Masuk" type="login">
      <FormLogin></FormLogin>
    </AuthLayout>
  );
};
export default LoginPage;
