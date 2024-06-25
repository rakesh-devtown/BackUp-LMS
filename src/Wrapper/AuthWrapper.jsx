import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DashBoard from "../pages/Dashboard/DashBoard";
import useWindowSize from "../hooks/useWindowSize";
import Login from "../pages/Auth/Login";
import LoginMobileView from "../pages/Auth/LoginMobileView";
import backgroundImgDesktop from "../assets/images/loginBackgroundDesktop.png";
import backgroundImgMobile from "../assets/images/loginBackgroundMobile.png";

const AuthWrapper = (props) => {
  const { width } = useWindowSize();

  // return <Wrapper>{width >= 992 ? <Login /> : <LoginMobileView />}</Wrapper>;
  return (
    <Wrapper>
      <BackgroundImg width={width} />
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.88);
`;

const BackgroundImg = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  /* z-index: 100; */
  /* height: 100%; */
  background-image: url(${(props) => (props.width >= 992 ? backgroundImgDesktop : backgroundImgMobile)});
  /* background-position:; */
  background-size: cover;
`;

export default AuthWrapper;
