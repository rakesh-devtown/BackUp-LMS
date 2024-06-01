import {
  CheckOutlined,
  FileTextOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import { Space } from "antd";
import React from "react";
import styled from "styled-components";

const TopicCard = () => {
  return (
    <StyledCard>
      <CardContent>
        <p className="topic">Topic 1 : Introduction to HTML </p>
        <Space size={24}>
          <Space size={8} className="sub-content">
            <i>
              <FolderOutlined />
            </i>
            <p>Videos 8/8</p>
          </Space>
          <Space size={8}>
            <i>
              <FileTextOutlined />
            </i>
            <p>45 Mins</p>
          </Space>
        </Space>
      </CardContent>
      <i>
        <CheckOutlined style={{ color: "#008022" }} />
      </i>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  padding: 12px 24px 12px 16px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-bottom: 0.4px solid #5578d181;
  &:hover {
    padding-right: 16px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
  .topic {
    color: #2b528e;
    font-family: "DM Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  i {
    color: #2b528e;
  }
`;

export default TopicCard;
