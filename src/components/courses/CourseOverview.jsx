import React, { useState } from "react";
import { Collapse, Card, List, Typography, Button, Space, Drawer } from "antd";
import { useNavigate } from "react-router-dom";
import { Tabs } from "antd";
import DropDown from "./DropDown";
import StickyBox from "react-sticky-box";
import courseData from "./dummydata";
import { StyledButton, StyledP } from "../../styles/LoginPage.styles";
import Test from "./Test";
import AttendanceCalendar from "./AttendanceCalendar";

const { TabPane } = Tabs;
const { Panel } = Collapse;
const { Item } = List;
const { Title } = Typography;




const courseName = "FSWD-120822🟢"; // Replace with the actual name of your course

const CourseOverview = ({ events }) => {
  const [visible, setVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [classDetails, setClassDetails] = useState([]);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("tab1"); // Define and initialize activeTab

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  // const handleBackClick = () => {
  //   navigate(-1);
  // };
  const showDrawer = (day) => {
    setSelectedDay(day);
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
    setSelectedDay(null);
  };
  const onDayClick = (day, classes) => {
    setClassDetails(classes);
    showDrawer(day);
  };
  const buttonStyle = { width: "150px" }; // Custom CSS style to set a fixed width for buttons

  return (
    <div style={{padding:'2rem 5rem'}}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          width: "50%",
        }}
      >
        <Title level={2}>My Programs</Title>
      </div>
      <Title level={3}>{courseName}</Title>
      <Title level={4}>Course Content</Title>

      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        <TabPane tab="Overview" key="tab1">
          <div>
            <StickyBox offsetTop={20} offsetBottom={20}>
              {courseData.map((weekData, weekIndex) => (
                <Collapse
                  key={weekIndex}
                  bordered={false} // Remove border from the Collapse panels
                  expandIconPosition="right" // Move expand icon to the right
                  style={{ width: "50%" }}
                >
                  <Panel
                    header={weekData.week}
                    key={weekIndex}
                    style={{
                      background: "#f7f7f7", // Set a background color
                      borderRadius: "4px", // Add some border radius
                      marginBottom: "16px", // Add space between panels
                    }}
                  >
                    {weekData.days.map((dayData, dayIndex) => (
                      <div
                        key={dayIndex}
                        title={dayData.day}
                        style={{
                          //border: 'none', // Remove border from the cards
                          marginBottom: "12px", // Add space between cards
                          display: "flex",
                        }}
                      >
                        <List>
                          <Item
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "30rem",
                            }}
                          >
                            <p
                              onClick={() =>
                                onDayClick(1, ["Class 1", "Class 2", "Class 3"])
                              }
                            >
                              {dayData.day}
                            </p>

                            <Button
                              styles={{
                                marginLeft: "0.5em",
                                marginRight: "0.5em",
                              }}
                              type="primary"
                              style={buttonStyle}
                              href={dayData.recordingLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Join
                            </Button>
                            <Space>
                              <span>{dayData.classTiming}</span>
                            </Space>
                          </Item>
                          <Item></Item>
                        </List>
                      </div>
                    ))}
                  </Panel>
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
                  <div>
                    <img
                      src="https://global-uploads.webflow.com/60798d9b0b61160814b3d8c3/6214bfdec64863aa471aa0a0_fswd.png"
                      alt="fswd img"
                      style={{
                        height: "11rem",
                        borderRadius: "0.375rem",
                        width: "100%",
                      }}
                    />

                   
                      <StyledButton type="primary"style={{marginTop:'1rem'}}>Join</StyledButton>
                      <StyledButton type="primary" style={{marginTop:'1rem',marginBottom:'1rem'}}>View Code</StyledButton>
                    

                    <StyledP> Day-29 Fetch API & Promises</StyledP>

                    <StyledP>Instructor name:</StyledP>
                    <StyledP>Duration: 01:30 hrs</StyledP>
                    <StyledP>Timings: 20:00 PM IST</StyledP>
                    <StyledP>Date: 13th Jul, 2022</StyledP>
                    <StyledP>Resources: No Resources</StyledP>
                    
                    {/* <ul>
                      {classDetails.map((className, index) => (
                        <li key={index}>{className}</li>
                      ))}
                    </ul> */}
                  </div>
                </Card>
              )}
            </Drawer>
          </div>
        </TabPane>
        <TabPane tab="Assignment" key="tab2">
          <div>
            <StickyBox offsetTop={20} offsetBottom={20}>
            <div style={{display:'flex' , width:'30rem'}}>
            <Title level={4}>Course Content</Title>
            <DropDown />
            
           

            </div>
            <div> <Test/> </div>
            </StickyBox>
          </div>
        </TabPane>
        <TabPane tab="Attendance" key="tab3">
          <div>
            <StickyBox offsetTop={20} offsetBottom={20}>
              <div><AttendanceCalendar/></div>
            </StickyBox>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CourseOverview;
