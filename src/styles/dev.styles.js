import { Button } from "antd";
import styled from "styled-components";

const DevAreaContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
 
  background-color: rgb(35, 35, 35);

`;

const DevAreaOutlet = styled.div`
  height: 100%;
  padding-top: 4px;

  width: ${props => props.isSidebarOpen ? "calc(100% - 250px)" : "83%"}; 
`;
const DevScreenOuterContainer = styled.div`
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
const DevScreenImage = styled.img`
  width: 50%;
  height: 50%;
`;

const DevScreenImageOuterContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DevIndexScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const DevSideBarContainer = styled.div``;
const DevSideBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const DevSideBarButton = styled.button`
  color: white;
  cursor: pointer;
  background-color: transparent;
`;

const DevSideBarSVG = styled.svg`
  height: 1.25rem;
  width: 1.25rem;
  opacity: 0.75;
`;

const DevSideBarExplorer = styled.div`
  color: white;
  font-weight: bold;
  margin: 3px;
`;

const DevSideBarPadding = styled.div`
  padding-left: 8px;
  padding-right: 8px;
`;

const DevSideBarButtonDownload = styled(Button)`
  color: white;
  background: rgb(79, 70, 229);
  border: none;
`;

const DevSideBarContent = styled.div`
  display: ${(props) => (props.isSidebarOpen ? "block" : "none")};
`;
export {
  DevScreenImage,
  DevIndexScreen,
  DevScreenImageOuterContainer,
  DevAreaContainer,
  DevAreaOutlet,
  DevScreenOuterContainer,
  DevSideBarContainer,
  DevSideBarHeader,
  DevSideBarButton,
  DevSideBarSVG,
  DevSideBarExplorer,
  DevSideBarPadding,
  DevSideBarButtonDownload,
  DevSideBarContent,

};
