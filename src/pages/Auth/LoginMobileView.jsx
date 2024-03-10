import React, { useState } from "react";
import { Button, Drawer, Modal } from "antd";
import loginUiStore from "../../store/loginUi.store";
import MobileLogin from "./MobileLogin";
import MobileRegister from "./MobileRegister";
import useWindowSize from "../../hooks/useWindowSixe";
import LoginMobileForgetPassword from "./LoginMobileForgetPassword";
import MobileOtp from "./MobileOtp";
import MobileResetPassword from "./MobileResetPassword";
import MobileSessionLimit from "./MobileSessionLimit";
import RegisterOtp from "./RegisterOtp";
import MobileCarrerPath from "./MobileCarrerPath";
const LoginMobileView = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const width = useWindowSize();

  const setIsMobileAuthModelOpen = loginUiStore(
    (state) => state.setIsMobileAuthModelOpen
  );
  const isMobileAuthModelOpen = loginUiStore(
    (state) => state.isMobileAuthModelOpen
  );
  const mobileCurrentPage = loginUiStore((state) => state.mobileCurrentPage);
  const setMobileCurrentPage = loginUiStore(
    (state) => state.setMobileCurrentPage
  );
  return (
   
      <Drawer
      size="large"
      placement="bottom"
        width="100%"
        onClose={() => {
          setIsMobileAuthModelOpen(false);
        }}
        open={isMobileAuthModelOpen}
        key="bottom"
        
        closable={false}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "20px 20px 0px 0px",        
        }}
        
      ><div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

         
        
        }}
      >

          {mobileCurrentPage === "register" ? (
            <MobileRegister />
          ) : mobileCurrentPage === "login" ? (
            <MobileLogin />
          ) : mobileCurrentPage === "forget-password" ? ( 
              <LoginMobileForgetPassword/> 
          ) : mobileCurrentPage === "otp" ? (
              <MobileOtp/>
          ) : mobileCurrentPage === "reset-password" ? (
            <MobileResetPassword />
          ) : mobileCurrentPage=== "session-limit" ? ( 
            <MobileSessionLimit/>
          ) :mobileCurrentPage === "otp-register"  ? (
              <RegisterOtp/>

          ) : mobileCurrentPage === "carrer-path" ? (
              <MobileCarrerPath/>
          ) : (
            null 
          )
          
          }
      </div>
      </Drawer>
  );
};
export default LoginMobileView;
