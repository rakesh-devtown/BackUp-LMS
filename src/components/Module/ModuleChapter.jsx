import styled from "styled-components";
import { useState } from "react";
import { Tree } from "antd";
import useWindowSize from "../../hooks/useWindowSize";
import { treeData1, treeData2, treeData3 } from "./mockData";
import useBatchStore from "../../store/batchStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { set } from "date-fns";
import TopicCard from "../ModuleTree2/TopicCard";
import ModuleCardHeader from "../ModuleTree2/ModuleCardHeader";

const ModuleChapter = ({ section, index }) => {
  const [selectedKey, setSelectedKey] = useState([]);
  const navigate = useNavigate();

  //function for tree nodes
  const onSelect = (selectedKeys, info) => {
    // navigate("/video");
    //console.log("selected", selectedKeys, info);
    setSelectedKey(selectedKeys);
  };
  const onCheck = (checkedKeys, info) => {
    //console.log("onCheck", checkedKeys, info);
  };

  const [treeData, setTreeData] = useState([]);

  const calculateProgress = (data) => {
    if(!data) return false;
    try{
      const sectionItemLength = data?.sectionItems?.length;
      let sectionProgressLength = 0;
      data?.sectionItems?.map((item) => {
        if(item?.sectionProgress?.length > 0){
          sectionProgressLength += 1;
        }
      });
      return sectionItemLength === sectionProgressLength;
    }catch(err){
      return false;
    }
  };

  const transformData = (data) => {
    if (!data) return [];
    //console.log("data",data)
    return {
      title: (
        <ModuleCardHeader
          title={data.name}
          topic1={data?.sectionItems?.length > 0 ? `Day ${data?.sectionItems[0]?.orderNumber}: ${data?.sectionItems[0]?.title}` : ""}
          topic2={data?.sectionItems?.length > 1 ? `Day ${data?.sectionItems[1]?.orderNumber}: ${data?.sectionItems[1]?.title}` : "" }
          onGoing={calculateProgress(data)}     
        />
      ),
      key: data.id,
      children: data?.sectionItems?.map((item, index) => {
        return {
          title: (
            <TopicCard
              data={item}
            />
          ),
          key: item.id,
          className: index === (data?.sectionItems?.length - 1) ? "animate-bounce" : "",
        };
      }),
    };
  };



  useEffect(()=>{
    console.log("section",section)
    let data = [];
    if(section?.subsections?.length > 0){
       data = section?.subsections.map((subSection, subIndex) => (
        transformData(subSection)
      ))
    }else if(section?.sectionItems?.length > 0){
      data = [transformData(section)]
    }
    setTreeData(data);
  },[section])

  return (
    <ChapterContainer>
      {section?.subsections?.length > 0 && 
        <h5 className="chapter-name">{section?.name}</h5>
      }
      <Tree
        multiple
        expandedKeys={selectedKey}
        blockNode
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
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
