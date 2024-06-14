import {
  CheckOutlined,
  LockOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { Space } from "antd";
import { FaPlay } from "react-icons/fa";
import styled from "styled-components";
import {
  FlexBoxCenter,
  StyledTopicNode,
} from "../../styles/moduleRightSidebar.styles";

const TopicNode = ({ topic, lock, time, checked, difficulty }) => {
  return (
    <StyledTopicNode>
      <FlexBoxCenter gap={"8px"}>
        <i>
          <PlayCircleOutlined />
        </i>
        <p>{topic}</p>
      </FlexBoxCenter>
      <FlexBoxCenter>
        {checked && (
          <i className="hide">
            <CheckOutlined style={{ color: "#1E6DE8" }} />
          </i>
        )}
        {difficulty === "easy" && (
          <p className="hide" style={{ color: "green" }}>
            Easy
          </p>
        )}
        {difficulty === "normal" && (
          <p className="hide" style={{ color: "yellow" }}>
            Normal
          </p>
        )}
        {difficulty === "tough" && (
          <p className="hide" style={{ color: "orange" }}>
            Hard
          </p>
        )}
        {time && <p className="hide">{time}</p>}
        <p className="play" style={{ color: "#1E6DE8" }}>
          Playing
        </p>
      </FlexBoxCenter>
    </StyledTopicNode>
  );
};

export default TopicNode;
