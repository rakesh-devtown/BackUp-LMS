import { Tabs } from "antd";
import styled from "styled-components";
import HelpWithCodeTab from "./HelpWithCodeTab";
import QuestionRelatedTab from "./QuestionRelatedTab";
import PlatformRelatedTab from "./PlatformRelatedTab";
import OtherTab from "./OtherTab";
import { EditOutlined } from "@ant-design/icons";
import CustomTabBar from "./CustomTabBar";
import useWindowSize from "../../hooks/useWindowSize";

const items = [
  {
    key: "1",
    label: "Help with code",
    children: <HelpWithCodeTab />,
  },
  {
    key: "2",
    label: "Questions/ concept Related",
    children: <QuestionRelatedTab />,
  },
  {
    key: "3",
    label: "Platform Related",
    children: <PlatformRelatedTab />,
  },
  {
    key: "4",
    label: "Others",
    children: <OtherTab />,
  },
];

const AskDoubtTab = () => {
  const { width } = useWindowSize();
  const handleSubmit = (value) => {
    console.log(value);
  };

  const myTabBarStyle = {
    background: "#294169",
    borderRadius: "0 16px 0 16px",
  };

  return (
    <StyledCard width={width}>
      <StyledTop>
        <div className="header">
          <h4>
            Topic: <span>Basic Web Development</span>
          </h4>
          <div className="text-blue">
            <p>Set TA Communication Language</p>
            <i>
              <EditOutlined />
            </i>
          </div>
        </div>
        <div className="paragraph">
          <p>Ask a doubt from your Teaching Assistant</p>
          <p>What are you facing trouble with?</p>
        </div>
      </StyledTop>
      <TabContainer width={width}>
        <Tabs
          items={items}
          indicator={{ size: 0 }}
          tabBarStyle={myTabBarStyle}
          // renderTabBar={() => <CustomTabBar />}
          // centered
        />
      </TabContainer>
    </StyledCard>
  );
};

export default AskDoubtTab;

const StyledCard = styled.div`
  /* padding: 8px 24px 24px; */
  padding: ${(props) => (props.width >= 768 ? "8px 24px 24px" : "8px 10px 24px")};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    h4 {
      color: #474747;
      font-size: 20px;
      font-weight: 400;
      span {
        font-weight: 500;
      }
    }
  }
  .text-blue {
    display: flex;
    align-items: center;
    color: var(--Color-Brand-Brand-Blue, #0859de);
    gap: 5px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
  }
  .paragraph {
    color: #474747;
    font-size: 16px;
    font-weight: 400;
    p:nth-child(2) {
      font-size: 14px;
    }
  }
`;

const TabContainer = styled.div`
  border-radius: 16px;
  border: 0.5px solid #abb6d2;
  background: #fff;
  overflow: hidden;
  font-weight: 400;
  font-family: "DM Sans";
  font-style: normal;
  line-height: normal;
  padding-bottom: 32px;
  .ant-tabs-tab {
    text-wrap: balance;
    /* padding: 20px 16px !important; */
    padding: ${(props) => (props.width >= 768 ? " 20px 16px !important" : " 20px 8px !important")};
    margin: 0 !important;
    text-align: center;
    color: white;
    font-family: "DM Sans";
    font-size: ${(props) => (props.width >= 768 ? "18px" : "14px")};
    width: 25%;
  }
  .ant-tabs-tab-active {
    background-color: white;
    color: #0859de;
  }
  .ant-tabs-nav-list {
    width: 100%;
  }
  .ant-tabs-tab-btn {
    width: 100%;
  }
`;
