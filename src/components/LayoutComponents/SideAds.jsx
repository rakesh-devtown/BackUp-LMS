import * as React from "react";
import styled from "styled-components";

export default function SideAds() {
  return (
    <Div>
      <Div2>
        <Div3>Refer & Earn</Div3>
        <Div4>Unlock DevTown rewards: Earn, share, start now!</Div4>
        <Div5>Refer Now</Div5>
      </Div2>
      <Div6>
        <Div7>DevTown Job Portal</Div7>
        <Div8>One Stop solution for searching Jobs</Div8>
        <Img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8b004072804ca332bb5189ee00f2cd5b89105205c49be8327abfc4c9d66e52c?"
        />
      </Div6>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  max-width: 211px;
  flex-direction: column;
  padding: 20px 0;
`;

const Div2 = styled.div`
  justify-content: center;
  border-radius: 12px;
  background-color: #1e6de8;
  display: flex;
  width: 100%;
  flex-direction: column;
  font-weight: 500;
  padding: 15px 14px;
`;

const Div3 = styled.div`
  color: #f5f5f5;
  white-space: nowrap;
  font: 700 26px DM Sans, sans-serif;
`;

const Div4 = styled.div`
  color: var(--Color-White-100, #fff);
  margin-top: 8px;
  font: 16px DM Sans, sans-serif;
`;

const Div5 = styled.div`
  justify-content: center;
  border-radius: 7px;
  border-color: rgba(199, 227, 255, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Primary-Secondary, #f7f5ff);
  margin-top: 8px;
  color: #1e6de8;
  white-space: nowrap;
  text-align: center;
  padding: 8px 58px;
  font: 14px/143% DM Sans, sans-serif;
`;

const Div6 = styled.div`
  justify-content: center;
  border-radius: 12px;
  background-color: #1e6de8;
  display: flex;
  margin-top: 10px;
  width: 100%;
  padding-top: 15px;
  flex-direction: column;
`;

const Div7 = styled.div`
  color: #f5f5f5;
  margin: 0 14px;
  font: 700 26px DM Sans, sans-serif;
`;

const Div8 = styled.div`
  color: var(--Color-White-100, #fff);
  margin: 8px 14px 0;
  font: 500 16px DM Sans, sans-serif;
`;

const Img = styled.img`
  aspect-ratio: 1.18;
  object-fit: auto;
  object-position: center;
  width: 100%;
  margin-top: 8px;
`;


