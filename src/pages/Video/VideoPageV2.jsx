import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Layout, Modal, Space, theme } from "antd";
import styled from "styled-components";
import {
  ArrowLeftOutlined,
  ArrowUpOutlined,
  PlayCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { BsBookmarkPlusFill } from "react-icons/bs";
import Description from "../../components/DescriptionSection/Description";
import ClassNotes from "../../components/ClassNotesSection/ClassNotes";
import useWindowSize from "../../hooks/useWindowSize";
import VideoPlayer from "../../components/Video/VideoPlayer";
import {
  FullContentLayout,
  MainContentLayout,
} from "../../styles/layout.styles";
import ModuleRightSidebar from "../../components/ModuleRightSidebar/ModuleRightSidebar";
import AskDoubtModal from "../../components/AskDoubts/AskDoubtModal";

const VideoV2 = () => {
  const { width } = useWindowSize();
  const [collapsed, setCollapsed] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const { Sider } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleBookmark = () => setBookmarked(!bookmarked);
  const handleCollapsed = () => setCollapsed(!collapsed);
  const handleRightSideBar = () => {
    if (width < 992) {
      setCollapsed(!collapsed);
    }
  };

  const mySiderStyle = {
    background: "transparent",
    zIndex: width < 992 ? 123456 : null,
    overflow: "auto",
    height: width < 992 ? "100vh" : "85vh",
    position: "fixed",
    right: width < 992 ? 0 : "20px",
    top: width < 992 ? 0 : "158px",
    scrollbarWidth: "none",
  };

  const rightSidebarWidth = width > 1200 || width < 992 ? "300px" : "250px";

  useEffect(() => {
    console.log(width);
    if (width >= 992) {
      setCollapsed(false);
    }
  }, [width]);

  return (
    <>
      <Helmet>
        <title>Video</title>
        <meta name="settings" content="settings" />
        <link rel="canonical" href="https://www.learn.devtown.in/setting" />
      </Helmet>
      <GoBackBtn
        widtth={width}
        type="link"
        size="large"
        onClick={() => navigate("/")}
      >
        <ArrowLeftOutlined /> Back To DashBoard
      </GoBackBtn>

      <FullContentLayout width={width}>
        {/* modal for ask doubts */}
        <StyledModal
          open={isModalOpen}
          footer={null}
          centered
          onCancel={() => setIsModalOpen(false)}
          maskClosable
        >
          <AskDoubtModal />
        </StyledModal>
        <MainContainer
          width={width}
          rightSidebarWidth={rightSidebarWidth}
          collapsed={collapsed}
        >
          <Header width={width}>
            <div className="inner-header" onClick={handleRightSideBar}>
              <Space size={12} align="center">
                <i>
                  <PlayCircleOutlined
                    style={{ fontSize: "40px", color: "#3F4B5E" }}
                  />
                </i>
                <Space direction="vertical" size={4}>
                  <p>Data Structure and Algorithms / Introduction to HTML</p>
                  <h1 className="test">Basic of Web Development</h1>
                </Space>
                {width < 992 && (
                  <RightOutlined
                    style={{
                      marginRight: "10px",
                      fontSize: "20px",
                      strokeWidth: "30px",
                      stroke: "black",
                    }}
                  />
                )}
              </Space>
              {width >= 992 && (
                <StyledBookmarkBtn
                  type="link"
                  icon={
                    bookmarked ? (
                      <BsFillBookmarkCheckFill size={20} color="green" />
                    ) : (
                      <BsBookmarkPlusFill size={20} />
                    )
                  }
                  iconPosition="end"
                  className="btn-bookmark"
                  size="large"
                  onClick={handleBookmark}
                >
                  {width > 1120 && <span>Add Bookmark</span>}
                </StyledBookmarkBtn>
              )}
            </div>
            <ButtonsDiv1 width={width}>
              <Button
                color="primary"
                type="text"
                size={width > 1120 ? "large" : "middle"}
              >
                Previous Lecture
              </Button>
              <Button type="text" size={width > 1120 ? "large" : "middle"}>
                Next Lecture
              </Button>
            </ButtonsDiv1>
          </Header>

          <VideoPlayer />

          <ButtonsDiv2>
            <div>
              <a className="btn" href="#description">
                Description
              </a>
              <a className="btn" href="#classNotes">
                Notes
              </a>
              <Button type="text" size="large">
                View Code <ArrowUpOutlined rotate={45} />
              </Button>
              <Button type="text" size="large">
                Code Rubiks
              </Button>
            </div>
            <Button
              size="large"
              className="ask-btn"
              onClick={() => setIsModalOpen(true)}
            >
              ✋ Ask Doubt
            </Button>
            {width < 992 && (
              <Button
                icon={
                  bookmarked ? (
                    <BsFillBookmarkCheckFill color="green" />
                  ) : (
                    <BsBookmarkPlusFill color="#0859DE" />
                  )
                }
                size="large"
                className="bookmark-btn-mobile"
                onClick={handleBookmark}
              />
            )}
          </ButtonsDiv2>
          <Description />
          <ClassNotes />
        </MainContainer>

        {/* right sidebar to show modules */}
        <Sider
          collapsed={collapsed}
          collapsedWidth="0"
          width={rightSidebarWidth}
          style={mySiderStyle}
        >
          {width < 992 && !collapsed && (
            <div className="shaded-background" onClick={handleCollapsed}></div>
          )}
          <ModuleRightSidebar />
        </Sider>
      </FullContentLayout>
    </>
  );
};

export default VideoV2;

const GoBackBtn = styled(Button)`
  font-size: 18px;
  margin-left: ${(props) => (props.width >= 768 ? "24px" : "12px")};
`;

const MainContainer = styled(MainContentLayout)`
  /* adjusting middle bar size according to sidebar */
  margin-right: ${(props) =>
    props.collapsed || props.width < 992
      ? null
      : `calc(${props.rightSidebarWidth} + 14px)`};
  padding: 0;
`;

const StyledModal = styled(Modal)`
  border-radius: 16px;
  overflow: hidden;
  .ant-modal-content {
    padding: 0;
  }
`;

const Header = styled.div`
  display: flex;
  padding: 24px 16px;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  border-bottom: 1px solid #e9eaf0;
  font-family: "DM Sans";
  align-items: ${(props) => (props.width >= 768 ? "center" : "flex-start")};
  flex-direction: ${(props) => (props.width >= 768 ? "row" : "column")};
  .inner-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    p {
      color: #474747;
      font-size: 14px;
    }
    h1 {
      color: #1d2026;
      font-size: 24px;
      font-weight: 700;
    }
  }
`;

const StyledBookmarkBtn = styled(Button)`
  display: flex;
  align-items: center;
`;

const ButtonsDiv1 = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: ${(props) => (props.width >= 1200 ? "10px" : "5px")};
  /* font-size: ${(props) =>
    props.width < 1120 && props.width >= 992 ? "14px" : null}; */
  button {
    color: #294169;
  }
  button:hover {
    color: white !important;
    background-color: #415b88 !important;
  }
  button:active {
    background-color: #294169 !important;
  }
`;

const ButtonsDiv2 = styled.div`
  position: relative;
  display: flex;
  border-top: 1px solid #e9eaf0;
  border-bottom: 1px solid #e9eaf0;
  margin: 0 16px;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;
  scrollbar-width: none;
  & > div {
    display: flex;
    align-items: center;
  }
  .btn {
    width: 150px;
    padding: 20px;
    color: #1d2026;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    border: none;
    border-bottom: 3px solid white;
    cursor: pointer;
    &:focus,
    &:hover {
      border-bottom: 3px solid #0859de;
    }
  }
  .ask-btn {
    font-family: "DM Sans";
    color: #1d2026;
    font-size: 16px;
    font-weight: 400;
  }
  .bookmark-btn-mobile {
    position: sticky;
    right: 0;
    padding: 5px 10px;
  }
  /* .link {
    display: flex;
    justify-content: center;
  }
  .link:last-child {
    background: linear-gradient(90deg, #0a5be0 0%, #ff4e72 104.46%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  } */
`;
