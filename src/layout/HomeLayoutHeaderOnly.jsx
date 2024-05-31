import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { Layout, theme, } from "antd";
import HeaderBar from "../components/LayoutComponents/HeaderBar";
import useWindowSize from "../hooks/useWindowSize";
import useLayoutUiStore from "../store/layoutUI";
import { StyledHeader } from "../styles/layout.styles";
import MobileSider from "../components/MobileSider/MobileSider";

const { Content } = Layout;


function HomeLayout() {

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


    return (
        <Layout
            style={{
                width: "100%",
                background: isMobileSideBarOpen ? "rgba(0, 0, 0, 0.5)" : "#F4F7FE",
                height: "100vh",
            }}
        >
            <StyledHeader colorBgContainer={"#DEEAFF"}>
                <HeaderBar isMobileSideBarOpen={isMobileSideBarOpen} />
            </StyledHeader>
            <StyledLayout >
                {width < 992 &&
                    <MobileSider isMobileSideBarOpen={isMobileSideBarOpen} setMobileSideBarOpen={setMobileSideBarOpen} colorBgContainer={colorBgContainer} />
                }
                <Content>
                    <Outlet />
                </Content>
            </StyledLayout>
        </Layout>
    );
}

const StyledLayout = styled(Layout)`
padding: 0;
 background: #F4F7FE;

`

export default HomeLayout;
