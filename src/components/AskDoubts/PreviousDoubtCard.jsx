import { CheckCircleOutlined, CommentOutlined } from "@ant-design/icons";
import { Space } from "antd";
import React from "react";
import { GoDotFill } from "react-icons/go";
import styled from "styled-components";
import {
  DotStyle,
  StyledPreviousDoubtCard,
} from "../../styles/askDoubtModal.styles";
import useWindowSize from "../../hooks/useWindowSize";

const PreviousDoubtCard = () => {
  const { width } = useWindowSize();
  return (
    <StyledPreviousDoubtCard width={width}>
      <Space direction="vertical" className="title" size={0}>
        <p>activity problem</p>
        <Space size={10} className="time">
          <p>Apr 10, 2024</p>
          <DotStyle>
            <GoDotFill />
          </DotStyle>
          <p>10:12pm</p>
        </Space>
      </Space>
      <Space size={48} className="resolved-box">
        <Space size={10}>
          <p>Resolved</p>
          <i>
            <CheckCircleOutlined />
          </i>
        </Space>
        <i className="last-child">
          <CommentOutlined />
        </i>
      </Space>
    </StyledPreviousDoubtCard>
  );
};

export default PreviousDoubtCard;
