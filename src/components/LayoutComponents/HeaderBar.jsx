import { Popover } from "antd";
import styled from "styled-components";
import { BellOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import ProfilePhoto from "../../assets/images/profilePic.jpg";
import MainLogo from "../../assets/images/Big Logo.jpg";
import useWindowSize from "../../hooks/useWindowSize";
import useLayoutUiStore from "../../store/layoutUI";
import ProfilePopover from "../ProfilePopover/ProfilePopover";
import useAuthStore from "../../store/authStore";


function HeaderBar() {
  const { width } = useWindowSize();
  const user = useAuthStore((state) => state.user);
  const isMobileSideBarOpen = useLayoutUiStore((state) => state.isMobileSideBarOpen);
  const setMobileSideBarOpen = useLayoutUiStore((state) => state.setMobileSideBarOpen);
  const navigate = useNavigate()

  //css styling for antd components
  const darkStyle = {
    color: isMobileSideBarOpen ? "#3f3d3d" : "#808080",
  }
  const bellStyled = {
    color: isMobileSideBarOpen ? "#3f3d3d" : "#808080",
    margin: "0 10px",
  }
  const myPopoverlayStyle = {
    width: width >= 576 ? "454px" : null,
  }

  return (

    // < StyledNav >
    <StyledUl isMobileSideBarOpen={isMobileSideBarOpen}>
      <li
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "#808080",
          transition: "all 0.3s ease-in-out",

        }}
      >
        {
          //showing logo for lptp view and hamburger menu icon for mobile view
          width >= 992 ? (
            <img height={17} width={81} src={MainLogo} alt="MainLogo" onClick={() => navigate("/")} />

          ) : isMobileSideBarOpen ? (
            <MenuFoldOutlined style={darkStyle} onClick={() => {
              setMobileSideBarOpen(!isMobileSideBarOpen);
            }} />
          ) : (
            <MenuUnfoldOutlined onClick={() => {
              setMobileSideBarOpen(!isMobileSideBarOpen);
            }} />
          )
        }

      </li>
      <StyledSearchBox>
        {width >= 992 && (
          <Div4>
            <SearchOutlined />
            <SearchInput placeholder="Search" />
          </Div4>
        )}
        <BellOutlined style={bellStyled} />

        {/* popover on hovering profile icon */}
        <Popover content={<ProfilePopover />} placement="bottomLeft" overlayStyle={myPopoverlayStyle} mouseLeaveDelay={0.3} >
          <img src={user?.profileImage || ProfilePhoto} alt="" width={37} height={37} />
        </Popover>

      </StyledSearchBox>
    </StyledUl>
    // </StyledNav >
  );
}

export default HeaderBar;


const StyledUl = styled.ul`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 500;
  color: #808080;
  padding: 10px 20px;
  gap: 5px;
  border-radius: 30px;
  background: #FFF;
  box-shadow: 0px 0px 40px 4px rgba(112, 144, 176, 0.42);
  cursor: pointer;
`;
const Div4 = styled.div`
  border-radius: 60px;
  background-color: #f4f7fe;
  display: flex;
  gap: 8px;
  padding: 8px 80px 8px 16px;
  padding-right: 20px;
  white-space: initial;
`;
const SearchInput = styled.input`
  font-family: DM Sans, sans-serif;
  justify-content: center;
  padding: 5px 0px;
  border: none;
  white-space: initial;
  outline: none;
  background-color: inherit;
`;

const StyledSearchBox = styled.div`
  display: flex;
  /* gap: 10px; */
  align-items: center;
  position: relative;
`