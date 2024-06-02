import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DashBoard from "../pages/Dashboard/DashBoard";
import useWindowSize from "../hooks/useWindowSize";
import Login from "../pages/Auth/Login";
import LoginMobileView from "../pages/Auth/LoginMobileView";


const AuthWrapper = (props) => {
  const { width } = useWindowSize();

  return (
    <MainContainer>
      <Outlet/>
    </MainContainer>
  );
};

const MainContainer = styled.div`
min-height: 100vh;
background-color: rgba(0, 0, 0, 0.88);
width: 100%;
`

export default AuthWrapper;
