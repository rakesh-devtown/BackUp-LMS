import React, { useEffect, useState } from "react";
import { Button, Col, Row, Space, Tree } from "antd";
import styled from "styled-components";
import { DownOutlined } from "@ant-design/icons";
import useWindowSize from "../../hooks/useWindowSize";
import useBatchStore from "../../store/batchStore";
import TopicNode from "./TopicNode";

const ModuleTree = () => {
  const { width } = useWindowSize();
  const [treeData, setTreeData] = useState([])
  const [selectedKeys, setSelectedKeys] = useState();
  const currentCourseDetails = useBatchStore((state) => state.currentCourseDetails);
  const currentCourseSections = useBatchStore((state) => state.currentCourseSections);
  const {getVideo,getCurrentSectionDetailsWithVideo} = useBatchStore();
  const currentModule = useBatchStore((state) => state.currentModule);
  const currentVideo = useBatchStore(state=>state.currentVideo);

  const onSelect = async(selectedKeys, info) => {
    try{
      const id = info.node.key;
      await getVideo(id);
    }catch(err){
      console.log(err)
    }
  };
  const onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };


  const transformDataToTree = (data) => {
    const children = data.sectionItems.map((item, index) => ({
      title: <TopicNode class="ant-tree-treenode-selected" time={""} topic={`Day ${item?.orderNumber}: `+item.title} checked={item?.sectionProgress?.length > 0 ? (item?.sectionProgress[0].isCompleted) :false} />,
      key: item?.id, // Use the section item ID as the key
    }));
  
    return {
      title: data.name,
      key: "0", // Use the module ID as the key
      className: "level-1",
      selectable: false,
      children: children,
    };
  };

  const clickOnPreviousModule = async() => {
    try{
      const indexOfCurrentCourseSectionInModule = currentModule?.subsections.findIndex((item) => item.id === currentCourseSections?.id);
      const previousModule = currentModule?.subsections[indexOfCurrentCourseSectionInModule - 1];
      if(previousModule){
        await getCurrentSectionDetailsWithVideo(
          previousModule?.id,
          previousModule?.sectionItems[0]?.id
        )
      }
    }catch(err){
      console.log(err)
    }
  }

  const clickOnPreviousModule2 = async() => {
    try{
      const indexOfCurrentCourseSectionInModule = currentModule?.sections.findIndex((item) => item.id === currentCourseSections?.id);
      const previousModule = currentModule?.sections[indexOfCurrentCourseSectionInModule - 1];
      if(previousModule){
        await getCurrentSectionDetailsWithVideo(
          previousModule?.id,
          previousModule?.sectionItems[0]?.id
        )
      }
    }catch(err){
      console.log(err)
    }
  }

  const clickOnNextModule = async() => {
    try{
      const indexOfCurrentCourseSectionInModule = currentModule?.subsections.findIndex((item) => item.id === currentCourseSections?.id);
      const nextModule = currentModule?.subsections[indexOfCurrentCourseSectionInModule  + 1];
      if(nextModule){
        await getCurrentSectionDetailsWithVideo(
          nextModule?.id,
          nextModule?.sectionItems[0]?.id
        )
      }
    }catch(err){
      console.log(err)
    }
  }

  const clickOnNextModule2 = async() => {
    try{
      const indexOfCurrentCourseSectionInModule = currentModule?.sections.findIndex((item) => item.id === currentCourseSections?.id);
      const nextModule = currentModule?.sections[indexOfCurrentCourseSectionInModule  + 1];
      if(nextModule){
        await getCurrentSectionDetailsWithVideo(
          nextModule?.id,
          nextModule?.sectionItems[0]?.id
        )
      }
    }catch(err){
      console.log(err)
    }
  }

  // console.log("currentModules : ",currentModule);
  // console.log("current course sections :"currentCourseSections)


  useEffect(()=>{
    if(currentCourseSections){
      const transformedData = transformDataToTree(currentCourseSections)
      //console.log(transformedData)
      setTreeData([transformedData])
    }
  },[currentCourseSections])

  useEffect(()=>{
    if(currentVideo?.id){
      setSelectedKeys([currentVideo?.id])
    }
  },[currentVideo?.id])

  return (
    <>
      {
        treeData.length > 0 &&
        <StyledTree
        //   checkable
        // defaultCheckedKeys={["0-0-0", "0-0-1"]}
        defaultExpandedKeys={[treeData[0]?.key]}
        selectedKeys={selectedKeys}
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
        showIcon={false}
        blockNode
        switcherIcon={<DownOutlined />}
        screenWidth={width}
      />
      }     
      {
        (currentCourseDetails &&
        currentCourseDetails?.sections?.length > 0 && 
        currentCourseDetails?.sections[0]?.subsections?.length > 0) &&
        <BottomButtons>
          {
            currentModule?.subsections?.length > 1 &&
            currentModule?.subsections[0]?.id !== currentCourseSections?.id&&
            <Col span={12} onClick={clickOnPreviousModule}>
              <p>Previous Module</p>
            </Col>
          }
          {
            currentModule?.subsections?.length > 1 &&
            currentModule?.subsections[currentModule?.subsections.length - 1]?.id !== currentCourseSections?.id&&
            <Col span={12} onClick={clickOnNextModule}>
              <p>Next Module</p>
            </Col>
          }
        </BottomButtons>
      }
      {
        (currentCourseDetails &&
        currentCourseDetails?.sections?.length > 0 && 
        currentCourseDetails?.sections[0]?.sectionItems?.length > 0) &&
        <BottomButtons>
          {
            currentModule?.sections?.length > 1 &&
            currentModule?.sections[0]?.id !== currentCourseSections?.id&&
            <Col span={12} onClick={clickOnPreviousModule2}>
              <p>Previous Module</p>
            </Col>
          }
          {
            currentModule?.sections?.length > 1 &&
            currentModule?.sections[currentModule?.sections.length - 1]?.id !== currentCourseSections?.id&&
            <Col span={12} onClick={clickOnNextModule2}>
              <p>Next Module</p>
            </Col>
          }
        </BottomButtons>
      }
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

  .ant-tree-treenode:hover:not(.ant-tree-treenode-selected){
    .ant-tree-title>div {
    color: #3d7fe9 !important;
    }
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
