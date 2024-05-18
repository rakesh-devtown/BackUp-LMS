import styled from 'styled-components'
import MyCoursesCard from '../../components/Cards/MyCoursesCard'

const MyCourses = () => {


    return (
        <StyledContainer>
            <h4>Enrolled Courses</h4>
            <div className="list">
                <MyCoursesCard />
                <MyCoursesCard />
                <MyCoursesCard />
            </div>
        </StyledContainer>
    )
}

const StyledContainer = styled.section`
    padding:24px;
    font-family: "DM Sans";
    font-style: normal;
    line-height: normal;
    border-radius: 8px;
    border: 1px solid #D2E0FF;
    h4{
        color: var(--darkColor1);
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 26px ;
    }
    .list{
        display: flex;
        gap: 16px;
        flex-direction: column;
    }
`

export default MyCourses;