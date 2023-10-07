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
        }}
      >
  
        {/* <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          /> */}

      </Header>
    <Layout >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Link to={"/"} style={{
            background: "transparent",
            color:'#fff',
            padding: '10px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center' 
          }}>
            <img src={Logo} alt="logo" />
         </Link>
         <div style={{
            background: "transparent",
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            fontSize: '16px',
          }}>
                  {collapsed ?<PlusOutlined onClick={() => setCollapsed(!collapsed)} style={{
        color: 'white',
      }}
/>: 
                  <CloseOutlined onClick={() => setCollapsed(!collapsed)} style={{
                    color: 'white',
                  }}
             /> }

         {/* <Button
          icon={collapsed ?<PlusOutlined /> : <CloseOutlined /> }
          onClick={() => setCollapsed(!collapsed)} /> */}
          </div>
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