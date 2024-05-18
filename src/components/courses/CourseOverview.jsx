import React, { useEffect, useState } from "react";
import {
  Collapse,
  Card,
  List,
  Typography,
  Button,
  Space,
  Drawer,
  notification,
  Modal,
  Tag,
} from "antd";
import { useNavigate } from "react-router-dom";
import { Tabs } from "antd";
import DropDown from "./DropDown";
import StickyBox from "react-sticky-box";
import courseData from "./dummydata";
import { StyledButton, StyledP } from "../../styles/LoginPage.styles";
import Test from "./Test";
import AttendanceCalendar from "./AttendanceCalendar";
import useBatchStore from "../../store/batchStore";
import { set } from "date-fns";
import MeetingModal from "../Meetings/MeetingModal";
import {
  ArrowLeftOutlined,
  CloseOutlined,
  FilePdfFilled,
  LinkOutlined,
  LinkedinFilled,
  PlayCircleFilled,
  PlayCircleOutlined,
} from "@ant-design/icons";
import ModalVideo from "react-modal-video";
import YouTubeIframe from "./YouTubeIframe";
import { Link } from "react-router-dom";
import { BackButton } from "../../styles/SessionLimit.styles";
import useWindowSize from "../../hooks/useWindowSize";
import {
  CourseOverViewStyledDiv,
  CourseOverviewBackButton,
  CourseOverviewContainer,
  CourseOverviewDayImage,
  CourseOverviewItem,
  CourseOverviewModelInnerDiv,
  CourseOverviewModelOuterDiv,
  CourseOverviewPanel,
  CourseOverviewResourceContainer,
  CourseOverviewWeekContainer,
  DayName,
  ExpiredPill,
  LivePill,
  NoResources,
  ResourceButton,
  ResourceButtonPDF,
  ResourceItem,
  ResourceText,
  UpcomingPill,
} from "../../styles/courseOverView.styles";
import { StyledCloseIcon, StyledModal } from "../../styles/shared.styles";
import { setHeader } from "../../utils/header";
import { serviceGet } from "../../utils/api";
import useLoadingStore from "../../store/loadingStore";
const { TabPane } = Tabs;
const { Panel } = Collapse;
const { Item } = List;
const { Title } = Typography;

const buttonStyle = { width: "150px" }; // Custom CSS style to set a fixed width for buttons
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const month = date.getMonth() + 1;
  const monthName = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  const time = `${hours}:${minutes.toString().padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"
    } IST`;
  const dateStr = `${day}th ${monthName}, ${year}`;

  return [time, dateStr, hours, minutes];
};
const addTime = (timeStr, hoursToAdd, minutesToAdd) => {
  // Extract hours and minutes from the time string
  const [time, period] = timeStr.split(' ');
  let [hours, minutes] = time.split(':');

  // Convert 12-hour time to 24-hour time
  if (period === 'PM' && hours !== '12') hours = Number(hours) + 12;
  if (period === 'AM' && hours === '12') hours = '00';

  // Create a new Date object
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);

  // Add the desired amount of time
  date.setHours(date.getHours() + hoursToAdd);
  date.setMinutes(date.getMinutes() + minutesToAdd);

  // Format the new time back to a string
  let newHours = date.getHours();
  let newMinutes = date.getMinutes();

  // Convert 24-hour time to 12-hour time
  let newPeriod = 'AM';
  if (newHours >= 12) {
    newPeriod = 'PM';
    if (newHours > 12) newHours -= 12;
  } else if (newHours === 0) {
    newHours = 12;
  }

  // Pad minutes with leading zeros if necessary
  newMinutes = newMinutes.toString().padStart(2, '0');

  // Return the new time string
  return `${newHours}:${newMinutes} ${newPeriod} IST`;
};

const CourseOverview = ({ events }) => {
  const [openMeetingConfirmation, setOpenMeetingConfirmation] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [classDetails, setClassDetails] = useState([]);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("tab1"); // Define and initialize activeTab
  const [meetingData, setMeetingData] = useState({}); // Define and initialize meetingData
  const currentBatchId = useBatchStore((state) => state.currentBatchId);
  const currentBatch = useBatchStore((state) => state.currentBatch);
  const [ModalVideoOpen, setModalVideoOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState({});
  const [syllabus, setSyllabus] = useState();
  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  const setLoading = useLoadingStore((state) => state.setLoading);
  const [dayId, setDayId] = useState("");
  const [resources, setResources] = useState([]);
  const { width } = useWindowSize();
  const getSessionStatus = (startTime) => {
    const currentTime = new Date();
    const sessionTime = new Date(startTime);
    const diff = sessionTime - currentTime;
    const hoursDiff = diff / (60 * 60 * 1000);

    if (hoursDiff < 0) {
      return { buttonClass: "cursor-not-allowed" };
    } else if (hoursDiff <= 1) {
      return { buttonClass: "" };
    } else {
      return { buttonClass: "" };
    }
  };
  function extractVideoIdFromUrl(url) {
    // Regular expression to match YouTube video IDs
    const regExp =
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?|watch)\/|[^?]*[?](?:v|e(?:mbed)?|watch)=(?:[^&]*))|youtu\.be\/)([^"&?/]{11})/;

    const match = url.match(regExp);

    if (match && match[1]) {
      return match[1];
    } else {
      // Video ID not found
      return null;
    }
  }

  if (resources?.length !== 0) {
    if (resources?.length == 2) {
      for (var i = 0; i <= 1; i++) {
        if (resources[i].type == "url") {
          var youTubeUrl = resources[i].destinationUrl;
        }
      }
    } else {
      if (resources?.length == 1) {
        if (resources[0].type == "url") {
          var youTubeUrl = resources[0].destinationUrl;
        }
      }
    }
    if (youTubeUrl == "undefined") {
    } else {
      var VideoID = youTubeUrl;
    }
  } else {
  }
  // const handleBackClick = () => {
  //   navigate(-1);
  // };
  const now = formatDate(new Date());

  const showDrawer = (day) => {
    setSelectedDay(day);
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
    setSelectedDay(null);
  };
  const onDayClick = (day, classes, resources) => {
    setResources(resources);
    setClassDetails(classes);
    showDrawer(day);
  };
  async function handleGetCourseData() {
    if (!currentBatchId) {
      navigate("/programs");
      return;
    }
    // await getCurrentBatch(currentBatchId);
    if (
      currentBatch &&
      currentBatch.syllabus &&
      currentBatch.syllabus.length > 0
    )
      setSyllabus(currentBatch?.syllabus[0]?.weeks);
  }
  const [isCodeAvailable, setIsCodeAvailable] = useState(true);

  const handleNavigation = async (dayId, batchId) => {
    try {
      setLoading(true);
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const { data, statusCode, message } = await serviceGet(
        `student/student-api/v1/day/tree?id=${dayId}&batchId=${batchId}`
      );
      if (statusCode === 404 || !data.tree) {
        setIsCodeAvailable(false);


      }
      else {
        setIsCodeAvailable(true);


      }
    } catch (error) {

    } finally {
      setLoading(false);
    }


  }

  useEffect(() => {
    if (dayId)
      handleNavigation(dayId, currentBatch._id);

  }, [dayId])

  useEffect(() => {
    handleGetCourseData();
  }, []);
  const handleCancel = () => {
    setModalVideoOpen(false);
  };


  return (
    <CourseOverViewStyledDiv activeTab={activeTab}>
      <MeetingModal
        meetingNumber={meetingData?.meetingNumber}
        name={meetingData?.topic}
        date={meetingData?.startTime}
        platform={meetingData?.platform}
        url={meetingData?.url}
        open={openMeetingConfirmation}
        setOpen={setOpenMeetingConfirmation}
      />
      <StyledModal
        footer={null}
        open={ModalVideoOpen}
        onCancel={handleCancel}
        closeIcon={<StyledCloseIcon />}
      >
        <CourseOverviewModelOuterDiv>
          <CourseOverviewModelInnerDiv>
            <YouTubeIframe VideoId={VideoID} />
          </CourseOverviewModelInnerDiv>
        </CourseOverviewModelOuterDiv>
      </StyledModal>
      <CourseOverviewContainer>
        <Link to="/programs">
          <CourseOverviewBackButton width={width} type="primary">
            <ArrowLeftOutlined /> Back
          </CourseOverviewBackButton>
        </Link>
      </CourseOverviewContainer>

      <Title level={7}>{currentBatch?.name}</Title>
      <Title level={4}>Course Content</Title>

      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        <TabPane tab="Overview" key="tab1">
          <div>



            <StickyBox style={{ width: "100%" }} offsetTop={20} offsetBottom={20}>


              {syllabus?.map((weekData, weekIndex) => (
                <Collapse
                  key={weekIndex}
                  bordered={false}
                  expandIconPosition="right"
                  style={{ width: width > 700 ? "50%" : "100%" }}
                >
                  <CourseOverviewPanel header={weekData.name} key={weekIndex}>
                    {weekData.days.map((dayData, dayIndex) => {
                      const convertToDate = (dateStr) => {
                        const [day, month, year] = dateStr.split(' ');
                        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                        const monthNumber = monthNames.indexOf(month) + 1;
                        return new Date(`${year}-${monthNumber}-${day.slice(0, -2)}`);
                      };

                      let pillText;
                      dayData.sessions.map((session) => {
                        const courseStartDateObj = new Date(session?.meeting[0]?.startTime);
                        const sessionStartDate = formatDate(courseStartDateObj)[1];
                        const sessionTime = formatDate(courseStartDateObj)[0];

                        // const currentDateObj = formatDate(new Date());
                        // const currentTime = currentDateObj[0];
                        // const currentDate = currentDateObj[1];


                        const currentDateObj = new Date()

                        if (courseStartDateObj > currentDateObj) {
                          const timeDiff = Math.abs(courseStartDateObj - currentDateObj);
                          const diffHours = timeDiff / (1000 * 60 * 60); // Convert milliseconds to hours

                          if (diffHours <= 2) {
                            pillText = "LIVE";
                          } else {
                            pillText = "UPCOMING";
                          }
                        } else if (courseStartDateObj < currentDateObj) {
                          pillText = "EXPIRED";
                        }


                      })
                      return (
                        <CourseOverviewWeekContainer
                          key={dayIndex}
                          title={dayData.name}
                          onClick={() => {
                            setDayId(dayData._id);
                            onDayClick(
                              dayData.name,
                              dayData.sessions,
                              dayData.resources
                            );
                          }}
                        >
                          <List style={{ width: width <= 700 ? "100%" : "60%" }}>
                            <CourseOverviewItem width={width}>
                              <DayName

                              >

                                {dayData.name}

                              </DayName>

                              <Space>

                                <span> {pillText === "EXPIRED" ? (
                                  <Tag color="red" >
                                    {pillText}
                                  </Tag>

                                ) : pillText === "UPCOMING" ? (
                                  <Tag color="blue" >
                                    {pillText}
                                  </Tag>
                                ) : pillText === "LIVE" ? (
                                  <Tag color="green" >
                                    {pillText}
                                  </Tag>
                                ) : (
                                  <Tag color="blue" >
                                    NO CLASS
                                  </Tag>
                                )


                                }</span>
                              </Space>
                            </CourseOverviewItem>
                            <Item></Item>
                          </List>
                        </CourseOverviewWeekContainer>
                      )
                    })}
                  </CourseOverviewPanel>
                </Collapse>
              ))}
            </StickyBox>
            <Drawer
              title={selectedDay ? `Day ${selectedDay}` : null}
              placement="right"
              closable={true}
              onClose={onClose}
              visible={visible}
            >
              {selectedDay && (
                <Card title={`Live Classes for Day ${selectedDay}`}>
                  {classDetails.map((className, index) => (
                    <div key={index}>
                      <CourseOverviewDayImage
                        src="https://global-uploads.webflow.com/60798d9b0b61160814b3d8c3/6214bfdec64863aa471aa0a0_fswd.png"
                        alt="fswd img"
                      />

                      <StyledButton
                        type="primary"
                        onClick={() => {
                          const dt = new Date(
                            new Date(className?.date).toLocaleString("en-US", {
                              timeZone: "Asia/Calcutta",
                            })
                          );
                          const dt_e = new Date(
                            new Date(className?.date).toLocaleString("en-US", {
                              timeZone: "Asia/Calcutta",
                            })
                          );
                          dt_e.setHours(dt.getHours() + 2);
                          // setOpenMeetingConfirmation(true);
                          // setMeetingData({
                          //   meetingNumber: className?.meeting[0]?.meetingNumber,
                          //   name: className?.topic,
                          //   date: className?.meeting[0]?.startTime,
                          //   platform: className?.meeting[0]?.platform,
                          //   url: className?.meeting[0]?.joinUrl,
                          // });
                          if (new Date() < dt) {
                            notification.error({
                              message: "Meeting has not started yet",
                            });
                            // toast.error("Meeting has not started yet");
                          } else if (new Date() >= dt && new Date() <= dt_e) {
                            // setopen(true);
                            setOpenMeetingConfirmation(true);
                            setMeetingData({
                              meetingNumber:
                                className?.meeting[0]?.meetingNumber,
                              name: className?.topic,
                              date: className?.meeting[0]?.startTime,
                              platform: className?.meeting[0]?.platform,
                              url: className?.meeting[0]?.joinUrl,
                            });
                          } else
                            notification.error({
                              message: "Meeting has Expired",
                            });
                        }}
                        className={`bg-[#6422CD] hover:bg-[#6422CD] text-white font-bold font-dm-sans py-2 w-full rounded-lg ${getSessionStatus(className?.meeting[0]?.startTime)
                            .buttonClass
                          }`}
                        disabled={getSessionStatus(
                          className?.meeting[0]?.startTime
                        ).buttonClass.includes("cursor-not-allowed")}
                      >
                        Join
                      </StyledButton>
                      {
                        isCodeAvailable && (

                          <StyledButton type="primary"
                            onClick={() => navigate(`/tree?dayId=${dayId}&batchId=${currentBatch._id}`)}
                          // onClick={() => handleNavigation(dayId , currentBatch?._id)}

                          >
                            View Code
                            {/* <a
                            target="_blank"
                            href={`/tree?dayId=${dayId}&batchId=${currentBatch._id}`}
                            rel="noreferrer"
                          >
                            View Code
                          </a> */}
                          </StyledButton>
                        )
                      }

                      <StyledP> Topic : {className.topic}</StyledP>

                      <StyledP>
                        Instructor name:{" "}
                        {currentBatch?.mentors?.map((mentor, index) => {
                          const fullName = `${mentor?.firstName} ${mentor?.lastName}`;
                          return index === currentBatch?.mentors?.length - 1
                            ? fullName
                            : `${fullName}, `;
                        })}{" "}
                      </StyledP>
                      <StyledP>Duration: 01:30 hrs</StyledP>
                      <StyledP>
                        Timings: {formatDate(className.meeting[0].startTime)[0]}{" "}
                      </StyledP>
                      <StyledP>
                        Date: {formatDate(className.meeting[0].startTime)[1]}
                      </StyledP>
                      <StyledP>
                        Resources:{" "}
                        <CourseOverviewResourceContainer>
                          {resources?.length !== 0 ? (
                            resources?.map((resource, i) => (
                              <ResourceItem key={resource?._id}>
                                <div>
                                  {resource.type === "pdf" ? (
                                    <ResourceButtonPDF
                                      onClick={() =>
                                        window.open(resource.destinationUrl)
                                      }
                                    >
                                      <FilePdfFilled />
                                      <ResourceText>
                                        {resource?.name
                                          ? resource.name.split(".")[0]
                                          : resource?.title.split(".")[0]}
                                      </ResourceText>
                                    </ResourceButtonPDF>
                                  ) : (
                                    <ResourceButton
                                      onClick={() => setModalVideoOpen(true)}
                                    >
                                      <PlayCircleFilled />
                                      <ResourceText>
                                        {resource?.name
                                          ? resource.name.split(".")[0]
                                          : resource?.title.split(".")[0]}
                                      </ResourceText>
                                    </ResourceButton>
                                  )}
                                </div>
                              </ResourceItem>
                            ))
                          ) : (
                            <NoResources>No Resources</NoResources>
                          )}
                        </CourseOverviewResourceContainer>
                      </StyledP>
                    </div>
                  ))}
                </Card>
              )}
            </Drawer>
          </div>
        </TabPane>

        <TabPane tab="Attendance" key="tab3">
          <div>
            <StickyBox offsetTop={20} offsetBottom={20}>
              <div>
                <AttendanceCalendar />
              </div>
            </StickyBox>
          </div>
        </TabPane>
      </Tabs>
    </CourseOverViewStyledDiv>
  );
};

export default CourseOverview;
