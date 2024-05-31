import React, { useState } from "react";
import loginUiStore from "../../store/loginUi.store";
import MobileRegister from "./MobileRegister";
import MobileLogin from "./MobileLogin";
import useWindowSize from "../../hooks/useWindowSize";
import MobileSessionLimit from "./MobileSessionLimit";
import MobileCarrerPath from "./MobileCarrerPath";
import styled from "styled-components";
import ForgetPass from "./ForgetPass";
import OTPverify from "../../components/Forms/OTPverification";
import SuccessBox from "../../components/Forms/Success";
import ResetPassword from "../../components/Forms/ResetPassword";


const LoginMobileView = () => {

  const { width } = useWindowSize();

  const mobileCurrentPage = loginUiStore((state) => state.mobileCurrentPage);
  const setMobileCurrentPage = loginUiStore(
    (state) => state.setMobileCurrentPage
  );

  return (

    <LoginMobile width={width} mobileCurrentPage={mobileCurrentPage}>

      {mobileCurrentPage === "register" ? (
        <MobileRegister />
      ) : mobileCurrentPage === "login" ? (
        <MobileLogin />
      ) : mobileCurrentPage === "forget-password" ? (
        <ForgetPass toggleSignUp={() => setMobileCurrentPage('login')} nextPage={() => setMobileCurrentPage("otp")} />
      ) : mobileCurrentPage === "otp" ? (
        <OTPverify handleBack={() => setMobileCurrentPage('login')} handleNext={() => setMobileCurrentPage("reset-password")} />
      ) : mobileCurrentPage === "reset-password" ? (
        <ResetPassword handleNext={() => setMobileCurrentPage('success')} />
      ) : mobileCurrentPage === "success" ? (
        <SuccessBox handleNext={() => setMobileCurrentPage('login')} successMessage={"Password Successfully Update"} btnText={"Back to Login"} />
      ) : mobileCurrentPage === "session-limit" ? (
        <MobileSessionLimit />
        // ) : mobileCurrentPage === "carrer-path" ? (
        //   <MobileCarrerPath />
      ) : (
        null
      )

      }
    </LoginMobile>

  );
};

const LoginMobile = styled.div`
background-color: white;
width: ${props => props.width >= 576 ? "551px" : "100%"};
margin: 0 auto;
/* width: 551px; */
min-height: 100vh;
padding: ${props => (props.mobileCurrentPage === "register" || props.mobileCurrentPage === "login") ? '36px 24px' : '36px 55px'};
display: grid;
place-items: center;
`

export default LoginMobileView;
