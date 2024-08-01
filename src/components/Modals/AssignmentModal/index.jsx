import { Tabs } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import useWindowSize from "../../../hooks/useWindowSize";
import AssignmentTab from "./AssignmentTab";
import CriteriaTab from "./CriteriaTab";
import StatusTab from "./StatusTab";

const AssignmentModal = () => {
  const { width } = useWindowSize();
  const [activeKey, setActiveKey] = useState("1");

  const handleTabChange = (value) => setActiveKey(value);

  const items = [
    {
      key: "1",
      label: "Assignment",
      children: <AssignmentTab handleTabChange={handleTabChange} />,
    },
    {
      key: "2",
      label: "Criteria",
      children: <CriteriaTab handleTabChange={handleTabChange} />,
    },
    {
      key: "3",
      label: "Status",
      children: <StatusTab handleTabChange={handleTabChange} />,
    },
  ];

  const myTabBarStyle = {
    background: "#294169",
    borderRadius: "0 16px 0 16px",
  };

  return (
    <StyledTabs
      activeKey={activeKey}
      onChange={handleTabChange}
      items={items}
      indicator={{ size: 0 }}
      tabBarStyle={myTabBarStyle}
    />
  );
};

export default AssignmentModal;

const StyledTabs = styled(Tabs)`
  height: 100%;
  .ant-tabs-tab {
    text-wrap: balance;
    padding: ${(props) => (props.width >= 768 ? " 20px 16px !important" : " 20px 8px !important")};
    margin: 0 !important;
    text-align: center;
    color: white;
    font-family: "DM Sans";
    font-size: ${(props) => (props.width >= 768 ? "18px" : "14px")};
    width: 33.33%;
  }
  .ant-tabs-tab-active {
    background-color: white;
    color: #0859de;
  }
  .ant-tabs-content {
    height: 100%;
    overflow-y: auto;
  }
  .ant-tabs-nav-list {
    width: 100%;
  }
  .ant-tabs-tab-btn {
    width: 100%;
  }
`;
