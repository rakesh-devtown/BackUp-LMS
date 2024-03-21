import React from "react";
import styled from "styled-components";
import MainLogo from "../../assets/images/Big Logo.jpg";
import Search from "antd/es/input/Search";
import {
  BellOutlined,
  LockFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import ProfrilePhoto from "../../assets/images/Component 1041386158.png";
import useWindowSize from "../../hooks/useWindowSixe";
import useLayoutUiStore from "../../store/layoutUI";
const StyledMotionDiv = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  height: 4.5rem;
  width: 97%;

  border: 1px solid white;
  border-opacity: 40%;
  background-color: white;
  background-opacity: 80%;
  backdrop-filter: blur(0.5rem);
  transform: translateX(-50%);

  max-width: 685px;
  top: 1.2rem;
  height: 3.25rem;

  border-radius: 30px;
`;

const StyledNav = styled.nav`
  display: flex;
  position: fixed;
  left: 50%;

  height: 12px;
  transform: translateX(-50%);

  max-width: 685px;
  width: 97%;
  justify-content: space-between;
  align-items: center;

  top: 2.1rem;
  height: 1.7rem;

  padding: 0;
`;

const StyledUl = styled.ul`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-around;
  gap: 1px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #808080;
  padding: 0px 20px;
  gap: 5px;
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

const HeaderText = styled.div`
  font-family: DM Sans;
  font-size: 16.31px;
  font-weight: 700;
  line-height: 26.54px;
  letter-spacing: -0.02em;
  text-align: center;
  background: -webkit-linear-gradient(90deg, #0a5be0 0%, #4e9eff 104.46%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LockIcon = styled(LockFilled)`
  font-family: DM Sans;
  font-size: 16.31px;
  font-weight: 700;
  line-height: 26.54px;
  letter-spacing: -0.02em;
  text-align: center;
  background: -webkit-linear-gradient(90deg, #0a5be0 0%, #4e9eff 104.46%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function LmsHeader() {
  const { width } = useWindowSize();
  const isMobileSideBarOpen = useLayoutUiStore(
    (state) => state.isMobileSideBarOpen
  );
  const setMobileSideBarOpen = useLayoutUiStore(
    (state) => state.setMobileSideBarOpen
  );
  return (
    <div
      style={{
        position: "relative",
        zIndex: isMobileSideBarOpen ? -10 : "99",
        display: width < 900 ? "none" : "block",
      }}
    >
      <StyledMotionDiv></StyledMotionDiv>
      <StyledNav>
        <StyledUl>
          <HeaderText>
            Live <LockIcon />
          </HeaderText>
          <HeaderText>
            Self Placed <LockFilled />
          </HeaderText>
          <HeaderText>
            Capsule <LockFilled />
          </HeaderText>
          <HeaderText>
            Free Trial <LockFilled />
          </HeaderText>
        </StyledUl>
      </StyledNav>
    </div>
  );
}

export default LmsHeader;
