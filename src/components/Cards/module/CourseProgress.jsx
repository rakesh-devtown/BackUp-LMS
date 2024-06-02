import { StarOutlined, TrophyOutlined } from "@ant-design/icons";
import { Progress } from "antd";
import styled from "styled-components";
import LastActivityCard from "../LastActivityCard";

const CousreProgress = () => {
  return (
    <ProgressCard>
      <h5>Course Progress</h5>
      <ProgressBar>
        <Progress
          percent={75}
          showInfo={false}
          strokeColor={"#1E6DE8"}
          size={"small"}
        />
        <i className="first-icon">
          <TrophyOutlined />
        </i>
        <i className="second-icon">
          <StarOutlined />
        </i>
      </ProgressBar>
      <p>0% Completed</p>
      <LastActivityCard />
    </ProgressCard>
  );
};

const ProgressCard = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 16px;
  align-self: stretch;

  border-radius: 8px;
  border: 1px solid #d2e0ff;
  background: var(--Color-White-100, #fff);

  & > h5 {
    font-size: 16px;
    color: #000;
    font-family: "DM Sans";
    font-weight: 400;
  }
  & > p {
    color: #000;
    text-align: right;
    font-family: "DM Sans";
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
  }
`;

const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  i {
    display: grid;
    place-items: center;
    height: 30px;
    width: 30px;
    border-radius: 258.594px;
    background: #0859de;
    color: white;
    position: absolute;
    top: -5px;
  }
  .first-icon {
    left: 74%;
  }
  .second-icon {
    right: 0;
  }
`;

export default CousreProgress;
