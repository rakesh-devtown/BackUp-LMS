import * as React from "react";
import styled from "styled-components";

export default function LayoutFooter() {
  return (
    <Div>
      <Div2>#Learnfromexperts</Div2>
      <Div3>
        DevTown - Your Ultimate Destination for Career Growth and Success!
      </Div3>
      <Div4>Built with ❤️ by teams across India</Div4>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-self: stretch;
  flex-direction: column;
  font-size: 26px;
  font-weight: 700;
  padding: 32px 57px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div2 = styled.div`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px;
  font: 90px DM Sans, sans-serif;
  @media (max-width: 1260px) {
    font-size: 60px;
  }
  @media (max-width: 991px) {
    font-size: 50px;
  }
  @media (max-width: 767px) {
    font-size: 40px;
  }
  @media (max-width: 575px) {
    font-size: 30px;
  }
`;

const Div3 = styled.div`
  color: #d6dee5;
  font-family: DM Sans, sans-serif;
  font-style: italic;
  margin-top: 10px;
  @media (max-width: 600px) {
    max-width: 100%;
    font-family: DM Sans;
    font-size: 16px;
    font-style: italic;
    font-weight: 700;
    line-height: 20.83px;
    text-align: left;
  }
`;

const Div4 = styled.div`
  color: #d6dee5;
  font-family: DM Sans, sans-serif;
  font-style: italic;
  margin-top: 10px;
  @media (max-width: 600px) {
    max-width: 100%;
    font-family: DM Sans;
    font-size: 16px;
    font-style: italic;
    font-weight: 700;
    line-height: 20.83px;
    text-align: left;
  }
`;
