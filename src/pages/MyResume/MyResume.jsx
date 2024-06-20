import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Button, Checkbox, Spin } from "antd";
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
import useResumeStore from "../../store/resumeStore";

const MyResume = () => {
  const [checkbox, setCheckbox] = useState(false);
  const user = useAuthStore((state) => state.user);
  const { width } = useWindowSize();

  const { fetchResume } = useResumeStore();
  const loading = useResumeStore((state) => state.loading);

  const handleTermsAndCondition = (e) => {
    e.preventDefault();
    console.log("Terms");
  };

  const myButtonStyle = {
    width: width >= 768 ? "785px" : null,
  };

  useEffect(() => {
    fetchResume();
  }, []);

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
          <h3>My Profile</h3>
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
          {loading && (
            <div
              style={{
                position: "fixed",
                height: "30vh",
                justifyContent: "center",
                zIndex: 999,
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Spin size="large" />
            </div>
          )}
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
  );
};

const ProfileContainer = styled.section`
  display: flex;
  padding: ${(props) => (props.width >= 768 ? "20px" : "25px")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex: 1 0 0;
  border-left: 1px solid #e9eaf0;
  background: var(--Color-White-100, #fff);
  font-style: normal;
  line-height: normal;
  border-radius: 16px;
`;
const ResumeHeader = styled.div`
  display: flex;
  gap: 8px;
  color: var(--Color-Brand-Brand-Blue, #0859de);
  width: 100%;
  h3 {
    font-family: Inter;
    font-size: 26px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: -0.32px;
  }
`;
const ProfileContent = styled.div`
  display: flex;
  position: relative;
  padding: ${(props) => (props.width >= 768 ? "24px" : "5px")};
  flex-direction: column;
  align-items: center;
  gap: 30px;
  align-self: stretch;
  .line {
    color: #deeaff;
    width: 100%;
  }
`;

const ConfirmDiv = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
  font-weight: 400;
  p {
    color: #000;
    span {
      color: #076aff;
      text-decoration-line: underline;
    }
  }
`;
export default MyResume;
