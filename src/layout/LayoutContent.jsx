import React from "react";
import styled from "styled-components";
import LayoutTopAd from "../components/LayoutComponents/LayoutTopAd";
import MainLayoutHero from "./MainLayoutHero";
import useWindowSize from "../hooks/useWindowSixe";
import PersonCarrerReadyCard from "../components/ui/PersonCarrerReadyCard";

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
  @media (max-width: 991px) {
    width: 95%;
  }
  
`;

function LayoutContent() {
  const width = useWindowSize().width;
  return <LayoutContainer>
    {
      width > 900 && <LayoutTopAd/>
    }
    <MainLayoutHero/>
    
    
  </LayoutContainer>;
}

export default LayoutContent;
