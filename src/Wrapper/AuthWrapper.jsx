import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DashBoard from "../pages/Dashboard/DashBoard";
import useWindowSize from "../hooks/useWindowSize";
import Login from "../pages/Auth/Login";
import LoginMobileView from "../pages/Auth/LoginMobileView";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const OutletContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
  background: linear-gradient(to right, #5c258d, #4389a2);
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
const ImageContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 50%;
    height: 100vh;
  }
`;
const AuthWrapper = (props) => {
  const { width } = useWindowSize();

  return (
    <div
      style={{
        minHeight: "100vh",
        height: "100vh",
        width: "100%",
      }}
    >
      <DashBoard />
      {width > 992 ? <Login /> : <LoginMobileView />}
    </div>
  );
};

export default AuthWrapper;
