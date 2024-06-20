import { Col, Row, Tabs } from "antd";
import CourseCompletionCard from "../../components/Cards/CourseCompletionCard";
import icon_python from "../../assets/images/courses/icon_python.svg";
import mern_icon from "../../assets/images/courses/mern_icon.svg";
import icon_Cplus from "../../assets/images/courses/icon_C++.svg";
import icon_express_node from "../../assets/images/courses/icon_express_nodejs.svg";
import styled from "styled-components";
import { StyledContainer } from "../../styles/layout.styles";

const MyCertificate = () => {
  const mockData1 = [
    {
      title: "C++",
      description: "Industrial Training Program & Project Internship",
      icon: icon_Cplus,
      bgColor: "#1A4674",
    },
    {
      title: "Learn Backend Web Development using node.js and express",
      description:
        "7 Days Free Industrial Training Bootcamp with Certification",
      icon: icon_express_node,
      bgColor: "#3E863D",
    },
  ];
  const mockData2 = [
    {
      title: "Data Structures & Algorithms",
      description: "Industrial Training Program & Project Internship",
      icon: icon_python,
      bgColor: "#E7B11F",
    },
    {
      title: "Full Stack Web Development",
      description: "Industrial Training Program & Project Internship",
      icon: mern_icon,
      bgColor: "#1E6DE8",
    },
    {
      title: "Intro to C++ and Data Structures and Algorithms",
      description:
        "7 Days Free Industrial Training Bootcamp with Certification",
      icon: icon_Cplus,
      bgColor: "#4B7EB7",
    },
  ];

  return (
    <>
      <StyledContainer>
        <StyledTabs>
          <Tabs
            defaultActiveKey="1"
            gutter={"80px"}
            centered={true}
            indicator={{ size: 0 }}
          >
            <Tabs.TabPane tab="Ongoing" key={"1"}>
              <h3 className="title">Course Certification</h3>
              <Row gutter={[15, 15]}>
                {mockData1.map((card, ind) => (
                  <Col key={ind} span={24} md={12} xxl={8}>
                    <CourseCompletionCard data={card} completed={false} />
                  </Col>
                ))}
              </Row>
            </Tabs.TabPane>

            <Tabs.TabPane tab="Completed" key={"2"}>
              <h2 className="title">Course Certification</h2>
              <Row gutter={[15, 15]}>
                {mockData2.map((card, ind) => (
                  <Col key={ind} span={24} md={12} xxl={8}>
                    <CourseCompletionCard data={card} completed={true} />
                  </Col>
                ))}
              </Row>
            </Tabs.TabPane>
          </Tabs>
        </StyledTabs>
      </StyledContainer>
    </>
  );
};

//customizing tab buttons
const StyledTabs = styled.section`
  .ant-tabs-nav-list {
    font-style: normal;
    font-weight: 700;
    line-height: 26.542px;
    letter-spacing: -0.326px;
    /* background-color: #f4f7fe; */
    padding: 4px;
    border-radius: 48px;
  }
  .ant-tabs-tab {
    margin: 0 !important;
    padding: 10px;
    border-radius: 48px;
    width: 138px;
    justify-content: center;
    transition: all 0.3s;
    color: #519aff;
  }
  .ant-tabs-tab-btn {
    font-family: "DM Sans";
    font-size: 16.308px;
  }
  .ant-tabs-tab-active {
    .ant-tabs-tab-btn {
      color: white !important;
    }
    background: linear-gradient(
      90deg,
      #0859de -4.46%,
      #519aff 104.46%
    ) !important;
  }

  .ant-tabs-top > .ant-tabs-nav::before {
    border: none;
  }

  .title {
    font-family: Inter;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: -0.32px;
    margin: 10px 0 20px 0;
    color: var(--Gray-900, #1d2026);
  }
`;

export default MyCertificate;
