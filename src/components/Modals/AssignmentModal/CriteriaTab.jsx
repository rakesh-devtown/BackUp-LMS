import styled from "styled-components";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
const CriteriaTab = ({ handleTabChange }) => {
  return (
    <Container>
      <div className="inner-container">
        <Box>
          <Title>Functionality (50%)</Title>
          <List>
            <li>Ability to add a new task with a title, description, and status.</li>
            <li>Ability to edit an existing task's title, description, and status.</li>
            <li>Ability to delete a task.</li>
            <li>Ability to change the status of a task.</li>
          </List>
        </Box>
        <Box>
          <Title>User Interface (30%)</Title>
          <List>
            <li>Ability to add a new task with a title, description, and status.</li>
            <li>Ability to edit an existing task's title, description, and status.</li>
          </List>
        </Box>
      </div>
      <ButtonDiv>
        <Button
          type="link"
          icon={<DoubleLeftOutlined style={{ fontSize: "18px" }} />}
          onClick={() => handleTabChange("1")}
        />
        <Line />
        <Button
          type="link"
          icon={<DoubleRightOutlined style={{ fontSize: "18px" }} />}
          onClick={() => handleTabChange("3")}
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
    row-gap: 16px;
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

const List = styled.ul`
  list-style: circle;
  color: #3e3e3e;
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const ButtonDiv = styled.div`
  position: absolute;
  bottom: 12px;
  right: 24px;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  i {
    cursor: pointer;
    color: #0859de;
    padding: 4px;
    &:hover {
      color: #72a3f1;
      stroke-width: 20px;
    }
  }
`;

const Line = styled.div`
  width: 0.75px;
  height: 22px;
  background: rgba(0, 0, 0, 0.2);
`;

export default CriteriaTab;
