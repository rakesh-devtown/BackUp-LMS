import { Button, Calendar, Space } from "antd";
import styled from "styled-components";
import folderIcon from "../../assets/images/icon/folderIcon.png";
import clock from "../../assets/images/icon/clock.png";
import assignmentIcon from "../../assets/images/icon/assignmentIcon.png";
import DayTag from "./DayTag";
import dayjs from "dayjs";

const ScheduleModalContent = () => {
  const dayTag = [
    {
      tag: "present",
      date: ["01-07-2024", "02-07-2024", "03-07-2024", "08-07-2024", "09-07-2024", "11-07-2024", "12-07-2024"],
    },
    {
      tag: "absent",
      date: ["04-07-2024", "05-07-2024", "10-07-2024"],
    },
    {
      tag: "upcoming",
      date: ["15-07-2024", "16-07-2024", "17-07-2024", "19-07-2024", "22-07-2024", "24-07-2024", "25-07-2024"],
    },
  ];
  function getColorForDate(date) {
    const formattedDate = dayjs(date).format("DD-MM-YYYY");
    for (const tag of dayTag) {
      if (tag.date.includes(formattedDate)) {
        switch (tag.tag) {
          case "present":
            return "present";
          case "absent":
            return "absent";
          case "upcoming":
            return "upcoming";
          default:
            return;
        }
      }
    }
  }

  return (
    <Container>
      <StyledCalendar
        fullscreen={false}
        // mode="month"
        dateFullCellRender={(current, today, info) => {
          // console.log(info);
          const tag = getColorForDate(current);

          return (
            <div className="ant-calendar-cell">
              <div className={`ant-calendar-inner-cell ${tag}`}>{current.format("DD")}</div>
            </div>
          );
        }}
      />
      <DayTag />
      <TopicDetails>
        <CardDiv className="topic-div">
          <i className="topic-icon icon">
            <img src={folderIcon} alt="icon" />
          </i>
          <Space size={2} direction="vertical">
            <p className="title">Topic</p>
            <p className="para">What is CSS FlexBox?</p>
          </Space>
        </CardDiv>
        <CardDiv className="duration-div">
          <i className="duration-icon icon">
            <img src={clock} alt="icon" />
          </i>
          <Space size={2} direction="vertical">
            <p className="title">Duration</p>
            <p className="para">90 min</p>
          </Space>
        </CardDiv>
        <CardDiv className="assignment-div">
          <i className="assignment-icon icon">
            <img src={assignmentIcon} alt="icon" />
          </i>
          <Space size={2} direction="vertical">
            <p className="title">Assignment / Quiz</p>
            <p className="para">2 Assignment / 1 Quiz</p>
          </Space>
        </CardDiv>
      </TopicDetails>
      <ButtonsDiv>
        <Button type="primary" size="large" style={{ width: "50%" }}>
          Watch Video
        </Button>
        <Button type="primary" size="large" style={{ width: "50%" }}>
          Download Resources
        </Button>
      </ButtonsDiv>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledCalendar = styled(Calendar)`
  padding: 0 10px;
  .ant-calendar-cell {
    display: flex;
    justify-content: center;
    .ant-calendar-inner-cell {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 36px;
      width: 36px;
      border-radius: 50%;
      &:hover {
        background-color: #8080804f;
      }
    }
    .present {
      color: #008022;
      &:hover {
        background-color: #0080224d;
      }
    }
    .absent {
      color: #de0823;
      &:hover {
        background-color: #dc55675a;
      }
    }
    .upcoming {
      color: #0d3371;
      &:hover {
        background-color: #5b8bd952;
      }
    }
  }
`;

const TopicDetails = styled.div``;

const CardDiv = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px 16px;
  align-items: center;
  border-radius: 0px 12px 12px 0px;
  background: var(--Color-White-100, #fff);
  .title {
    color: #1e1e1e;
    font-family: "DM Sans";
    font-size: 18px;
    font-weight: 500;
  }
  .para {
    color: #353535;
    font-family: "DM Sans";
    font-size: 14px;
    font-weight: 400;
  }
  .icon {
    border-radius: 40px;
    display: grid;
    place-items: center;
    height: 40px;
    width: 40px;
  }
  &.topic-div {
    border-left: 3px solid #f29212;
  }
  &.duration-div {
    border-left: 3px solid #46bd84;
  }
  &.assignment-div {
    border-left: 3px solid #bd46a3;
  }
  .topic-icon {
    background: #fff5e8;
  }
  .duration-icon {
    background: #d8ffec;
  }
  .assignment-icon {
    background: #d8ffec;
  }
`;

const ButtonsDiv = styled.div`
  display: flex;
  padding: 12px;
  align-items: flex-start;
  gap: 6px;
`;
export default ScheduleModalContent;
