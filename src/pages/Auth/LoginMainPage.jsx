import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Login from "./Login";
import LoginMobileView from "./LoginMobileView";

const LoginPage = () => {
  const { width } = useWindowSize();

  return <>{width >= 992 ? <Login /> : <LoginMobileView />}</>;
};

export default LoginPage;
