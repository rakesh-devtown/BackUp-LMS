import React from "react";
import { BookOutlined, QuestionCircleOutlined, WechatOutlined } from "@ant-design/icons";
import styled from "styled-components";

const RightSiderMenu = () => {
  return (
    <MenuBar>
      <i>
        <BookOutlined style={{ fontSize: "20px" }} />
      </i>
      <i>
        <QuestionCircleOutlined style={{ fontSize: "20px" }} />
      </i>
      <i>
        <WechatOutlined style={{ fontSize: "20px" }} />
      </i>
    </MenuBar>
  );
};

const MenuBar = styled.div`
  display: flex;
  height: fit-content;
  width: 60px;
  padding: 18px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #d2e0ff;
  background: var(--Color-White-100, #fff);
  i {
    color: #9e9e9e;
    &:hover {
      color: var(--secondaryColor);
    }
  }
`;
export default RightSiderMenu;
