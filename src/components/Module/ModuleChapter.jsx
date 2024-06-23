import styled from "styled-components";
import { useState } from "react";
import { Tree } from "antd";
import useWindowSize from "../../hooks/useWindowSize";
import { treeData1, treeData2, treeData3 } from "./mockData";
import useBatchStore from "../../store/batchStore";
import { useNavigate } from "react-router-dom";

const ModuleChapter = ({ chapterName, index }) => {
  const [selectedKey, setSelectedKey] = useState([]);
  const navigate = useNavigate();

  //function for tree nodes
  const onSelect = (selectedKeys, info) => {
    // navigate("/video");
    console.log("selected", selectedKeys, info);
    setSelectedKey(selectedKeys);
  };
  const onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };
  return (
    <ChapterContainer>
      <h5 className="chapter-name">{chapterName}</h5>
      <Tree
        multiple
        expandedKeys={selectedKey}
        blockNode
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData3}
        switcherIcon={false}
        onExpand={(e) => console.log(e)}
      />
    </ChapterContainer>
  );
};

const ChapterContainer = styled.div`
  .chapter-name {
    color: #d7984d;
    font-family: "DM Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 34px;
    padding: 4px 20px;
    background: #fff5e5;
    width: fit-content;
    margin: 20px 0 5px 0;
  }

  .ant-tree-switcher {
    width: 0;
  }
  .ant-tree-indent {
    width: 0;
  }
  .ant-tree-treenode {
    padding: 0;
  }
  .ant-tree-node-selected {
    .ant-tree-title > div {
      border-bottom: none;
    }
    .closed {
      display: none;
    }
    .open {
      display: grid;
    }
    .box-bottom {
      display: none;
    }
  }
`;

export default ModuleChapter;
