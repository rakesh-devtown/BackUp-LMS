import { CheckOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { Space } from "antd";
import React from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";

const ModuleCardHeader = ({ title, onGoing, topic1, topic2 }) => {
  const { width } = useWindowSize();
  return (
    <StyledDiv width={width}>
      <div className="box">
        <div className="box-top">
          <h5>{title}</h5>
          {onGoing ? (
            <p className="tag on-going">On Going</p>
          ) : (
            <p className="tag pending">Pending Lectures</p>
          )}
        </div>
        <div className="box-bottom">
          <p>{topic1}</p>
          <p>{topic2}</p>
        </div>
        <div></div>
      </div>
      <Icons>
        {onGoing && (
          <i className="check">
            <CheckOutlined style={{ color: "#008022" }} />
          </i>
        )}
        <i className="closed">
          <DownOutlined style={{ strokeWidth: "50px", stroke: "black" }} />
        </i>
        <i className="open" style={{ strokeWidth: "50px", stroke: "black" }}>
          <UpOutlined />
        </i>
      </Icons>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px 16px 16px;
  border-bottom: 0.75px solid #5578d1;
  .box {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .box-top {
    display: flex;
    row-gap: 8px;
    column-gap: 16px;
    flex-direction: ${(props) => (props.width >= 768 ? "row" : "column")};
  }
  h5 {
    font-family: "DM Sans";
    color: #474747;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .tag {
    padding: 4px 12px;
    font-family: "DM Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 34px;
    width: fit-content;
  }
  .on-going {
    color: #1b9d5e;
    background: #edf7ef;
  }
  .pending {
    color: #d7984d;
    background: #fff5e5;
  }
  .box-bottom {
    display: flex;
    flex-direction: column;
    gap: 8px;
    p {
      color: #575757;
      font-family: "DM Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 20px;
  i {
    height: 24px;
    width: 24px;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
  .check {
    background-color: #e2fae8;
  }
  .closed {
    background-color: #eff0f2;
    transition: all 0.3s;
  }
  .open {
    background-color: #eff0f2;
    display: none;
  }
`;
export default ModuleCardHeader;
