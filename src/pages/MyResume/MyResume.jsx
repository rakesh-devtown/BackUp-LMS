import { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Button, Checkbox } from "antd";
import useWindowSize from "../../hooks/useWindowSize";
import Profile_logo from "../../assets/images/profile_logo.svg";
import ProfileHeader from "../../components/Resume/ProfileHeader";
import PersonalDetails from "../../components/Resume/PersonalDetails";
import Education from "../../components/Resume/Education/Education";
import Skills from "../../components/Resume/Skills/Skills";
import Project from "../../components/Resume/Project/Project";
import Certifications from "../../components/Resume/Certifications/Certifications";
import WorkExperience from "../../components/Resume/WorkExperience/WorkExperience";
import useAuthStore from "../../store/authStore";


const MyResume = () => {
    const [checkbox, setCheckbox] = useState(false);
    const user = useAuthStore((state) => state.user);
    const { width } = useWindowSize();

    const handleTermsAndCondition = (e) => {
        e.preventDefault();
        console.log("Terms");
    }

    const myButtonStyle = {
        width: width >= 768 ? "785px" : null,
    }

    return (
        <>
            <Helmet>
                <title>My Profile</title>
                <meta name="My Profile" content="My Profile" />
                <link rel="canonical" href="https://www.learn.devtown.in/me" />
            </Helmet>
            <ProfileContainer>

                <ResumeHeader>
                    <img src={Profile_logo} alt="icon" />
                    <h3>My Resume</h3>
                </ResumeHeader>
                <ProfileContent width={width}>
                    <ProfileHeader />
                    <hr className="line" />
                    <PersonalDetails />
                    <hr className="line" />
                    <WorkExperience />
                    <hr className="line" />
                    <Education />
                    <hr className="line" />
                    <Project />
                    <hr className="line" />
                    <Certifications />
                    <hr className="line" />
                    <Skills />
                </ProfileContent>

                {/* not added in first release */}
                {/* <ConfirmDiv>
                    <Checkbox onChange={() => setCheckbox(!checkbox)}>
                        <p>
                            I confirm that all details provided are correct and filled to the best of my knowledge. <span onClick={handleTermsAndCondition}>Terms & Conditions</span>
                        </p>
                    </Checkbox>
                </ConfirmDiv>
                <Button type='primary' size="large" style={myButtonStyle} >
                    Create My Resume
                </Button> */}
            </ProfileContainer>
        </>

    )
}

const ProfileContainer = styled.section`
    display: flex;
    padding: ${props => props.width >= 768 ? "20px" : "25px"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex: 1 0 0;
    border-left: 1px solid #E9EAF0;
    background: var(--Color-White-100, #FFF);
    font-style: normal;
    line-height: normal;
    border-radius: 16px;
`
const ResumeHeader = styled.div`
    display: flex;
    gap: 8px;
    font-family: Inter;
    color: var(--Color-Brand-Brand-Blue, #0859DE);
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: -0.32px;
    width: 100%;
`
const ProfileContent = styled.div`
    display: flex;
    padding: ${props => props.width >= 768 ? "24px" : "5px"};
    flex-direction: column;
    align-items: center;
    gap: 30px;
    align-self: stretch;
    .line{
        color: #DEEAFF;
        width: 100%;
    }
`

const ConfirmDiv = styled.div`
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    font-weight: 400;
    p{
        color: #000;
    span{
        color: #076AFF;
        text-decoration-line: underline;
    }
}
`
export default MyResume;