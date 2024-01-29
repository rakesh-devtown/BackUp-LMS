import React, { useEffect } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import { Breadcrumb, Layout, Menu, notification, theme } from "antd";
import { StyledLayout } from "./styles/app.styles";
import { FullScreenContent, StyledButton } from "./styles/shared.styles";
import { routes } from "./routes";
import useAuthStore from "./store/authStore";
import useLoadingStore from "./store/loadingStore";
import Loader from "./components/loader/Loader";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { LoaderOuterContainer } from "./styles/loader.styles";
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
  const loading = useLoadingStore((state) => state.loading);
  return (
    <>
      {loading && (
        <LoaderOuterContainer>
          <Loader />
        </LoaderOuterContainer>
      )}
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </>
  );
};
export default App;
