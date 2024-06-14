import React from "react";
import { Button, Col, Row, Space, Tree } from "antd";
import { treeData } from "./mockTreeData";
import styled from "styled-components";
import { DownOutlined } from "@ant-design/icons";

const ModuleTree = () => {
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
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
        showIcon={false}
        blockNode
        switcherIcon={<DownOutlined />}
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
  overflow-y: scroll;
  scrollbar-width: none;
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
      background-color: #e6ebf3 !important;
    }
    .play {
      display: unset;
    }
    .hide {
      display: none;
    }
  }

  .level-1 {
    font-family: "DM Sans";
    font-size: 16px;
    font-weight: 500;
    padding: 14px 16px;
    border-top: 1px solid #d6d6d6;
    border-bottom: 1px solid #d6d6d6;
    color: #0859de;
  }
  .play {
    display: none;
    transition: all 0.3s;
  }
`;

const BottomButtons = styled(Row)`
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
