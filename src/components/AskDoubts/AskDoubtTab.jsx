import { Button, Divider, Form, Space, Tabs } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import HelpWithCodeTab from "./HelpWithCodeTab";
import QuestionRelatedTab from "./QuestionRelatedTab";
import PlatformRelatedTab from "./PlatformRelatedTab";
import OtherTab from "./OtherTab";
import { CheckCircleOutlined, EditOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import CustomTabBar from "./CustomTabBar";

const items = [
  {
    key: "1",
    label: "Help with code",
    children: <HelpWithCodeTab />,
  },
  {
    key: "2",
    label: "Questions/concept Related",
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
  const [selected, setSelected] = useState(true);

  const handleSelected = (e) => setSelected(e);
  const handleSubmit = (value) => {
    console.log(value);
  };

  const myTabBarStyle = {
    background: "#294169",
    borderRadius: "0 16px 0 16px",
  };

  return (
    <StyledCard>
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
      <TabContainer>
        <Tabs
          items={items}
          indicator={{ size: 0 }}
          tabBarStyle={myTabBarStyle}
          // renderTabBar={() => <CustomTabBar />}
          // centered
        />
        {selected && (
          <>
            <Divider style={{ marginBottom: "38px" }} />
            <CustomForm layout="vertical" onFinish={handleSubmit}>
              <Form.Item label="Describe your Issue" name="description">
                {/* <StyledLabel>Email Address</StyledLabel> */}
                <TextArea
                  rows={5}
                  placeholder="Doubts with clear and detailed description is accepted 80% faster than doubts with poor description."
                />
              </Form.Item>
              <p className="minimum-words">Minimum 200 words</p>
              <BottomPart>
                <div>
                  <p>Tips on writing a good question:</p>
                  <Space size={6} align="center">
                    <i>
                      <CheckCircleOutlined />
                    </i>
                    <p>
                      Anything you have already tried before to solve the issue
                      but didn't work.
                    </p>
                  </Space>
                  <Space size={6} align="center">
                    <i>
                      <CheckCircleOutlined />
                    </i>
                    <p>Specific area where you need help.</p>
                  </Space>
                  <Space size={6} align="center">
                    <i>
                      <CheckCircleOutlined />
                    </i>
                    <p>
                      Anything you have already tried before to solve the issue
                      but didn't work.
                    </p>
                  </Space>
                </div>
                <Divider />
                <Button
                  type="primary"
                  danger
                  size="large"
                  style={{ float: "right" }}
                  htmlType="submit"
                >
                  Submit
                </Button>
              </BottomPart>
            </CustomForm>
          </>
        )}
      </TabContainer>
    </StyledCard>
  );
};

export default AskDoubtTab;

const StyledCard = styled.div`
  padding: 8px 24px 24px;
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
    padding: 20px 16px !important;
    margin: 0 !important;
    text-align: center;
    color: white;
    font-family: "DM Sans";
    font-size: 18px;
  }
  .ant-tabs-tab-active {
    background-color: white;
    color: #0859de;
  }
  .minimum-words {
    float: right;
    margin-right: 10px;
    color: #6c727f;
    text-align: right;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const CustomForm = styled(Form)`
  position: relative;
  padding: 0 16px;
  .ant-form-item {
    margin-bottom: 8px;
  }
  .ant-form-item-row {
    position: relative;
    .ant-form-item-label {
      position: absolute;
      color: #121826;
      top: -15px;
      z-index: 5;
      background: white;
      left: 15px;
      font-weight: 700;
      padding: 0;
      label {
        color: var(--Color-Brand-Brand-Blue, #0859de) !important;
        font-family: "DM Sans";
        font-size: 24px !important;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    textarea {
      padding: 18px 19px;
      color: #6c727f;
      font-family: "DM Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

const BottomPart = styled.div`
  font-family: "DM Sans";
  color: #6c727f;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    .ant-space-item {
      i {
        color: green;
        display: flex;
        align-items: center;
        svg {
          height: 22px;
          width: 22px;
        }
      }
      p {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
`;