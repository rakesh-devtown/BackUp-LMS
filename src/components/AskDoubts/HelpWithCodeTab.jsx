import React, { useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import underStandingIcon from "../../assets/images/understandingIcon.png";
import troubleShootingIcon from "../../assets/images/troubleshootingIcon.png";
import otherIcon from "../../assets/images/otherIcon.png";
import styled from "styled-components";
import {
  Doubt,
  InnerBox,
  StyledAskDoubt,
  Title,
} from "../../styles/askDoubtModal.styles";
import { Row } from "antd";
import useWindowSize from "../../hooks/useWindowSize";

const HelpWithCodeTab = () => {
  const [showIssueInput, setShowIssueInput] = useState(false);
  const { width } = useWindowSize();

  return (
    <StyledAskDoubt>
      <Row>
        <InnerBox span={24} md={8} borderRight={true}>
          <Title>
            <img src={underStandingIcon} alt="icon" />
            <p>Understanding approach</p>
          </Title>
          <Doubt width={width}>
            <div onClick={() => setShowIssueInput(true)}>
              <p>Did not understand question</p>
              <i>
                <ArrowRightOutlined />
              </i>
            </div>
            <hr />
            <div>
              <p>Facing issue with code logic</p>
              <i>
                <ArrowRightOutlined />
              </i>
            </div>
            <hr />
            <div>
              <p>Unable to make code logic</p>
              <i>
                <ArrowRightOutlined />
              </i>
            </div>
          </Doubt>
        </InnerBox>
        <InnerBox span={24} md={8} borderRight={true}>
          <Title>
            <img src={troubleShootingIcon} alt="icon" />
            <p>Troubleshooting Code</p>
          </Title>
          <Doubt width={width}>
            <div>
              <p>Compilation error</p>
              <i>
                <ArrowRightOutlined />
              </i>
            </div>
            <hr />
            <div>
              <p>Runtime error</p>
              <i>
                <ArrowRightOutlined />
              </i>
            </div>
            <hr />
            <div>
              <p>Wrong answer/Test cases failing</p>
              <i>
                <ArrowRightOutlined />
              </i>
            </div>
            <hr />
            <div>
              <p>Language/Syntax help</p>
              <i>
                <ArrowRightOutlined />
              </i>
            </div>
          </Doubt>
        </InnerBox>
        <InnerBox span={24} md={8}>
          <Title>
            <img src={otherIcon} alt="icon" />
            <p>Other</p>
          </Title>
          <Doubt width={width}>
            <div>
              <p>Need a different approach</p>
              <i>
                <ArrowRightOutlined />
              </i>
            </div>
            <hr />
            <div>
              <p>Solution not clear</p>
              <i>
                <ArrowRightOutlined />
              </i>
            </div>
          </Doubt>
        </InnerBox>
      </Row>
    </StyledAskDoubt>
  );
};

export default HelpWithCodeTab;
