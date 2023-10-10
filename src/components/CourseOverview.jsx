import React, { useState } from 'react';
import { Collapse, Card, List, Typography, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';
import StickyBox from 'react-sticky-box';

const { TabPane } = Tabs;
const { Panel } = Collapse;
const { Item } = List;
const { Title } = Typography;

const courseName = "FSWD-120822🟢"; // Replace with the actual name of your course

const courseData = [
  {
    week: 'Week 1',
    days: [
      { day: 'Day 1', recordingLink: 'Link 1', materialLink: 'Link A', classTiming: '9:00 AM - 10:30 AM' },
      { day: 'Day 2', recordingLink: 'Link 2', materialLink: 'Link B', classTiming: '10:45 AM - 12:15 PM' },
      // Add more days for Week 1
    ],
  },
  {
    week: 'Week 2',
    days: [
      { day: 'Day 1', recordingLink: 'Link 3', materialLink: 'Link C', classTiming: '9:00 AM - 10:30 AM' },
      { day: 'Day 2', recordingLink: 'Link 4', materialLink: 'Link D', classTiming: '10:45 AM - 12:15 PM' },
      // Add more days for Week 2
    ],
  },
  // Add more weeks as needed
];

function CourseOverview() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tab1'); // Define and initialize activeTab

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const buttonStyle = { width: '150px' }; // Custom CSS style to set a fixed width for buttons

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' , width:'50%'}}>
       
        <Title  level={2}>
          My Programs
        </Title>
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
                  style={{width:'50%'}}
                >
                  <Panel
                    header={weekData.week}
                    key={weekIndex}
                    style={{
                      background: '#f7f7f7', // Set a background color
                      borderRadius: '4px', // Add some border radius
                      marginBottom: '16px', // Add space between panels
                     
                    }}
                  >
                    {weekData.days.map((dayData, dayIndex) => (
                      <div
                        key={dayIndex}
                        title={dayData.day}
                        style={{
                          //border: 'none', // Remove border from the cards
                          marginBottom: '12px', // Add space between cards
                          display:'flex'
                        }}
                      >
                        <List>
                          <Item style={{display:'flex',}}>
                         <p>{dayData.day}</p>  
                            
                            <Button
                            styles={{marginLeft:'0.5em',marginRight:'0.5em'}}
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
                          <Item>
                           
                          </Item>
                          
                        </List>
                      </div>
                    ))}
                  </Panel>
                </Collapse>
              ))}
            </StickyBox>
          </div>
        </TabPane>
        <TabPane tab="Assignment" key="tab2">
          <div>
            <StickyBox offsetTop={20} offsetBottom={20}>
              <p>Thiscontent is sticky within Tab 2</p>
            </StickyBox>
          </div>
        </TabPane>
        <TabPane tab="Attendance" key="tab3">
          <div>
            <StickyBox offsetTop={20} offsetBottom={20}>
              <p>This content is sticky within Tab 3</p>
            </StickyBox>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default CourseOverview;
