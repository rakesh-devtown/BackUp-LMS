import styled from "styled-components";
import MyCoursesCard from "../../components/Cards/MyCoursesCard";
import useWindowSize from "../../hooks/useWindowSize";
import { StyledContainer } from "../../styles/layout.styles";

const MyCourses = () => {
  const { width } = useWindowSize();

  return (
    <StyledContainerVariant width={width}>
      <h4>Enrolled Courses</h4>
      <div className="list">
        <MyCoursesCard resume={false} />
        <MyCoursesCard resume={true} />
      </div>
    </StyledContainerVariant>
  );
};

const StyledContainerVariant = styled(StyledContainer)`
  h4 {
    color: var(--darkColor1);
    font-size: 26px;
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
