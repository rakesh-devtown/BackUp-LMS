import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
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
  PlusOutlined
} from '@ant-design/icons';
import logout from '../assets/images/Logout.svg';
import Logo from "../assets/images/devtown-vector.svg";
import { StyledLayout } from "../styles/app.styles";
import { FullScreenContent, StyledButton } from "../styles/shared.styles";
import { Layout, Menu, Button, theme } from 'antd';
import { routeDefinitions } from '../constants/routes'
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar/Searchbar';

const { Header, Sider, Content } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: <Link to={routeDefinitions.Me}>Profile</Link>,
    },
    {
      key: '2',
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
      key: '3',
      icon: <BookFilled />,
      label: <Link to={routeDefinitions.PROGRAMS}>Programs</Link>,
    },
    {
      key: '4',
      icon: <CalendarFilled />,
      label: <Link to={routeDefinitions.Schedule}>My Schedule</Link>,
    },
    {
      key: '5',
      icon: <EditFilled />,
      label: <Link to={routeDefinitions.Practice}>Practice</Link>,
    },
    {
      key: '6',
      icon: <MessageFilled />,
      label: <Link to={routeDefinitions.MESSAGE}>Message</Link>,
    },
  ];


  return (
    <StyledLayout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "#6322CC",
          padding:"0px"
        }}
      >
        <Link to={"/"} style={{
            background: "transparent",
            color:'#fff',
            display:'flex',
            alignItems:'flex-start',
            justifyContent:'center' 
          }}>
            <img src={Logo} alt="logo" />
         </Link>
         <SearchBar/>
      </Header>
    <Layout >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical"  />
        
        <p style={{
            background: "transparent",
            color:'#fff',
            padding: '10px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center' 
          }}>Menu</p>

          <Menu theme="dark" mode="inline">
            {menuItems.map((item) => (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>

        <p style={{
            background: "transparent",
            color:'#fff',
            padding: '10px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
          }}>Actions</p>

         <Menu theme="dark" mode="inline">
            {/* ... */}
            <Menu.Item key="1" icon={<QuestionCircleFilled />}>
              <a href="https://www.devtown.in/contact-us" target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </Menu.Item>
            <Menu.Item key="2" icon={<img src={logout} alt="logout" />}>
              Logout
            </Menu.Item>
          </Menu>
      </Sider>
      <Layout>
        <FullScreenContent
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >          
          <Outlet/>
          </FullScreenContent>
      </Layout>
    </Layout>
    </StyledLayout>
  );
};

export default Sidebar;