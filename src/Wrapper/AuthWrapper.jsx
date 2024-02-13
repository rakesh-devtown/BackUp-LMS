import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

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
  background: linear-gradient(to right, #5C258D, #4389A2);
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

  useEffect(() => {
    let elements = document.getElementsByClassName("rocketchat-widget");
    if (elements.length > 0) {
      elements[0].style.display = "none";
    }
  
    return () => {
      let elements = document.getElementsByClassName("rocketchat-widget");
      if (elements.length > 0) {
        elements[0].style.display = "block";
      }
    }
  }, []);
  return (
    <>
    <Wrapper>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <ImageContainer>
      <StyledImage src="https://www.student-platform.devtown.in/static/media/Login_image.d23150f57543b9b841d955f9245b17ca.svg" alt="wrapper" />
      </ImageContainer>
    </Wrapper>
  </>
  );
}

export default AuthWrapper;
