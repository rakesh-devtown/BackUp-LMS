import React from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: red;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100px;
  width: 70%;
`;

function LayoutContent() {
  return <LayoutContainer>
    
  </LayoutContainer>;
}

export default LayoutContent;
