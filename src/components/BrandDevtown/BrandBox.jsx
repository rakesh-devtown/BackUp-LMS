import React from "react";
import devtownLogo from "../../assets/images/devtown-logo.svg";
import styled from "styled-components";

const BrandBox = ({position}) => {
  return (
    <StyledBox position={position}>
      <p>Built with ❤️ by</p>
      <img src={devtownLogo} alt="logo" height={11} />
    </StyledBox>
  );
};

export default BrandBox;

export const StyledBox = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: flex-start;
  gap: 6.4px;
  position: ${props=> props.position ? props.position : null};
  right: 80px;
  bottom: 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  img {
    height: 21px;
  }
  p{
    margin-top: 2px;
    font-size: 14.4px;
  }
`;
