import { CodeOutlined } from "@ant-design/icons";
import { StyledTopicNode } from "../../styles/moduleRightSidebar.styles";
import { Space } from "antd";

const AssignmentNode = ({ topic, difficulty }) => {
  return (
    <StyledTopicNode>
      <Space size={8}>
        <i>
          <CodeOutlined />
        </i>
        <p>{topic}</p>
      </Space>
      {difficulty && <p className="difficulty">{difficulty}</p>}
    </StyledTopicNode>
  );
};

export default AssignmentNode;
