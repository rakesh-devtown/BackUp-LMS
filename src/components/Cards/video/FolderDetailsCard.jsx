import {
  ClockCircleOutlined,
  FolderOpenOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { Space, Typography } from "antd";
import styled from "styled-components";
import useBatchStore from "../../../store/batchStore";
import { useEffect } from "react";

const FolderDetailsCard = () => {
  const currentCourseDetails = useBatchStore((state) => state.currentCourseDetails);

  return (
    <StyledDetailsCard>
      <div className="small-box">
        <i>
          <FolderOpenOutlined />
        </i>
        <p>{currentCourseDetails?.totalSubSections ? 
            (parseInt(currentCourseDetails?.totalSubSections) > 0 
              ? currentCourseDetails?.totalSubSections 
              :currentCourseDetails?.sections?.length
            )
            :currentCourseDetails?.sections?.length} Sections</p>
      </div>
      <div className="small-box">
        <i>
          <PlayCircleOutlined />
        </i>
        <p>{currentCourseDetails?.totalLecture} lectures</p>
      </div>
      {/* <div className='small-box'>
                <i><ClockCircleOutlined /></i>
                <p>19h 37m</p>
            </div> */}
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
      font-size: 14px;
      font-weight: 400;
      line-height: 22px; /* 157.143% */
      letter-spacing: -0.14px;
    }
  }
`;
