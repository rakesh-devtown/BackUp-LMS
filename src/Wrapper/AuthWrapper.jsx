import React from 'react';
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
  return (
    <div
    style={{
      minHeight: "100vh",
      height: "100vh",

      
    }}

    >
    <Outlet/>
    {/* <Wrapper>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </Wrapper> */}
  </div>
  );
}

export default AuthWrapper;
