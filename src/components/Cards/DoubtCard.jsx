import {
  ArrowLeftOutlined,
  LeftOutlined,
  RightOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import raising_hand_png from "../../assets/images/person_raising_hand.png.png";
import useWindowSize from "../../hooks/useWindowSize";

const DoubtCard = () => {
  const { width } = useWindowSize();

  return (
    <Box>
      <p>Competitive Programming</p>
      <BoxBottom width={width}>
        <Div1 width={width}>
          <i>
            <LeftOutlined />
            <RightOutlined />
          </i>
          <Space size={16} direction="vertical">
            <Space size={4} direction="vertical">
              <h5 className="header">Topic</h5>
              <p>Module</p>
            </Space>
            <Space size={4} direction="vertical">
              <p>Raised on: 10Apr 24, 10:12 Pm</p>
              <p>Last activity 19/12/2019</p>
            </Space>
          </Space>
        </Div1>
        <Div2 width={width}>
          <i>
            <img src={raising_hand_png} alt="png" />
          </i>
          <Space size={4} direction="vertical">
            <p className="header">Activity Problem</p>
            <p className="sub-header">"What I did wrong"</p>
          </Space>
        </Div2>
        <Link>
          <Button>Go to Doubt</Button>
        </Link>
      </BoxBottom>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  /* height: 191px; */
  padding: 18px 0px;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: flex-start; */
  gap: 24px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #d2e0ff;
  background: var(--Color-White-100, #fff);
  & > p {
    padding: 6px 10px;
    border-radius: 0px 24px 24px 0px;
    background: #f2e9ff;
    width: fit-content;
  }
  .header {
    color: #3f4b5e;
    font-feature-settings: "clig" off, "liga" off;
    font-size: 18px;
    font-weight: 500;
  }
`;

const BoxBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  row-gap: 12px;
  padding: ${(props) => (props.width >= 768 ? "0 24px" : "0 12px")};
  flex-direction: ${(props) => (props.width >= 768 ? "row" : "column")};
`;

const Div1 = styled.div`
  display: flex;
  gap: 16px;
  width: ${(props) => (props.width < 768 ? "100%" : null)};
  P {
    color: #8e8e8e;
    font-family: "DM Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  i {
    padding: 15px 2px;
  }
`;

const Div2 = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  border-radius: 4px;
  background: #f4f8ff;
  font-family: "DM Sans";
  padding: 8px 24px;
  height: 100%;
  width: ${(props) => (props.width < 768 ? "100%" : null)};

  .sub-header {
    color: #717b8c;
    font-size: 14px;
    font-weight: 400;
  }
`;

export default DoubtCard;
