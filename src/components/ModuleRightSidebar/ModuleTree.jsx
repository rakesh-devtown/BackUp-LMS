import React from "react";
import { Button, Col, Row, Space, Tree } from "antd";
import { treeData } from "./mockTreeData";
import styled from "styled-components";
import { DownOutlined } from "@ant-design/icons";
import useWindowSize from "../../hooks/useWindowSize";

const ModuleTree = () => {
  const { width } = useWindowSize();

  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  const onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };
  return (
    <>
      <StyledTree
        //   checkable
        // defaultSelectedKeys={["0-0-0", "0-0-1"]}
        // defaultCheckedKeys={["0-0-0", "0-0-1"]}
        defaultExpandedKeys={["0"]}
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
        showIcon={false}
        blockNode
        switcherIcon={<DownOutlined />}
        screenWidth={width}
      />
      <BottomButtons>
        <Col span={12}>
          <p>Previous Module</p>
        </Col>
        <Col span={12}>
          <p>Next Module</p>
        </Col>
      </BottomButtons>
    </>
  );
};
export default ModuleTree;

const StyledTree = styled(Tree.DirectoryTree)`
  /* overflow-y: scroll;
  scrollbar-width: none; */
  .ant-tree-indent,
  .ant-tree-switcher-noop {
    display: none;
  }
  .ant-tree-treenode:not(.level-1) {
    padding: 0 !important;
    align-items: center;
  }
  .ant-tree-treenode::before {
    height: 100%;
  }
  .ant-tree-node-content-wrapper {
    padding: 0;
  }
  .ant-tree-treenode-selected {
    .ant-tree-node-content-wrapper,
    .ant-tree-switcher {
      color: #0859de !important;
    }
    &::before {
      background-color: #d9d9d9 !important;
    }
    .play {
      display: unset;
    }
    .hide {
      display: none;
    }
  }

  .ant-tree-list-holder-inner {
    position: relative;
    overflow: auto;
    scrollbar-width: none;
    max-height: ${(props) =>
      props.screenWidth >= 992 ? "calc(100vh - 285px)" : "calc(100vh - 120px)"};
  }

  .ant-tree-treenode ~ .ant-tree-treenode-switcher-close:hover {
    /* .ant-tree-node-content-wrapper { */
    color: #0859de !important;
    /* } */
    &::before {
      background-color: #e6ebf3 !important;
    }
    .show-hover {
      display: block;
    }
    .hide {
      display: none;
    }
  }

  .level-1 {
    position: sticky !important;
    top: 0;
    z-index: 100;
    font-family: "DM Sans";
    font-size: 16px;
    font-weight: 500;
    padding: 14px 16px;
    border-top: 1px solid #d6d6d6;
    border-bottom: 1px solid #d6d6d6;
    background-color: white !important;
    color: #0859de;
  }
  .play {
    display: none;
    transition: all 0.3s;
  }
  .show-hover {
    display: none;
  }
`;

const BottomButtons = styled(Row)`
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  z-index: 100;
  border-top: 1px solid #e9eaf0;
  p {
    text-align: center;
    padding: 16px 0;
    color: #294169;
    font-family: "DM Sans";
    font-size: 16px;
    text-transform: capitalize;
    cursor: pointer;
    &:hover {
      color: white;
      background: #294169;
    }
    &:active {
      color: white;
      background: #375488;
    }
  }
`;
