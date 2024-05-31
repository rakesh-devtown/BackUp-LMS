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
import { Helmet } from "react-helmet";
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
  const loadUser = useAuthStore((state) => state.loadUser);
  const loading = useLoadingStore((state) => state.loading);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const verifyAuthToken = async () => {
    try {
      setLoading(true);
      await loadUser();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    verifyAuthToken();
  }, []);
  return (
    <>
      
      <Helmet>
        <meta charSet="utf-8" />
        <title>DevTown </title>
        <link rel="canonical" href="https://www.learn.devtown.in/" />
        <meta name="description" content="Enhance your skills with Devtown's online industrial training and internship program. Explore AI and Full-Stack Web Dev for a brighter future. Join now" />
        
        </Helmet>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        {loading && (
          <LoaderOuterContainer>
            <Loader />
          </LoaderOuterContainer>
        )}
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </>
  );
};
export default App;
