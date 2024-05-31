import React from "react";
import LayoutTopAd from "../components/LayoutComponents/LayoutTopAd";
import MainLayoutHero from "./MainLayoutHero";
import useWindowSize from "../hooks/useWindowSize";
import { theme, Layout } from "antd";


function LayoutContent() {
  const width = useWindowSize().width;
  const { Content, Sider } = Layout;
  const { token: { colorBgContainer } } = theme.useToken();

  return <Layout>
    <Content>

      {
        width > 900 && <LayoutTopAd />
      }
      <MainLayoutHero />
    </Content>
    <Sider collapsed={width <= 900} collapsedWidth={0} style={{ background: colorBgContainer }} width={200} >
      Sider Will Be here
    </Sider>

  </Layout>;
}

export default LayoutContent;
