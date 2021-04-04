import { NextPage } from "next";
import { Landing } from "../components/landing";
import { RegisterComponent } from "../components/registerComponent";

const Register: NextPage = () => {
  return (
    <Landing>
      <RegisterComponent />
    </Landing>
  );
};

export default Register;
