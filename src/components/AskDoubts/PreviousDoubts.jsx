import React from "react";
import styled from "styled-components";
import PreviousDoubtCard from "./PreviousDoubtCard";

const PreviousDoubtTab = () => {
  return (
    <StyledDiv>
      <PreviousDoubtCard />
      <PreviousDoubtCard />
      <PreviousDoubtCard />
      <PreviousDoubtCard />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  padding: 8px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default PreviousDoubtTab;
