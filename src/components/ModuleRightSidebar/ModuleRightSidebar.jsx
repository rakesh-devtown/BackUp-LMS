import React from "react";
import styled from "styled-components";
import { Tabs } from "antd";
import ModuleTree from "./ModuleTree";
import BookmarkTree from "./BookmarkTree";

const mockData = [
  {
    label: <h5 className="tab-title">Module</h5>,
    key: "1",
    children: <ModuleTree />,
  },
  {
    label: <h5 className="tab-title">Bookmarks</h5>,
    key: "2",
    children: <BookmarkTree />,
  },
];

const ModuleRightSidebar = () => {
  return (
    <StyledTabs
      defaultActiveKey="1"
      items={mockData}
      centered
      indicator={{ size: 0 }}
      expandAction={"doubleclick"}
    />
  );
};

export default ModuleRightSidebar;

const StyledTabs = styled(Tabs)`
  position: relative;
  z-index: 100;
  background-color: white;
  border-radius: ${(props) => (props.width >= 992 ? "16px" : "16px 0 0 16px")};
  border: 1px solid #e9eaf0;
  overflow: hidden;
  font-family: "DM Sans";
  .tab-title {
    font-size: 16px;
    font-weight: 400;
  }
  .ant-tabs-nav {
    margin: 0;
  }
  .ant-tabs-nav-wrap {
    &::after,
    &::before {
      display: none;
    }
    .ant-tabs-nav-list {
      width: 100%;
      justify-content: center;
    }
    .ant-tabs-tab,
    .ant-tabs-tab-active {
      margin: 0 !important;
      width: 50%;
      justify-content: center;
    }
    .ant-tabs-tab-active {
      background-color: #294169;
      .ant-tabs-tab-btn {
        color: white;
      }
    }
  }
`;
