import styled from "styled-components";
import MyCoursesCard from "../../components/Cards/MyCoursesCard";
import useWindowSize from "../../hooks/useWindowSize";

const MyCourses = () => {
  const { width } = useWindowSize();

  return (
    <StyledContainer width={width}>
      <h4>Enrolled Courses</h4>
      <div className="list">
        <MyCoursesCard />
        <MyCoursesCard />
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  padding: ${(props) => (props.width >= 768 ? "24px" : "16px")};
  font-family: "DM Sans";
  font-style: normal;
  line-height: normal;
  border-radius: 8px;
  border: 1px solid #d2e0ff;
  background-color: white;
  h4 {
    color: var(--darkColor1);
    font-size: 22px;
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
