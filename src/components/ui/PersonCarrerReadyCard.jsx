import * as React from "react";
import styled from "styled-components";

export default function PersonCarrerReadyCard() {
  return (
    <Div>
      <Img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d2319f4d3242841e0cb42aad82d65fe8f88bc9e8d8b910d4d54968278942b38?apiKey=3253b8c03e174b5d8b62115417961652&"
      />
      <Div2>Your personalised career roadmap is ready.</Div2>
      <Div3>
        <Div4>View</Div4>
        <Img2
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cb216f3fe33120e6f85efb1e626019095d07ad85a80110e768d30b6f6c551cd?apiKey=3253b8c03e174b5d8b62115417961652&"
        />
      </Div3>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  border-color: rgba(233, 234, 240, 1);
  border-style: solid;
  border-width: 1px;
    margin-top: 20px;
  justify-content: space-between;
  gap: 20px;
  font-size: 18px;
  font-weight: 400;
  padding: 20px 23px;
  width: 100%;
  @media (max-width: 991px) {
    padding: 20px 20px;
  }
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 32px;
  align-self: stretch;
`;

const Div2 = styled.div`
  color: #4b4b4b;
  font-family: DM Sans, sans-serif;
  align-self: stretch;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
  justify-content: center;
  align-self: stretch;
  display: flex;
  gap: 10px;
  color: #1e6de8;
  white-space: nowrap;
  margin: auto 0;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div4 = styled.div`
  font-family: DM Sans, sans-serif;
`;

const Img2 = styled.img`
  aspect-ratio: 0.61;
  object-fit: auto;
  object-position: center;
  width: 8px;
  fill: #1e6de8;
  margin: auto 0;
`;


