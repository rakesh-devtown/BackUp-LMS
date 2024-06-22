import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, FloatButton, Layout, Tree, theme } from "antd";
import {
  ArrowLeftOutlined,
  ArrowUpOutlined,
  CloseOutlined,
  DownOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import useWindowSize from "../../hooks/useWindowSize";
import RightSiderMenu from "../../components/RightSiderMenu/RightSiderMenu";
import FolderDetailsCard from "../../components/Cards/video/FolderDetailsCard";
import CousreProgress from "../../components/Cards/module/CourseProgress";
import { treeData } from "./mockData";
import useBatchStore from "../../store/batchStore";
import ModuleCardHeader from "../../components/ModuleTree2/ModuleCardHeader";
import TopicCard from "../../components/ModuleTree2/TopicCard";

const Module = () => {
  const [selectedKey, setSelectedKey] = useState([]);
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const currentCourseDetails = useBatchStore((state) => state.currentCourseDetails);
  const { Content, Sider } = Layout;
  const [mockData, setMockData] = useState([]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  //function for tree nodes
  const onSelect = (selectedKeys, info) => {
    // navigate("/video");
    console.log("selected", selectedKeys, info);
    setSelectedKey(selectedKeys);
  };
  const onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };

  const mySiderStyle = {
    background: "transparent",
    zIndex: width < 992 ? 123456 : null,
    overflow: "auto",
    height: width < 992 ? "100vh" : "85vh",
    position: "fixed",
    right: width < 992 ? 0 : "20px",
    top: width < 992 ? 0 : "136px",
    scrollbarWidth: "none",
  };

  // const rightSidebarWidth = width >= 992 ? "60px" : "0";
  const rightSidebarWidth = 0;



  // useEffect(() => {
  //   if(currentCourseDetails?.sections && currentCourseDetails?.sections.length > 0){
  //     const data = currentCourseDetails.sections.map((section, index) => {
  //       return {
  //         title: (
  //           <ModuleCardHeader
  //             title={section?.name}
  //             topic1={section?.subsections[0].name}
  //             topic2={section?.subsections[1].name}
  //             onGoing={section?.subsections.length > 0 ? true : false}
  //           />
  //         ),
  //         key: index.toString(),
  //         children: section?.subsections.map((subSection, subIndex) => {
  //           return {
  //             title: <TopicCard data={subSection} />,
  //             key: `${index}-${subIndex}`,
  //             className: `${subIndex === section?.subsections?.length -1 ? "animate-bounce" : ""}`,
  //           };
          
  //         })
  //       };
  //     });
  //     setMockData(data);
  //   }
  // },[currentCourseDetails])

  return (
    <Layout>
      <Helmet>
        <title>DevTown - {currentCourseDetails?.name}</title>
        <meta name="settings" content="settings" />
        <link rel="canonical" href="https://www.learn.devtown.in/setting" />
      </Helmet>
      <Content style={{ background: "#F4F7FE" }}>
        <MainContainer width={width} rightSidebarWidth={rightSidebarWidth}>
          {/* sidebar in mobile view */}
          {/* {width < 992 && (
            <FloatButton.Group
              trigger="click"
              type="primary"
              style={{
                right: 50,
                bottom: 150,
              }}
              icon={<MenuUnfoldOutlined />}
            >
              <RightSiderMenu />
            </FloatButton.Group>
          )} */}
          <ModuleTop>
            <Link to={"/"}>
              <Button type="link" className="back-btn">
                {" "}
                <ArrowLeftOutlined /> Back{" "}
              </Button>
            </Link>
            <h1>Course Name</h1>
            <FolderDetailsCard />
            {/* <CousreProgress /> */}
            <Link to={"/video"}>
              <Button type="primary" size="large" danger>
                Start Learning
              </Button>
            </Link>
          </ModuleTop>
          <ModuleBody>
            <h4>Explore Modules for Learning</h4>
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
          </ModuleBody>
        </MainContainer>
      </Content>

      {/* right sidebar to show modules */}
      {/* {width >= 992 && (
        <Sider
          collapsedWidth="0"
          width={rightSidebarWidth}
          style={mySiderStyle}
        >
          <RightSiderMenu />
        </Sider>
      )} */}
    </Layout>
  );
};

const MainContainer = styled.section`
  /* adjusting middle bar size according to sidebar */
  margin-right: ${(props) =>
    props.width < 992 ? null : `calc(${props.rightSidebarWidth} + 20px)`};
  padding: ${(props) => (props.width >= 768 ? "24px" : "12px")};
  border-radius: 25px;
  border: 1px solid #e9eaf0;
  background: white;
  .ant-float-btn-circle {
    height: 60px;
    width: 60px;
  }
`;

const ModuleTop = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 32px;
  h1 {
    color: #1d2026;
    font-family: "DM Sans";
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .back-btn {
    padding: 0;
    .anticon {
      margin: 0;
    }
  }
`;

const ModuleBody = styled.div`
  h4 {
    padding: 16px;
    color: #252525;
    font-family: "DM Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 8px;
    background: #e6ebf3;
    margin-bottom: 5px;
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

export default Module;
