import styled from "styled-components";
import ImagePic from "../../../assets/images/BlueCube.png";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
const AssignmentTab = ({ handleTabChange }) => {
  return (
    <Container>
      <div className="inner-container">
        <Title>Create an Responsive Landing Page with Auto Layout</Title>
        <Description>
          Create a web application that allows users to create and manage a list of tasks. Each task should have a
          title, description, and status (e.g., "todo", "in progress", "done"). Users should be able to add, edit, and
          delete tasks, as well as change the status of a task.
        </Description>
        <ReferenceLink>
          <p>
            Reference Link : <span className="link"> www.figma.com/</span>
          </p>
          <p>
            Reference Link : <span className="link"> www.figma.com/</span>
          </p>
        </ReferenceLink>
      </div>
      <ImageDiv>
        <img src={ImagePic} alt="logo" />
      </ImageDiv>
      <ButtonDiv>
        <Button
          type="link"
          icon={<DoubleRightOutlined style={{ fontSize: "18px" }} />}
          onClick={() => handleTabChange("2")}
        />
      </ButtonDiv>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 42px;
  padding: 24px;
  .inner-container {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }
`;

const Title = styled.h3`
  color: #3e3e3e;
  font-family: "DM Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Description = styled.div`
  color: #3e3e3e;
  font-family: "DM Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ReferenceLink = styled.div`
  p {
    color: #3e3e3e;
    font-family: "DM Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    .link {
      color: var(--Color-Brand-Brand-Blue, #0859de);
      font-family: "DM Sans";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px;
    }
  }
`;

const ImageDiv = styled.div`
  display: flex;
  padding: 22px 0px;
  justify-content: center;
  align-items: center;
`;

const ButtonDiv = styled.div`
  position: absolute;
  bottom: 12px;
  right: 24px;
  align-items: center;
  justify-content: center;
  i {
    cursor: pointer;
    color: #0859de;
    &:hover {
      color: #72a3f1;
    }
  }
`;

export default AssignmentTab;
