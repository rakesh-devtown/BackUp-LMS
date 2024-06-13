import { Tree } from "antd";
import { treeData } from "./mockTreeData";
import styled from "styled-components";
import { DownOutlined } from "@ant-design/icons";

const BookmarkTree = () => {
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  const onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };
  return (
    <StyledTree
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
      showIcon={false}
      blockNode
      switcherIcon={<DownOutlined />}
    />
  );
};
export default BookmarkTree;

const StyledTree = styled(Tree.DirectoryTree)`
  overflow-y: scroll;
  scrollbar-width: none;
  .ant-tree-indent {
    display: none;
  }
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
    .ant-tree-node-content-wrapper {
      color: #0859de !important;
    }
    &::before {
      background-color: #e6ebf3 !important;
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
`;
