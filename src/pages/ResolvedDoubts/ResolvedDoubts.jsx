import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Button, FloatButton, Layout, Radio } from "antd";
import {
  ArrowLeftOutlined,
  CheckOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import useWindowSize from "../../hooks/useWindowSize";
import RightSiderMenu from "../../components/RightSiderMenu/RightSiderMenu";
import { Link } from "react-router-dom";
import { useState } from "react";
import DoubtCard from "../../components/Cards/DoubtCard";

const ResolvedDoubts = () => {
  const [resolved, setResolved] = useState(false);
  const [radioBtn, setRadioBtn] = useState(1);
  const { width } = useWindowSize();
  const { Content, Sider } = Layout;

  const mySiderStyle = {
    background: "transparent",
    zIndex: width < 992 ? 123456 : null,
    overflow: "auto",
    height: width < 992 ? "100vh" : "85vh",
    position: "fixed",
    right: width < 992 ? 0 : "20px",
    top: width < 992 ? 0 : "136px",
    scrollbarWidth: "none",
  };

  const rightSidebarWidth = width >= 992 ? "60px" : "0";

  console.log("resolved :", resolved, "and radio button selected :", radioBtn);

  return (
    <Layout>
      <Helmet>
        <title>Resolved Doubts</title>
        <meta name="settings" content="settings" />
        <link rel="canonical" href="https://www.learn.devtown.in/setting" />
      </Helmet>
      <Content style={{ background: "#F4F7FE" }}>
        <MainContainer width={width} rightSidebarWidth={rightSidebarWidth}>
          {width < 992 && (
            <FloatButton.Group
              trigger="click"
              type="primary"
              style={{
                right: 50,
                bottom: 150,
              }}
              icon={<MenuUnfoldOutlined />}
            >
              <RightSiderMenu />
            </FloatButton.Group>
          )}
          <StyledBody width={width}>
            <div>
              <Link>
                <Button
                  type="link"
                  size={width >= 768 ? "large" : "small"}
                  icon={<ArrowLeftOutlined />}
                  style={{ paddingLeft: 0, marginBottom: "16px" }}
                >
                  {width >= 768 ? "Back to Course Dashboard" : "Back"}
                </Button>
              </Link>
              <h4>Doubts</h4>
              <p>Keep track of all your raised doubts here</p>
            </div>
            <MyTabBtns width={width}>
              <div
                className={resolved !== true && "selected"}
                onClick={() => setResolved(false)}
              >
                <CheckOutlined className="check" />
                <p>Unresolved</p>
              </div>
              <div
                className={resolved === true && "selected"}
                onClick={() => setResolved(true)}
              >
                <CheckOutlined className="check" />
                <p>Resolved Doubts</p>
              </div>
            </MyTabBtns>

            <RadioBtn
              onChange={(e) => setRadioBtn(e.target.value)}
              value={radioBtn}
            >
              <Radio value={1}>View all</Radio>
              <Radio value={2}>Full Stack Web Development Course</Radio>
            </RadioBtn>

            <Doubts width={width}>
              {resolved && <h5 className="header">Resolved Doubts</h5>}
              {!resolved && <h5 className="header">Unresolved Doubts</h5>}
              <p className="sub-header">25 Doubts Solved</p>
              <DoubtList>
                <DoubtCard />
                <DoubtCard />
              </DoubtList>
            </Doubts>
          </StyledBody>
        </MainContainer>
      </Content>

      {/* right sidebar to show modules */}
      {width >= 992 && (
        <Sider
          collapsedWidth="0"
          width={rightSidebarWidth}
          style={mySiderStyle}
        >
          <RightSiderMenu />
        </Sider>
      )}
    </Layout>
  );
};

const MainContainer = styled.section`
  /* adjusting middle bar size according to sidebar */
  margin-right: ${(props) =>
    props.width < 992 ? null : `calc(${props.rightSidebarWidth} + 20px)`};
  padding: ${(props) => (props.width >= 768 ? "24px" : "12px")};
  border-radius: 25px;
  border: 1px solid #e9eaf0;
  background: white;
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.width >= 768 ? "24px" : "16px")};
  h4 {
    color: #1d2026;
    font-family: "DM Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const MyTabBtns = styled.div`
  display: flex;
  border-radius: 40px;
  border: 0.5px solid #5578d1;
  color: #0859de;
  overflow: hidden;
  font-family: "DM Sans";
  font-size: 16px;
  font-weight: 500;
  width: ${(props) => (props.width >= 768 ? "400px" : null)};
  div {
    display: flex;
    gap: 10px;
    width: 50%;
    padding: 8px 10px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .check {
      display: none;
      color: white;
    }
  }
  .selected {
    color: white;
    background-color: var(--secondaryColor);
    .check {
      display: block;
    }
  }
`;

const RadioBtn = styled(Radio.Group)`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background: #e6ebf3;
  width: 100%;
  padding: 16px;
  font-family: "DM Sans";
  font-feature-settings: "clig" off, "liga" off;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  .ant-radio-wrapper {
    font-size: 18px;
  }
  .ant-radio-wrapper-checked {
    color: #1677ff;
  }
  label:first-child {
    span {
      text-wrap: nowrap;
    }
  }
`;

const Doubts = styled.div`
  padding: ${(props) => (props.width >= 768 ? "16px" : "12px")};
  font-family: "DM Sans";
  .header {
    color: #1d2026;
    font-size: 20px;
    font-weight: 500;
  }
  .sub-header {
    color: #474747;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: ${(props) => (props.width >= 768 ? "24px" : "16px")};
  }
`;
const DoubtList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default ResolvedDoubts;
