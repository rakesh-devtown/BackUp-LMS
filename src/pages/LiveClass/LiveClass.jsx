import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Calendar, FloatButton, Layout, Modal, Tree, notification, theme } from "antd";
import { ArrowLeftOutlined, ArrowUpOutlined, CloseOutlined, DownOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import useWindowSize from "../../hooks/useWindowSize";
import RightSiderMenu from "../../components/RightSiderMenu/RightSiderMenu";
import FolderDetailsCard from "../../components/Cards/video/FolderDetailsCard";
import CousreProgress from "../../components/Cards/module/CourseProgress";
import useBatchStore from "../../store/batchStore";
import ModuleCardHeader from "../../components/ModuleTree2/ModuleCardHeader";
import TopicCard from "../../components/ModuleTree2/TopicCard";
import Spinner from "../../components/loader/Spinner";
import ModuleChapter from "../../components/Module/ModuleChapter";
import AttendenceSheduleCard from "../../components/Cards/AttendenceSheduleCard";
import TaskAssignmentCard from "../../components/Cards/TaskAssignmentCard";
import NextClass from "./NextClass";
import CourseInstructorCard from "../../components/Cards/CourseInstructorCard";
import WatchBeforeNextLive from "./WatchBeforeNextLive";
import ScheduleModalContent from "../../components/Modals/ScheduleCalendarModal/ScheduleModalContent";
import TaskModal from "../../components/Modals/TaskModal";

const LiveClass = () => {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const currentCourseDetails = useBatchStore((state) => state.currentCourseDetails);
  const courseLoading = useBatchStore((state) => state.courseLoading);
  const { getCurrentSectionDetails, getModuleOfEnrolledCourse, setCurrentModule } = useBatchStore();
  const selectedEnrollIdOfCourse = useBatchStore((state) => state.selectedEnrollIdOfCourse);
  const { Content, Sider } = Layout;

  const handleScheduleModal = () => {
    setActiveModal("calendar");
    setIsModalOpen(!isModalOpen);
  };
  const handleTaskModal = () => {
    setActiveModal("task");
    setIsModalOpen(!isModalOpen);
  };

  //internal css
  const myRightSiderStyle = {
    background: "transparent",
    zIndex: width < 992 ? 123456 : null,
    overflow: "auto",
    height: width < 992 ? "100vh" : "85vh",
    position: "fixed",
    right: width < 992 ? 0 : "20px",
    top: width < 992 ? 0 : "136px",
    scrollbarWidth: "none",
  };

  const myScheduleModalStyle = {
    top: "0",
    float: "right",
  };

  const rightSidebarWidth1 = width >= 992 ? "60px" : "0";
  const rightSidebarWidth2 = width >= 992 ? "300px" : "0";
  const rightSidebarWidth = rightSidebarWidth1 + rightSidebarWidth2;
  // console.log("rightSidebarWidth", rightSidebarWidth);
  //   cost rightSidebarWith =0;

  const startLearningFromFirstModule = async () => {
    try {
      // console.log("currentCourseDetails", currentCourseDetails);
      if (currentCourseDetails?.sections?.length === 0) {
        notification.error({ message: "No Module Found", description: "No module found to start learning" });
        return;
      }
      // console.log(currentCourseDetails?.sections[0]?.subsections?.length);
      if (currentCourseDetails?.sections[0]?.subsections?.length > 0) {
        await getCurrentSectionDetails(currentCourseDetails?.sections[0]?.subsections[0]?.id);
      } else if (currentCourseDetails?.sections?.length > 0) {
        await getCurrentSectionDetails(currentCourseDetails?.sections[0]?.id);
      } else {
        notification.error({ message: "No Module Found", description: "No module found to start learning" });
      }

      navigate("/video");
    } catch (err) {
      console.log(err);
    }
  };

  const getEnrollCourses = async () => {
    try {
      await getModuleOfEnrolledCourse(selectedEnrollIdOfCourse);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (selectedEnrollIdOfCourse) {
      getEnrollCourses();
    } else {
      //   navigate("/courses");
    }
  }, []);

  return (
    <Layout style={{ height: "100%" }}>
      <Helmet>
        <title>DevTown - Module</title>
        <meta name="settings" content="settings" />
        <link rel="canonical" href="https://www.learn.devtown.in/setting" />
      </Helmet>
      <Content style={{ background: "#F4F7FE", height: "100%" }}>
        <StyledModal
          title={activeModal === "calendar" ? "Class Schedule" : "Task and Assignment"}
          footer={null}
          open={isModalOpen}
          style={myScheduleModalStyle}
          styles={{ header: { padding: "20px", background: "#F5F7FE" }, body: { minHeight: "530px" } }}
          maskClosable
          width={400}
          onCancel={handleScheduleModal}
        >
          {activeModal === "calendar" ? <ScheduleModalContent /> : <TaskModal />}
        </StyledModal>
        <MainContainer width={width} rightSidebarWidth={rightSidebarWidth}>
          {courseLoading && <Spinner large />}
          {/* sidebar in mobile view */}
          {width < 992 && (
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
          )}
          <ModuleTop>
            <Link to={"/courses"}>
              <Button type="link" className="back-btn" style={{ display: "flex", alignItems: "center" }}>
                <ArrowLeftOutlined /> Back
              </Button>
            </Link>
            <h1>{currentCourseDetails?.name}</h1>
            <FolderDetailsCard />
            <Button type="primary" size="large" danger onClick={startLearningFromFirstModule}>
              Start Learning
            </Button>
            <CousreProgress />
            <NextClass />
          </ModuleTop>
          {width < 992 && (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
              <AttendenceSheduleCard handleScheduleModal={handleScheduleModal} />
              <TaskAssignmentCard handleTaskModal={handleTaskModal} />
            </div>
          )}
          <ModuleBody>
            <h4>Watch Videos before next live :</h4>
            <WatchBeforeNextLive />
          </ModuleBody>
          {/* showing all the chapter and modules */}
          <ModuleBody>
            <h4>Explore Modules for Learning :</h4>
            {currentCourseDetails &&
              currentCourseDetails?.sections?.map((ele, ind) => (
                <ModuleChapter
                  section={ele}
                  index={ind}
                  lastModule={ind === currentCourseDetails?.sections?.length - 1}
                />
              ))}
          </ModuleBody>
          <CourseInstructorCard />
        </MainContainer>
      </Content>

      {/* right sidebar to show modules */}
      {width >= 992 && (
        <Sider collapsedWidth="0" width={rightSidebarWidth1} style={myRightSiderStyle}>
          {/* <RightSideSheduleBar> */}
          {/* </RightSideSheduleBar> */}
        </Sider>
      )}
      {width >= 992 && (
        <>
          <div>
            <AttendenceSheduleCard handleScheduleModal={handleScheduleModal} />
            <TaskAssignmentCard handleTaskModal={handleTaskModal} />
          </div>
          <RightSiderMenu />
        </>
      )}
    </Layout>
  );
};

export default LiveClass;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
  }
  .ant-modal-title {
    color: #2a2a2a;
    font-family: "DM Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const MainContainer = styled.section`
  /* adjusting middle bar size according to sidebar */
  height: 100%;
  overflow-y: auto;
  margin-right: ${(props) => (props.width < 992 ? null : `calc(${props.rightSidebarWidth} + 34px)`)};
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
  margin-bottom: 32px;
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
