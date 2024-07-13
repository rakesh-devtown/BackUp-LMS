import { Row } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { ArrowRightOutlined } from "@ant-design/icons";
import underStandingIcon from "../../assets/images/understandingIcon.png";
import troubleShootingIcon from "../../assets/images/troubleshootingIcon.png";
import otherIcon from "../../assets/images/otherIcon.png";
import { Doubt, InnerBox, StyledAskDoubt, Title } from "../../styles/askDoubtModal.styles";
import useWindowSize from "../../hooks/useWindowSize";
import { mockData } from "./mockData";

const PlatformRelatedTab = () => {
 
  const [selected, setSelected] = useState();
  const [showIssueInput, setShowIssueInput] = useState(false);
  const { width } = useWindowSize();

  return (
    <StyledAskDoubt>
      <Row>
        {mockData.map((ele, ind1) => (
          <InnerBox span={24} md={8} borderRight={ind1 !== mockData.length - 1} key={ind1}>
            <Title>
              <img src={ele.icon} alt="icon" />
              <p>{ele.title}</p>
            </Title>
            <Doubt width={width}>
              {ele.data.map((subData, ind2) => (
                <>
                  <div key={ind2} onClick={() => setShowIssueInput(true)}>
                    <p>{subData.title}</p>
                    <i>
                      <ArrowRightOutlined />
                    </i>
                  </div>
                  {ele.data.length - 1 !== ind2 && <hr key={`hr-${ind2}`} />}
                </>
              ))}
            </Doubt>
          </InnerBox>
        ))}
      </Row>
    </StyledAskDoubt>
  );
};

export default PlatformRelatedTab;
