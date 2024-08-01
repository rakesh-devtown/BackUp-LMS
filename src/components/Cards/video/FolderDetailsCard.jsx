import { ClockCircleOutlined, FolderOpenOutlined, PlayCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import secondsToHrMin from "../../../utils/secondsToHour";
import useWindowSize from "../../../hooks/useWindowSize";

const FolderDetailsCard = (props) => {
  const { noOfModules, noOfLectures, totalLength } = props;
  const {width}=useWindowSize();

  return (
    <StyledDetailsCard width={width}>
      {noOfModules && (
        <div className="small-box">
          <i>
            <FolderOpenOutlined />
          </i>
          <p>{noOfModules} Modules</p>
        </div>
      )}
      {noOfLectures && (
        <div className="small-box">
          <i>
            <PlayCircleOutlined />
          </i>
          <p>{noOfLectures} lectures</p>
        </div>
      )}
      {totalLength && (
        <div className="small-box">
          <i>
            <ClockCircleOutlined />
          </i>
          <p>{secondsToHrMin(totalLength)}</p>
        </div>
      )}
    </StyledDetailsCard>
  );
};

export default FolderDetailsCard;

const StyledDetailsCard = styled.div`
  display: flex;
  font-family: Inter;
  gap: 16px;
  .small-box {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 6px;
    i {
      color: #1e6de8;
    }
    p {
      color: #4e5566;
      font-size: ${props=> props.width <576 ? "13px" :"14px" };
      font-weight: 400;
      line-height: 22px;
      letter-spacing: -0.14px;
    }
  }
`;
