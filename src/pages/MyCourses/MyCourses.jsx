import styled from "styled-components";
import MyCoursesCard from "../../components/Cards/MyCoursesCard";
import useWindowSize from "../../hooks/useWindowSize";
import { StyledContainer } from "../../styles/layout.styles";
import useBatchStore from "../../store/batchStore";
import Spinner from "../../components/loader/Spinner";
import { useEffect } from "react";
import useMeStore from "../../store/meStore";

const MyCourses = () => {
  const { width } = useWindowSize();
  const courseLoading = useBatchStore((state) => state.courseLoading);
  const enrolledCourses = useBatchStore((state) => state.enrolledCourses);
  const {getAllEnrolledCourses} = useBatchStore();
  const { getStudentById } = useMeStore();

  useEffect(() => {
    getStudentById();
    getAllEnrolledCourses();
  },[])

  return (
    <StyledContainerVariant width={width}>
      {courseLoading && <Spinner large />}
      <h4>Enrollesd Courses</h4>
      <div className="list">
        {enrolledCourses &&
          enrolledCourses.map((course) => (
          <MyCoursesCard key={course.id} enroll={course} />
        ))}

        {enrolledCourses && enrolledCourses.length === 0 && 
          <h4>No Enrolled Courses</h4>
        }
      </div>
    </StyledContainerVariant>
  );
};

const StyledContainerVariant = styled(StyledContainer)`
  height: 100%;
  overflow-y: auto;
  h4 {
    color: var(--darkColor1);
    font-size: 26px;
    position:'relative';
    font-weight: 500;
    margin-bottom: 26px;
  }
  .list {
    display: flex;
    gap: 16px;
    flex-direction: column;
  }
`;

export default MyCourses;
