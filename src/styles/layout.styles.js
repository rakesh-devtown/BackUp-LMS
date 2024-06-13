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
export const LayoutOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  padding: 0 16px;
  left: 50%;
  transform: translateX(-50%);
  top: 100px;
  width: 70%;
  z-index: 0;
  background-color: #f4f7fe;
  @media (max-width: 991px) {
    width: 95%;
  }
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

//header styled component

export const StyledHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #f4f7fe;
  padding: ${(props) => (props.width >= 768 ? "20px 24px" : "20px 12px")};
  /* margin-bottom: 16px; */
  height: unset;
  z-index: 10;
`;

export const StyledContainer = styled.section`
  padding: ${(props) => (props.width >= 768 ? "24px" : "16px")};
  font-family: "DM Sans";
  font-style: normal;
  line-height: normal;
  border-radius: 16px;
  border: 1px solid #d2e0ff;
  background-color: white;
  /* min-height: calc(100vh - 160px); */
  padding-bottom: 50px;
`;

export const FullContentLayout = styled(Content)`
  padding: ${(props) => (props.width >= 768 ? "16px 24px" : "16px 12px")};
  background-color: transparent;
  /* .ant-layout-sider-children {
    height: unset;
    padding: ${(props) => (props.width >= 992 ? "0 0 100px 0" : "0")};
  }

  .shaded-background {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 50;
    height: 100vh;
    width: 100%;
    background: rgb(0, 0, 0, 0.6);
  } */
`;

export const MainContentLayout = styled(Content)`
  border-radius: 16px;
  border: 1px solid #e9eaf0;
  background: var(--Color-White-100, #fff);
  padding: 20px;
`;
