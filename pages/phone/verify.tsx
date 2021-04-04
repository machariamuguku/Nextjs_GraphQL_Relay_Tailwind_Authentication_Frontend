import { NextPage } from "next";
import { Landing } from "../../components/landing";
import { VerifyPhone } from "../../components/verifyPhoneComponent";

const Verify: NextPage = () => {
  return (
    <Landing>
      <VerifyPhone />
    </Landing>
  );
};
export default Verify;
