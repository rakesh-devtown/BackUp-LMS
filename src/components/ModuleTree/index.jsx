import { Tree } from "antd";
import { checkedKeys, treeData } from "./treeData";
import styled from "styled-components";
import { useState } from "react";
import { DownOutlined, LeftOutlined } from "@ant-design/icons";
import MainHeader from "./MainHeader";
import useWindowSize from "../../hooks/useWindowSize";

const ModuleTree = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [defaultExpandedKeys, setDefaultExpandedKeys] = useState(["1-1"]);
  // const [checkedKeys, setCheckedKeys] = useState([])
  const { width } = useWindowSize();

  const onSelect = (selectedKeys, info) => {
    console.log(selectedKeys);
  };
  const onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };

  const myTreeStyle = {
    background: "white",
    zIndex: 100,
  };
  return (
    <StyledTree width={width}>
      {width < 992 && <MainHeader />}
      <Tree.DirectoryTree
        showIcon={false}
        checkable
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
        switcherIcon={<DownOutlined />}
        blockNode={true}
        style={myTreeStyle}
        defaultExpandedKeys={defaultExpandedKeys}
      />
    </StyledTree>
  );
};

const StyledTree = styled.div`
  //removing all indent spaces.......
  .ant-tree-indent {
    width: 0;
  }
  .ant-tree-node-content-wrapper {
    padding: 0;
  }
  .ant-tree {
    background: white;
    border-radius: ${(props) => (props.width > 992 ? "20px" : "0 0 20px 20px")};
    overflow: hidden;
    .ant-tree-treenode {
      background: var(--Color-White-100, #fff);
      &::before {
        content: none;
      }
    }
  }

  //changing topic checkbox color
  .ant-tree-checkbox-checked .ant-tree-checkbox-inner {
    background-color: var(--secondaryColor) !important;
    border-color: #526d97 !important ;
  }
  .ant-tree-switcher:hover {
    background: unset !important;
  }

  //styling for switcher button
  .level-1 {
    padding: 0;
    position: relative;
    border-radius: none;
    border-bottom: 1px solid #efefef;
    &:last-child {
      border-bottom: none;
    }

    & > .ant-tree-switcher {
      position: absolute;
      top: 37%;
      right: 15%;
      z-index: 5;
      svg {
        width: 2em;
        height: 2em;
        fill: white;
      }
    }
  }

  .level-2 {
    padding: 20px 14px;
    border-bottom: 1px solid #d6d6d6;
    &:hover {
      background-color: rgb(161 212 251 / 40%);
    }
  }

  .level-3 {
    padding: 12px 20px 12px 0;

    &:hover {
      background-color: rgb(161 212 251 / 80%);
      i,
      p {
        color: #1d2026;
      }
    }
    .ant-tree-node-content-wrapper {
      background-color: unset !important;
    }

    & ~ .ant-tree-treenode-selected {
      background-color: #294169 !important;
      i,
      p {
        color: white;
      }
    }
  }

  //removing hover effect
  .hover-none:hover {
    background-color: unset;
    i,
    p {
      color: unset;
    }
  }
`;
export default ModuleTree;
