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
import useWindowSize from "../../hooks/useWindowSixe";
import DevtownCertificates from "../../components/DevtownCertificates/DevtownCertificates";
const Profile = () => {
   // const user = useSelector(profileState);
  //  const dispatch = useDispatch();
  const {width} = useWindowSize();
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
    }
};
   //function which gets the student profile
   const about = async () => {
    //  dispatch(setLoadingTrue());
     const student = await getProfile(); //gets the student profile
     // console.log(student)
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
  
<div style={{backgroundColor: '#FFFFFF', paddingBottom: '2rem' , fontSize:"20px"}}>
  
  <div
    style={{backgroundColor: '#e5e3e3', marginTop: '5rem', marginBottom: '5rem', paddingBottom: '1.5rem', borderRadius: '0.375rem', width: '100%', maxWidth: width<700 ? '100%' : '75%', height: !profile?.about?.profileComplete ? '700px' : 'fit-content', margin: width < 768 ? 0 : '0 auto', }}
  >
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem'}}>
      <p style={{color: '#302F2F', fontSize: '1.875rem', fontWeight: '700', fontFamily: 'DM Sans'}}>My Profile</p>
      {/* if resume link exists then only show option to download it */}
      {profile?.about?.resume && (
        <a href={profile?.about?.resume}>
          <p style={{color: '#9865E8', fontWeight: '700', fontFamily: 'DM Sans', textDecoration: 'underline', cursor: 'pointer'}}>
            Download Resume
          </p>
        </a>
      )}
    </div>
    <div style={{backgroundColor: '#FFFFFF', margin:width > 640? '0 2rem' : "0rem"}}>
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
    </div>
  </div>
</div>

  );
};

export default Profile;
