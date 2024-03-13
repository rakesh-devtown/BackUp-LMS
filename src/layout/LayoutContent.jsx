import React from "react";
import styled from "styled-components";
import LayoutTopAd from "../components/LayoutComponents/LayoutTopAd";

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100px;
  width: 70%;
  z-index: 0;
  background-color: #F4F7FE;
`;

function LayoutContent() {
  return <LayoutContainer>
    {/* <LayoutTopAd/> */}
    
  </LayoutContainer>;
}

export default LayoutContent;
