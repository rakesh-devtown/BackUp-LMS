import React, { useEffect, useState } from "react";
import { Outlet ,useLocation,useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CalendarFilled,
  UserOutlined,
  MessageFilled,
  EditFilled,
  BookFilled,
  CompassFilled,
  QuestionCircleFilled,
  CloseOutlined,
  PlusOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import logout from "../assets/images/Logout.svg";
import Logo from "../assets/images/devtown-vector.svg";
import { StyledLayout } from "../styles/app.styles";
import { FullScreenContent, StyledButton } from "../styles/shared.styles";
import { Layout, Menu, Button, theme, notification } from "antd";
import { routeDefinitions } from "../constants/routes";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar/Searchbar";
import { useStore } from "zustand";
import authStore from "../store/authStore"
import { setHeader } from "../utils/header";
import useAuthStore from "../store/authStore";
import useLoadingStore from "../store/loadingStore";
import confirm from "antd/es/modal/confirm";
const { Header, Sider, Content } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
const navigate = useNavigate();
const logoutUser = useStore(authStore).logout;

  const handleLogout = () => {
    logoutUser();
    navigate('/auth');
  };
  const menuItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: <Link to={routeDefinitions.Me}>Profile</Link>,
    },
    {
      key: "2",
      icon: <CompassFilled />,
      label: (
        <a
          href="https://www.devtown.in/bytes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore
        </a>
      ),
    },
    {
      key: "3",
      icon: <BookFilled />,
      label: <Link to={routeDefinitions.PROGRAMS}>Programs</Link>,
    },
    {
      key: "4",
      icon: <CalendarFilled />,
      label: <Link to={routeDefinitions.Schedule}>My Schedule</Link>,
    },
    {
      key: "5",
      icon: <EditFilled />,
      label: <Link to={routeDefinitions.Practice}>Practice</Link>,
    },
    {
      key: "6",
      icon: <MessageFilled />,
      label: <Link to={routeDefinitions.MESSAGE}>Message</Link>,
    },
  ];
  
  const loadUser = useAuthStore((state) => state.loadUser);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation() 
  const setLoading = useLoadingStore(state => state.setLoading);
  const showConfirm = () => {
    confirm({
      title: 'Do you Want to logout?',
      icon: <ExclamationCircleFilled />,
      
      onOk() {
        handleLogout()
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  const verifyAuthToken = async() =>  {
    setLoading(true);
    await  loadUser(); 
    setLoading(false);
    if(!isAuthenticated){
      navigate('/auth');
    }
  }

  
  useEffect(() =>  {
    verifyAuthToken();
  } , [ ])
  return (
    <StyledLayout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "#6322CC",
          padding: "0px",
        }}
      >
        <Link
          to={"/programs"}
          style={{
            background: "transparent",
            color: "#fff",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <img src={Logo} alt="logo" />
        </Link>
        <SearchBar />
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />

          <p
            style={{
              background: "transparent",
              color: "#fff",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Menu
          </p>

          <Menu theme="dark" mode="inline">
            {menuItems.map((item) => (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>

          <p
            style={{
              background: "transparent",
              color: "#fff",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Actions
          </p>

          <Menu theme="dark" mode="inline">
            {/* ... */}
            <Menu.Item key="1" icon={<QuestionCircleFilled />}>
              <a
                href="https://www.devtown.in/contact-us"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<img src={logout} alt="logout" />}
              onClick={showConfirm  }
            >
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <FullScreenContent
            style={{
              padding: location.pathname==="/message"  ? "0px" : "24px",
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </FullScreenContent>
        </Layout>
      </Layout>
    </StyledLayout>
  );
};

export default Sidebar;
