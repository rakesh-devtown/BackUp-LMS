import { Tabs } from "antd";
import React from "react";
import styled from "styled-components";
import AskDoubtTab from "./AskDoubtTab";
import PreviousDoubtTab from "./PreviousDoubts";

const items = [
  {
    key: "1",
    label: <p className="tab-btn">Ask a Doubt</p>,
    children: <AskDoubtTab />,
  },
  {
    key: "2",
    label: <p className="tab-btn">Previous Doubts</p>,
    children: <PreviousDoubtTab />,
  },
];

const DoubtModal = () => {
  return (
    <StyledContainer>
      <Tabs
        defaultActiveKey="1"
        items={items}
        indicator={{ size: 0 }}
        tabBarGutter={0}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  .tab-btn {
    color: #294169;
    font-family: "DM Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 16px 20px;
    width: 148px;
    text-align: center;
  }
  .ant-tabs-tab {
    padding: 0;
  }
  .ant-tabs-tab-active .tab-btn {
    color: var(--Color-White-100, #fff);
    background: #294169;
  }
`;

export default DoubtModal;
