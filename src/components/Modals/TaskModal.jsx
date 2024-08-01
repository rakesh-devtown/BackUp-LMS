import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const TaskModal = () => {
  return (
    <Container>
      <div className="inner-container">
        <div className="text-box">
          <div className="title">Push on GitHub</div>
          <div className="time">Monday, 12 Feb 2024</div>
        </div>
        <i>
          <ArrowRightOutlined rotate={-45} style={{ color: "#0859DE", fontSize: "20px" }} />
        </i>
      </div>
      <div className="inner-container">
        <div className="text-box">
          <div className="title">Push on GitHub</div>
          <div className="time">Monday, 12 Feb 2024</div>
        </div>
        <i>
          <ArrowRightOutlined rotate={-45} style={{ color: "#0859DE", fontSize: "20px" }} />
        </i>
      </div>
      <div className="inner-container">
        <div className="text-box">
          <div className="title">Push on GitHub</div>
          <div className="time">Monday, 12 Feb 2024</div>
        </div>
        <i>
          <ArrowRightOutlined rotate={-45} style={{ color: "#0859DE", fontSize: "20px" }} />
        </i>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .inner-container {
    display: flex;
    padding: 12px 16px;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .title {
    color: #121212;
    font-family: "DM Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px; /* 116.667% */
    letter-spacing: 0.5px;
  }
  .time {
    color: #41475e;
    font-family: "DM Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .text-box {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    row-gap: 6px;
  }
`;
export default TaskModal;
