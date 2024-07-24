import { CalendarOutlined, FileOutlined, ProfileOutlined, StarOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { Button, Progress, Rate } from "antd";
import React from "react";
import styled from "styled-components";

const AttendenceSheduleCard = ({ handleScheduleModal }) => {
  const myRateStyle = {
    fontSize: "11px",
    borderRadius: "42px",
    background: "#FFF0DE",
    padding: "4px 8px",
    color: "#FBA63C",
  };
  return (
    <StyledContainer>
      <Title>
        <i>
          <CalendarOutlined />
        </i>
        <h4>Attendance / Schedule</h4>
      </Title>
      <Body>
        <div className="inner-body">
          <div>
            <i>
              <UserDeleteOutlined style={{ color: "red", fontSize: "20px" }} />
            </i>
            <div>
              <p className="label">Absence</p>
              <p className="percentage">25%</p>
            </div>
          </div>
          <div>
            <i>
              <FileOutlined style={{ color: "red", fontSize: "20px" }} />
            </i>
            <div>
              <p className="label">Tasks</p>
              <p className="percentage">70%</p>
            </div>
          </div>
          <div>
            <i>
              <StarOutlined style={{ color: "red", fontSize: "20px" }} />
            </i>
            <div>
              <p className="label">Absence</p>
              <Rate allowHalf disabled defaultValue={4} style={myRateStyle} />
            </div>
          </div>
        </div>
        <div>
          <Progress
            type="circle"
            size={100}
            percent={75}
            strokeColor="#05B260"
            format={(percent) => (
              <>
                <p className="progress-percent">{percent}%</p>
                <p className="progress-para">Your Presence</p>
              </>
            )}
          />
        </div>
      </Body>
      <CustomButton onClick={() => handleScheduleModal()}>View Schedule</CustomButton>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 270px;
  height: fit-content;
  border-radius: 8px;
  border: 0.5px solid #c4ccde;
  background: var(--Color-White-100, #fff);
  margin: 0 5px 10px;
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
  padding: 16px 8px;
  align-items: center;
  gap: 8px;
  /* align-self: stretch; */
  .inner-body {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-left: 8px;
    font-family: "DM Sans";
    font-style: normal;
    line-height: normal;
    i {
      display: flex;
      align-items: center;
    }
    & > div {
      display: flex;
      gap: 10px;
    }
    .label {
      color: #2e2e2e;
      font-size: 14px;
      font-weight: 400;
    }
    .percentage {
      color: #121212;
      font-size: 16px;
      font-weight: 700;
    }
  }
  .progress-percent {
    color: #33ac72;
    font-family: "DM Sans";
    font-size: 32px;
    font-weight: 700;
  }
  .progress-para {
    color: #121212;
    font-family: "DM Sans";
    font-size: 10px;
    font-weight: 400;
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

export default AttendenceSheduleCard;
