import React from "react";
import styled from "styled-components";
import LayoutTopAd from "../components/LayoutComponents/LayoutTopAd";
import MainLayoutHero from "./MainLayoutHero";
import useWindowSize from "../hooks/useWindowSixe";
import PersonCarrerReadyCard from "../components/ui/PersonCarrerReadyCard";
import { LayoutOuterContainer } from "../styles/layout.styles";


function LayoutContent() {
  const width = useWindowSize().width;
  return <LayoutOuterContainer>
    {
      width > 900 && <LayoutTopAd/>
    }
    <MainLayoutHero/>
    
    
  </LayoutOuterContainer>;
}

export default LayoutContent;
