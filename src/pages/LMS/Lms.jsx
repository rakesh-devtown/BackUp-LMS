import React from "react";
import { LayoutOuterContainer } from "../../styles/layout.styles";
import LmsHeader from "../../components/lms/LmsHeader";
import CourseCard from "../../components/Cards/CourseCard";
import { ArrowUpOutlined, StarFilled } from "@ant-design/icons";
import useWindowSize from "../../hooks/useWindowSixe";
import CourseDescriptionModal from "../../components/Modals/CourseDescriptionModal";

function Lms() {
  const { width } = useWindowSize();
  return (
    <LayoutOuterContainer>
      <LmsHeader />

      <div
        style={{
          marginTop: width < 900 ?  "20px" :    "120px",
          width: "100%",
          padding: "0 20px"    ,
        }}
        >
        <div
        
        style={{
          backgroundColor: "white",
          width: "100%",
          padding: "20px",
          borderRadius: "20px",

          }}
        >

        <h1>Free Trial Courses</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <CourseCard />
          <CourseCard />
        </div>
        </div>

      <div
        style={{
          backgroundColor: "#e1e8f3",
          width: "100%",
          padding: "20px",
          borderRadius: "20px",
          
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",


        }}
      
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            flexDirection: "column",
            fontSize: "24px",
          
          }}
        >
          <h3>Enrolled Courses</h3>
          <div style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            fontSize: "18px",
          
          }}>
            <StarFilled />
            No Course Enrolled
          </div>
        </div>
        <div>
          <ArrowUpOutlined
            style={{
              transform: "rotate(45deg)",
              fontSize: "30px",
            }}
            />
        </div>
            </div>
      <CourseDescriptionModal/>
      </div>
    </LayoutOuterContainer>
  );
}

export default Lms;
