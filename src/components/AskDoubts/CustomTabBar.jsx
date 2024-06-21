import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

const CustomTabBar = () => {
  return (
    <StyledRow>
      <StyledCol span={6}>Help with code</StyledCol>
      <StyledCol span={6}>Questions/concept Related</StyledCol>
      <StyledCol span={6}>Platform Related</StyledCol>
      <StyledCol span={6}>Others</StyledCol>
    </StyledRow>
  );
};

export default CustomTabBar;

const StyledRow = styled(Row)`
  background: #294169;
  border-radius: 0 16px 0 16px;
  align-items: center;
  .ant-tabs-tab-active {
    background-color: white;
    color: #0859de;
  }
`;

const StyledCol = styled(Col)`
  text-align: center;
  text-wrap: balance;
  padding: 20px 16px !important;
  margin: 0 !important;
  text-align: center;
  color: white;
  font-family: "DM Sans";
  font-size: 16px;
  cursor: pointer;
`;
