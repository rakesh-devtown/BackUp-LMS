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

//for calender 
const events = [
  {
    id: 1,
    date: '2023-10-04',
    "day":"Day-70",
    "topic": " Project setup",
    "description": "Day-70 Project setup",
    "instrutor":"Kartik Gupta",

    button: (
      <button onClick={() => alert('Button clicked for Event {id}')}>
        Click Me
      </button>
    ),

  },
  {
    id: 2,
    date: '2023-10-05',
    "topic": "Day-70 Project setup",
    "description": "Day-70 Project setup",
    "instrutor":"Kartik Gupta",
  },
  {
    id: 3,
    date: '2023-10-09',
    "topic": "Day-70 Project setup",
    "description": "Day-70 Project setup",
    "instrutor":"Kartik Gupta"
  },
  {
    id: 3,
    date: '2023-10-12',
    time : '6:00 pm',
    "topic": "Day-70 Project setup",
    "description": "Day-70 Project setup",
    "instructor": "Kartik Gupta",
  },
  // Add more events as needed
];
const App = () => {
 /* return (
  <RouterProvider router={router} />
  )*/
   return (
    <StyledLayout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "#6322CC",
        }}
      >
        <div className="demo-logo" />
        <Menu
          style={{
            background: "transparent",
            color:'#fff'
          }}
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            color:'#6322CC'
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
              color:'#6322CC'
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 0px",
          }}
        >
          <FullScreenContent
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            
           <Cal events={events} />
          </FullScreenContent>
        </Layout>
      </Layout>
    </StyledLayout>
  ); 
};
export default App;
