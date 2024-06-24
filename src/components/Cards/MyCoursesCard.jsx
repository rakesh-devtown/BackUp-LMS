import { FileFilled } from "@ant-design/icons";
import { Button, ConfigProvider, Space, notification } from "antd";
import styled from "styled-components";
import mern_icon from "../../assets/images/courses/mern_icon.svg";
import useWindowSize from "../../hooks/useWindowSize";
import LastActivityCard from "./LastActivityCard";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useBatchStore from "../../store/batchStore";

const MyCoursesCard = ({enroll}) => {
  const { width } = useWindowSize();
  const [course, setCourse] = useState(null);
  const {getModuleOfEnrolledCourse,setEnrollId,getFirstSectionOfCourse} = useBatchStore();
  const currentCourseDetails = useBatchStore((state) => state.currentCourseDetails);
  const getCurrentSectionDetails = useBatchStore((state) => state.getCurrentSectionDetails);
  const currentCourseSections = useBatchStore((state) => state.currentCourseSections);
  const navigate = useNavigate();

  const onClickOnDashboard=async()=>{
    try{
      //await getModuleOfEnrolledCourse(enroll.id);
      setEnrollId(enroll.id);
      navigate("/module")
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    if(enroll){
      setCourse(enroll?.batch?.course);
    }
  },[enroll])


  const startLearningFromFirstModule = async () => {
    try {
      setEnrollId(enroll.id);
      await getModuleOfEnrolledCourse(enroll.id);
      await getFirstSectionOfCourse(enroll.batch.course.id);
      
      navigate("/video");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <StyledCard width={width}>
      <Top width={width}>
        <FlexBox width={width}>
          <img src={course?.bannerImg} height={33} width={33} alt="icon" />
          <div className="header">
            <h5>{course?.name}</h5>
            <Space>
              <i>
                <FileFilled />
              </i>
              <p className="lessons">{course?.totalSectionItems} Lectures</p>
            </Space>
          </div>
        </FlexBox>
        <Space size={16}>
          {/* <p className="completion">0% Completed</p> */}

          <DashboardButton onClick={onClickOnDashboard}  shape="round" size="large">
            View Dashboard
          </DashboardButton>
        </Space>
      </Top>
        <CustomButton onClick={startLearningFromFirstModule} type="primary" size="large" danger screenWidth={width}>
          Start Learning
        </CustomButton>
      {/* <LastActivityCard leftPadding={true} /> */}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  padding: ${(props) => (props.width >= 768 ? "24px" : "16px")};
  border-radius: 8px;
  border: 0.5px solid #5578d1;
  background: #f6faff;
`;

const Top = styled.div`
  margin-bottom: 24px;
  display: flex;
  gap: 16px;
  /* align-items: center; */
  align-items: ${(props) => (props.width >= 768 ? "center" : "flex-start")};
  flex-direction: ${(props) => (props.width >= 768 ? "row" : "column")};
  .header {
    i {
      color: var(--secondaryColor);
    }
  }
  h5 {
    color: var(--secondaryColor2);
    font-size: 22px;
    font-weight: 700;
  }
  img {
    margin: 10px;
  }
  .lessons {
    color: #343434;
    font-size: 14px;
    font-weight: 400;
  }
  .completion {
    color: #294169;
    font-size: 18px;
    font-weight: 400;
    margin-left: ${(props) => (props.width >= 768 ? null : "70px")};
    border-radius: 54px;
    background: #ebf2ff;
    padding: 8px 16px;
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 16px;
  align-items: center;
`;

const DashboardButton = styled.button`
  color: #224848;
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 54px;
  border: 0.4px solid #224848;
  background: #fff;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #aad9c7;
    color: #224848;
  }
`;

const CustomButton = styled(Button)`
  padding: "0 10px";
  margin-left: ${(props) => (props.screenWidth >= 768 ? "69px" : null)};
`;

export default MyCoursesCard;
