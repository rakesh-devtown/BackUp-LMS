import {
    ClockCircleOutlined,
    HomeOutlined,
    LaptopOutlined,
    LeftOutlined,
    NotificationOutlined,
    ProfileOutlined,
    RightOutlined,
    SecurityScanFilled,
    StarOutlined,
    UploadOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { LuLayers } from "react-icons/lu";
import { IoMdChatboxes } from "react-icons/io";
import { BiAward } from "react-icons/bi";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Layout, Menu, theme, } from "antd";
import SideBarDashBoard from "../components/Cards/SideBarDashBoard";
import HeaderBar from "../components/LayoutComponents/HeaderBar";
import SideAdsCompoents from "../components/LayoutComponents/SideAdsCompoents";
import useWindowSize from "../hooks/useWindowSize";
import useLayoutUiStore from "../store/layoutUI";
import { StyledHeader } from "../styles/layout.styles";
import MobileSider from "../components/MobileSider/MobileSider";

const { Sider, Content } = Layout;

export const menuItems = [
    {
        key: "courses",
        icon: <LuLayers />,
        label: "My Courses",
    },
    {
        key: "certificate",
        icon: <BiAward />,
        label: "My Certificate",
    },
    {
        key: "profile",
        icon: <ProfileOutlined />,
        label: "My Profile",
        // disabled: "true",
    },
    {
        key: "discussion",
        icon: <IoMdChatboxes />,
        label: "Discussion Forum",
        disabled: "true",
    },
]

// export const menuItems = [
//     {
//         key: "",
//         icon: <HomeOutlined />,
//         label: "DashBoard",
//         disabled: "true",
//     },
//     {
//         key: "",
//         icon: <StarOutlined />,
//         label: "LMS",
//     },
//     {
//         key: "3",
//         icon: <SecurityScanFilled />,
//         label: "Roadmap",
//         disabled: "true",

//     },
//     {
//         key: "4",
//         icon: <NotificationOutlined />,
//         label: "Video Guidance",
//         disabled: "true",

//     },
//     {
//         key: "mycertificate",
//         icon: <LaptopOutlined />,
//         label: "My Certificate",
//     },
//     {
//         key: "myresume",
//         icon: <UserOutlined />,
//         label: "My Resume",
//         // disabled: "true",

//     },
//     {
//         key: "7",
//         icon: <UploadOutlined />,
//         label: "Events",
//         disabled: "true",

//     },
//     {
//         key: "8",
//         icon: <UserOutlined />,
//         label: "DevTown Alumni",
//         disabled: "true",

//     },
// ];


function HomeLayout() {

    const location = useLocation();
    const navigate = useNavigate();

    const isMobileSideBarOpen = useLayoutUiStore(
        (state) => state.isMobileSideBarOpen
    );
    const setMobileSideBarOpen = useLayoutUiStore(
        (state) => state.setMobileSideBarOpen
    );
    const { width } = useWindowSize();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    useEffect(() => {
        if (width >= 992) {
            setMobileSideBarOpen(false);
        }
    }, [width]);

    //sidebar....
    const antdSidebarStyle = {
        background: colorBgContainer,
        zIndex: 5,
        overflow: 'auto',
        height: 'fit-content',
        maxHeight: '85vh',
        position: 'fixed',
        left: '20px',
        top: '136px',
        borderRadius: "8px",
        border: "0.25px solid #A1A9BA",
        // background: "white",
        boxShadow: '0px 0px 9px 0px rgba(0, 0, 0, 0.09)',
        scrollbarWidth: "none",
    }

    const antdMenuStyle = {
        borderRadius: "20px",
        margin: "16px 0"
    }

    const myBtnStyle = {
        backgroundColor: "var(--secondaryColor)",
        position: 'fixed',
    }

    const sideNavbarWidth = "200px"

    return (
        <Layout
            style={{
                width: "100%",
                background: "#F4F7FE",
            }}
        >
            <StyledHeader width={width} colorBgContainer={colorBgContainer}>
                <HeaderBar isMobileSideBarOpen={isMobileSideBarOpen} />
            </StyledHeader>
            <StyledLayout collapsed={collapsed} width={width} >
                {width >= 992 ? (
                    <>
                        <Sider
                            collapsible
                            collapsed={collapsed}
                            theme="light"
                            trigger={null}
                            style={antdSidebarStyle}
                            width={sideNavbarWidth}
                            className="lptpScreenSider"
                        >
                            <ButtonContainer>

                                <Button
                                    icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
                                    shape="circle"
                                    type="primary"
                                    style={myBtnStyle}
                                    onClick={() => {
                                        setCollapsed(!collapsed);
                                    }}
                                />
                            </ButtonContainer>
                            <Menu
                                mode="inline"
                                // defaultSelectedKeys={["courses"]}
                                style={antdMenuStyle}
                                selectable
                                onSelect={(item, key) => {
                                    console.log(item.key);
                                    navigate("/" + item.key);
                                }}
                                items={menuItems}
                            />

                            {/* <Menu
                                mode="inline"
                                style={{
                                    borderRadius: "20px",
                                }}
                            >
                                <Menu.Item
                                    style={{
                                        paddingInline: !collapsed && 0,
                                        height: "100%",
                                        borderRadius: "20px",
                                        paddingLeft: !collapsed && 0,
                                    }}
                                    key="1"
                                    icon={collapsed ? <ClockCircleOutlined /> : null}
                                >
                                    {collapsed ? null : <SideBarDashBoard />}
                                </Menu.Item>
                            </Menu> */}

                        </Sider>
                    </>
                ) : <MobileSider isMobileSideBarOpen={isMobileSideBarOpen} setMobileSideBarOpen={setMobileSideBarOpen} colorBgContainer={colorBgContainer} />
                }

                {
                    width >= 992 ?
                        <Content style={{ marginLeft: `calc(${collapsed ? "80px" : sideNavbarWidth} + 14px)`, paddingTop: "16px" }}>
                            <Outlet />
                        </Content> :
                        <Content style={{ paddingTop: "16px" }}>
                            <Outlet />
                        </Content>
                }
                {/* {(location.pathname === "/lms" && width >= 992) && <SideAdsCompoents />} */}
            </StyledLayout>
        </Layout>
    );
}



const StyledLayout = styled(Layout)`
padding: ${props => props.width >= 768 ? "18px 20px 15px 20px" : "18px 12px 15px 12px"};
background: #F4F7FE;

.ant-menu-item{
    font-size: 16px;
    margin: 12px 0;
    /* padding-left: ${props => props.collapsed ? null : "20px !important"}; */
} 
.ant-menu-item-selected{
    border-radius: 0;
    border-left: 2px solid #1E6DE8;
}
 .ant-menu-item:not(.ant-menu-item-disabled):hover{
    color: #1677ff !important;
 }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export default HomeLayout;
