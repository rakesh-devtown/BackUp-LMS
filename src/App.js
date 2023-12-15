import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import { Breadcrumb, Layout, Menu, theme } from "antd";
import { StyledLayout } from "./styles/app.styles";
import { FullScreenContent, StyledButton } from "./styles/shared.styles";
import { routes } from "./routes";
import useAuthStore from "./store/authStore";
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
  const store = useAuthStore();
  console.log(store);
  return (
    
  <RouterProvider router={router} />
  
  )
 };
export default App;