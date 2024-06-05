import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DashBoard from "../pages/Dashboard/DashBoard";
import useWindowSize from "../hooks/useWindowSize";
import Login from "../pages/Auth/Login";
import LoginMobileView from "../pages/Auth/LoginMobileView";

const AuthWrapper = (props) => {
  const { width } = useWindowSize();

  // return <Wrapper>{width >= 992 ? <Login /> : <LoginMobileView />}</Wrapper>;
  return <Wrapper><Outlet/></Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.88);
`;

export default AuthWrapper;
