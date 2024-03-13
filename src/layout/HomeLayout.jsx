import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ClockCircleFilled,
  ClockCircleOutlined,
  HomeOutlined,
  LaptopOutlined,
  LeftCircleFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
  SecurityScanFilled,
  StarOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./homeLayout.css"
import { Button, Layout, Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer } from "antd/es/layout/layout";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideBarDashBoard from "../components/Cards/SideBarDashBoard";
import Header from "../components/LayoutComponents/Header";
import SideAdsCompoents from "../components/LayoutComponents/SideAdsCompoents";
import LayoutContent from "./LayoutContent";
import useWindowSize from "../hooks/useWindowSixe";
import useLayoutUiStore from "../store/layoutUI";

const items = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "DashBoard",
  },
  {
    key: "2",
    icon: <StarOutlined />,
    label: "LMS",
  },
  {
    key: "3",
    icon: <SecurityScanFilled />,
    label: "Roadmap",
  },
  {
    key: "4",
    icon: <NotificationOutlined />,
    label: "Video Guidance",
  },
  {
    key: "5",
    icon: <LaptopOutlined />,
    label: "My Certificate",
  },
  {
    key: "6",
    icon: <UserOutlined />,
    label: "My Resume",
  },
  {
    key: "7",
    icon: <UploadOutlined />,
    label: "Events",
  },
  {
    key: "8",
    icon: <UserOutlined />,
    label: "DevTown Alumni",
  },
];
function HomeLayout() {
  const isMobileSideBarOpen = useLayoutUiStore(
    (state) => state.isMobileSideBarOpen
  );
  const setMobileSideBarOpen = useLayoutUiStore(
    (state) => state.setMobileSideBarOpen
  );
  const { width } = useWindowSize();
  const [collapsed, setCollapsed] = React.useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  useEffect(() => {
    if (width > 900) {
      setMobileSideBarOpen(false);
    }
  }, [width])
  return (
    <Layout
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        background:  isMobileSideBarOpen ? "rgba(0, 0, 0, 0.5)" : ""
      }}
    >
      {width > 900 ? (
        <>
          <Button
            icon={collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
            style={{
              position: "absolute",
              top: 80,
              left: 25,
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex:10,
              width: collapsed ? 68 : 200,
            }}
            type="primary"
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          />

          <Sider
            collapsible
            collapsed={collapsed}
            theme="light"
            trigger={null}
            style={{
              background: colorBgContainer,
              height: "",
              position: "absolute",
              left: 20,
              top: 120,
              zIndex:10,

              borderRadius: "20px",
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{
                height: "100%",
                borderRadius: "20px",
              }}
              items={items}
            />
            {width > 900 && (
              <Menu
                mode="inline"
                style={{
                  height: "100%",
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
              </Menu>
            )}
          </Sider>
        </>
      ) : (
         (
          <div className={isMobileSideBarOpen ? "sidebar-open" : "sidebar"}>
            <Button
              icon={<ArrowLeftOutlined />}
              style={{
                position: "absolute",
                top: 40,
             
                padding: "20px 30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
                width: 200,
                borderRadius: "0 10px 10px 0",
              }}
              type="primary"
              onClick={() => {
                setMobileSideBarOpen(false);
              }}
            />

            <Sider
              theme="light"
              trigger={null}
              style={{
                background: colorBgContainer,
                height: "",
                position:  "absolute",
                zIndex: 1000,
                top: 90,  
                borderRadius: "0 10px 10px 0",
              }}
              width={200}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                style={{
                  height: "100%",
                  borderRadius: "20px",
                }}
                items={items}
              />
              {width > 900 && (
                <Menu
                  mode="inline"
                  style={{
                    height: "100%",
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
                </Menu>
              )}
            </Sider>
          </div>
        )
      )}
      <Layout
        style={{
          background:  isMobileSideBarOpen ? "initial" : ""
      
        }}
      >
        <Header />
      </Layout>
      <Content>
        {" "}
        <LayoutContent />{" "}
      </Content>
      {width > 900 && <SideAdsCompoents />}
    </Layout>
  );
}

export default HomeLayout;
