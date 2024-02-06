import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const { Sider } = Layout;
const LayoutHeader = styled(Header)`
  display: flex;
  align-items: center;
  background: #6322cc;
  padding-left: ${(props) =>
    !props.collapsed ? "60px" : props.width < 700 ? "30px" : "0px"};
  transition: all 0.2s ease;
`;

const LayoutLogoLink = styled(Link)`
  background: transparent;
  color: #fff;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const LayoutHamburger = styled.div`
  background: transparent;
  color: #fff;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-right: 45px;
  scale: 1.65;
  font-weight: 900;
  cursor: pointer;
`;

const LayoutContainer = styled(Layout)`
  position: relative;
`;
const LayoutSmallScreenSider = styled(Sider)`
  position: absolute;
  height: 100vh;
  z-index: 100;
`;

const LayoutMenu = styled.p`
  background: transparent;
  color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LayoutActions = styled.p`
  background: transparent;
  color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LayoutFullScreenContent = styled(Content)`
display: flex;
flex-direction: column;
margin: 0;
min-height: 280px;
padding: 20px;
width: 100%;
overflow: auto;

  ${(props) =>
    (props.location.pathname === "/message" ||
      (props.width < 700 && props.location.pathname === "/me")) &&
    css`
      padding: 0px;
    `}
`;

export {
  LayoutHeader,
  LayoutLogoLink,
  LayoutHamburger,
  LayoutContainer,
  LayoutSmallScreenSider,
  LayoutMenu,
  LayoutActions,
  LayoutFullScreenContent,
};
