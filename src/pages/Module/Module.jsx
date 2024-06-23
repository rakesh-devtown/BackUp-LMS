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
import useBatchStore from "../../store/batchStore";
import ModuleChapter from "../../components/Module/ModuleChapter";

const Module = () => {
  const { width } = useWindowSize();
  const currentCourseDetails = useBatchStore(
    (state) => state.currentCourseDetails
  );
  const { Content, Sider } = Layout;

  const chapterNameArray = [
    "FrontEnd Development",
    "BackendDevelopment",
    "DSA",
    "others",
  ];

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

  return (
    <Layout>
      <Helmet>
        <title>Mock title</title>
        {/* <title>DevTown - {currentCourseDetails?.name}</title> */}
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

          {/* showing all the chapter and modules */}
          <ModuleBody>
            <h4>Explore Modules for Learning</h4>
            {chapterNameArray.map((ele, ind) => (
              <ModuleChapter chapterName={ele} index={ind} />
            ))}
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
`;

export default Module;
