import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, notification } from "antd";
import {
  FormOutlined,
  GithubOutlined,
  LinkedinOutlined,
  EditOutlined,
  PlusOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { formatDate } from "../../components/courses/CourseOverview";
import Dot from "../../assets/images/Ellipse.svg";


import useAuthStore from "../../store/authStore";
import { serviceGet } from "../../utils/api";
import { setHeader } from "../../utils/header";
import ProfileModal from "../../components/ProfileModals/ProfileModal";
// import EducationModal from "../../components/ProfileModals/EducationModal";
import AboutMe from "../../components/ProfileModals/AboutMe";
import ProfileComponent from "../../components/ProfileModals/ProfileComponent";
import useWindowSize from "../../hooks/useWindowSize";
import DevtownCertificates from "../../components/DevtownCertificates/DevtownCertificates";
import { ProfileContainer, ProfileContent, ProfileHeader, ProfileInnerContainer, ProfileResumeLink, ProfileTitle } from "../../styles/profile.styles";
import useLoadingStore from "../../store/loadingStore";
const Profile = () => {
  // const user = useSelector(profileState);
  //  const dispatch = useDispatch();
  const setLoading = useLoadingStore((state) => state.setLoading);
  const { width } = useWindowSize();
  const [profile, setprofile] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    image: "",
    email: "",
    address: {
      city: "",
      pincode: "",
      state: "",
    },
  });
  const getProfile = async () => {
    try {
      setLoading(true);
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const {
        success,
        data: { student },
      } = await serviceGet("student/student-api/v1/me");
      if (success) {


        // toast.success('Student Details fetched');
        return student;
      }
    } catch (error) {
      // toast.error(error.response);
      notification.error({
        message: "Error",
        description: error.message,
      });
      return null;
    } finally {
      setLoading(false);
    }
  };
  //function which gets the student profile
  const about = async () => {
    //  dispatch(setLoadingTrue());
    const student = await getProfile(); //gets the student profile
    const skills = student?.skill ? student.skill : [];
    setprofile({
      about: {
        firstName: student?.firstName,
        lastName: student?.lastName,
        mobile: student?.mobile,
        email: student?.email,
        address: student?.address,
        image: student?.image,
        resume: student?.resume,
        githubLink: student?.githubLink,
        blogLink: student?.blogLink,
        leetCode: student?.leetCode,
        codeChef: student?.codeChef,
        codeForce: student?.codeForce,
        profileComplete: student?.profileComplete,
      },
      edu: {
        education: student?.education,
      },
      proj: {
        projects: student?.projects,
      },
      workex: {
        experience: student?.experience,
      },
      cert: {
        certificate: student?.certificate,
      },
      ski: {
        skill: skills,
      },
    });
    //  dispatch(setLoadingFalse());
  };

  useEffect(() => {
    about();
  }, []);

  return (

    <ProfileContainer>

      <ProfileInnerContainer profile={profile} width={width}>
        <ProfileHeader>
          <ProfileTitle>
            My Profile
          </ProfileTitle>
          {/* if resume link exists then only show option to download it */}
          {profile?.about?.resume && (
            <ProfileResumeLink href={profile?.about?.resume}>
              Download Resume
            </ProfileResumeLink>
          )}
        </ProfileHeader>
        <ProfileContent width={width}>
          <AboutMe about={about} profile={profile?.about} />
          {profile?.about?.profileComplete && ( // Check if profile is complete, if yes then only show other components for workex, education, projects, skills, certificates
            <>
              <DevtownCertificates />
              <ProfileComponent
                about={about}
                experience={profile?.workex}
                text="Work Experience"
              />
              <ProfileComponent
                about={about}
                education={profile?.edu}
                text="Education"
              />
              <ProfileComponent
                about={about}
                project={profile?.proj}
                text="Projects"
              />
              <ProfileComponent
                about={about}
                certificate={profile?.cert}
                text="Certificates"
              />
              <ProfileComponent
                about={about}
                skill={profile?.ski}
                text="Skills"
              />
            </>
          )}
        </ProfileContent>
      </ProfileInnerContainer>
    </ProfileContainer>

  );
};

export default Profile;
