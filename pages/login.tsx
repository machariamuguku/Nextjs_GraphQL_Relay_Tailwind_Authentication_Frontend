import { NextPage } from "next";
import { Landing } from "../components/landing";
import { LoginComponent } from "../components/loginComponent";

const Login: NextPage = () => {
  return (
    <Landing>
      <LoginComponent />
    </Landing>
  );
};
export default Login;
