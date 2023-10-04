/*
import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Cal from './components/Cal'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import { Breadcrumb, Layout, Menu, theme } from "antd";
import { StyledLayout } from "./styles/app.styles";
import { FullScreenContent, StyledButton } from "./styles/shared.styles";
import { routes } from "./routes";
const { Header, Content, Sider } = Layout;
//router
const router = createBrowserRouter(routes);

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
const App = () => {
  return (
  <RouterProvider router={router} />
  )
  // return (
  //   <StyledLayout>
  //     <Header
  //       style={{
  //         display: "flex",
  //         alignItems: "center",
  //         background: "#6322CC",
  //       }}
  //     >
  //       <div className="demo-logo" />
  //       <Menu
  //         style={{
  //           background: "transparent",
  //           color:'#fff'
  //         }}
  //         mode="horizontal"
  //         defaultSelectedKeys={["2"]}
  //         items={items1}
  //       />
  //     </Header>
  //     <Layout>
  //       <Sider
  //         width={200}
  //         style={{
  //           color:'#6322CC'
  //         }}
  //       >
  //         <Menu
  //           mode="inline"
  //           defaultSelectedKeys={["1"]}
  //           defaultOpenKeys={["sub1"]}
  //           style={{
  //             height: "100%",
  //             borderRight: 0,
  //             color:'#6322CC'
  //           }}
  //           items={items2}
  //         />
  //       </Sider>
  //       <Layout
  //         style={{
  //           padding: "0 24px 0px",
  //         }}
  //       >
  //         <FullScreenContent
  //           style={{
  //             padding: 24,
  //             margin: 0,
  //             minHeight: 280,
  //           }}
  //         >
            
  //          <Cal/>
  //         </FullScreenContent>
  //       </Layout>
  //     </Layout>
  //   </StyledLayout>
  // );
};
export default App;
*/

import React, { useState } from 'react';
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
import logout from './assets/images/Logout.svg';
import Logo from "./assets/images/devtown-vector.svg";

import Cal from './components/Cal'
import { StyledLayout } from "./styles/app.styles";
import { FullScreenContent, StyledButton } from "./styles/shared.styles";
import { Layout, Menu, Button, theme } from 'antd';
import { routeDefinitions } from './constants/routes'
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
         <Button 
          icon={collapsed ?<PlusOutlined /> : <CloseOutlined /> }
          onClick={() => setCollapsed(!collapsed)} />
          </div>
        <p style={{
            background: "transparent",
            color:'#fff',
            padding: '10px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center' 
          }}>Menu</p>
        <Menu
          theme="dark"
          mode="inline"
          // defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: (<Link to={routeDefinitions.PROFILE}>Profile</Link>),
            },
            {
              key: '2',
              icon: <CompassFilled />,
              label: (
                <a href="https://www.devtown.in/bytes" target="_blank" rel="noopener noreferrer">
                  Explore
                </a>
              ),
          
            },
            {
              key: '3',
              icon: <BookFilled />,
              label: (<Link to={routeDefinitions.PROGRAMS}>Programs</Link>),
            },
            {
              key: '4',
              icon: <CalendarFilled />,
              label: (<Link to={routeDefinitions.SCHEDULE}>My Schedule</Link>),
            },
            {
              key: '5',
              icon: <EditFilled />,
              label: (<Link to={routeDefinitions.PRACTICE}>Practice</Link>),
            },          
            {
              key: '6',
              icon: <MessageFilled />,
              label: (<Link to={routeDefinitions.MESSAGE}>Message</Link>),
            },
          ]}
        />
        <p style={{
            background: "transparent",
            color:'#fff',
            padding: '10px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
          }}>Actions</p>
        <Menu
        theme="dark"
        mode="inline"
        // defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <QuestionCircleFilled />,
            label: (<Link to="https://www.devtown.in/contact-us">Contact Us</Link>),
          },
          {
            key: '2',
            icon: (<img src={logout} alt="logout" />),
            label: 'Logout',
          },
        ]}
        />
      </Sider>
      <Layout>
        <FullScreenContent
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >          
           <Cal/>
          </FullScreenContent>
      </Layout>
    </Layout>
    </StyledLayout>
  );
};

export default App;