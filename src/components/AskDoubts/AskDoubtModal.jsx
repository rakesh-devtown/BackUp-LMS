import { Tabs } from "antd";
import React from "react";
import styled from "styled-components";

const items = [
  {
    key: "1",
    label: <p className="tab-btn">Ask a Doubt</p>,
    children: "tab content 1",
  },
  {
    key: "2",
    label: <p className="tab-btn">Previous Doubts</p>,
    children: "tab content 2",
  },
];

const AskDoubtModal = () => {
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
  }
  .ant-tabs-tab {
    padding: 0;
  }
  .ant-tabs-tab-active .tab-btn {
    color: var(--Color-White-100, #fff);
    background: #294169;
  }
`;

export default AskDoubtModal;
