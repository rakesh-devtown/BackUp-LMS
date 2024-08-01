import {
  ArrowRightOutlined,
  ArrowUpOutlined,
  CalendarOutlined,
  FileDoneOutlined,
  ProfileFilled,
  ProfileOutlined,
} from "@ant-design/icons";
import { Button, Progress } from "antd";
import React from "react";
import styled from "styled-components";

const assignmnetData = [
  { label: "T/A Name 1", time: "Monday, 12 Feb 2024" },
  { label: "T/A Name 2", time: "Monday, 11 Feb 2024" },
  { label: "T/A Name 3", time: "Monday, 28 Jan 2024" },
];

const TaskAssignmentCard = ({ handleTaskModal }) => {
  return (
    <StyledContainer>
      <Title>
        <i>
          <ProfileFilled />
        </i>
        <h4>Task and Assignments</h4>
      </Title>
      <Body>
        {assignmnetData.map((data, ind) => (
          <div className={`body-content ${assignmnetData.length - 1 !== ind ? "box-underline" : ""}`}>
            <div>
              <i>
                <ProfileOutlined style={{ fontSize: "20px" }} />
              </i>
              <div>
                <p className="label">T/A Name 1</p>
                <p className="time">Monday, 12 Feb 2024</p>
              </div>
            </div>
            <i>
              <ArrowUpOutlined rotate={45} style={{ color: "#0859DE", fontSize: "1.2rem" }} />
            </i>
          </div>
        ))}
      </Body>
      <CustomButton onClick={() => handleTaskModal()}>View All Tasks</CustomButton>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 270px;
  height: fit-content;
  border-radius: 8px;
  border: 0.5px solid #c4ccde;
  background: var(--Color-White-100, #fff);
  margin: 5px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 16px 12px;
  gap: 8px;
  flex: 1 0 0;
  color: #133c7e;
  font-family: "DM Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 8px 8px 0px 0px;
  border-bottom: 1px solid #c4ccde;
  background: var(--Color-White-100, #fff);
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* align-self: stretch; */
  .box-underline {
    border-bottom: 1px solid #e9eaf0;
    background: var(--Color-White-100, #fff);
  }
  .body-content {
    display: flex;
    gap: 16px;
    font-family: "DM Sans";
    font-style: normal;
    line-height: normal;
    flex-grow: 1;
    justify-content: space-between;
    padding: 12px 16px;
    & > div {
      display: flex;
      gap: 12px;
    }
    .label {
      color: #121212;
      font-size: 16px;
      font-weight: 500;
    }
    .time {
      color: #41475e;
      font-size: 12px;
      font-weight: 400;
    }
  }
  i {
    display: flex;
    align-items: center;
  }
`;

const CustomButton = styled.button`
  width: 100%;
  padding: 12px 0px;
  gap: 10px;
  border-radius: 0px 0px 8px 8px;
  background: #e22d4c;

  color: var(--Color-White-100, #fff);
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default TaskAssignmentCard;
