import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { Layout, theme } from "antd";
import HeaderBar from "../components/LayoutComponents/HeaderBar";
import useWindowSize from "../hooks/useWindowSize";
import useLayoutUiStore from "../store/layoutUI";
import { StyledHeader } from "../styles/layout.styles";
import MobileSider from "../components/MobileSider/MobileSider";
import useAuthStore from "../store/authStore";

const { Content } = Layout;

function HomeLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isGoogleAuthenticated = useAuthStore(
    (state) => state.isGoogleAuthenticated
  );
  const isMobileSideBarOpen = useLayoutUiStore(
    (state) => state.isMobileSideBarOpen
  );
  const setMobileSideBarOpen = useLayoutUiStore(
    (state) => state.setMobileSideBarOpen
  );
  const { width } = useWindowSize();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    if (width >= 992) {
      setMobileSideBarOpen(false);
    }
  }, [width]);

  if (!isAuthenticated && !isGoogleAuthenticated) {
    return (
      <Navigate
        replace
        to={{
          pathname: "/auth",
        }}
      />
    );
  } else {
    return (
      <Layout
        style={{
          width: "100%",
          background: isMobileSideBarOpen ? "rgba(0, 0, 0, 0.5)" : "#F4F7FE",
          height: "100vh",
          overflowY: "auto",
          scrollbarWidth: "none",
        }}
      >
        <StyledHeader width={width}>
          <HeaderBar isMobileSideBarOpen={isMobileSideBarOpen} />
        </StyledHeader>
        <StyledLayout>
          {width < 992 && (
            <MobileSider
              isMobileSideBarOpen={isMobileSideBarOpen}
              setMobileSideBarOpen={setMobileSideBarOpen}
              colorBgContainer={colorBgContainer}
            />
          )}
          <Content>
            <Outlet />
          </Content>
        </StyledLayout>
      </Layout>
    );
  }
}

const StyledLayout = styled(Layout)`
  padding: 0;
  background: #f4f7fe;
`;

export default HomeLayout;
