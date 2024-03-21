import React, { useState } from "react";
import { Steps } from "antd";
import MultiStepformRegisterCard from "../Cards/MultiStepformRegisterCard";
import useLayoutUiStore from "../../store/layoutUI";
import MultiStepFormRegisteredCard from "../Cards/MultiSteoFormRegisteredCard";
import MultiStepFormJoinWhatsapp from "../Cards/MultiSteoFormJoinWhatsapp";
import MultiStepFormJoinedWhatsapp from "../Cards/MultiStepFormJoinedWahtsapp";
import CourseCard from "../Cards/CourseCard";
const description = "This is a description.";
const MultiStepForm = () => {
  const currentMultiStepFormPage = useLayoutUiStore((state) => state.currentMultiStepFormPage);
  const setCurrentMultiStepFormPage = useLayoutUiStore((state) => state.setMultiStepFormPage);
  
  // const [current, setCurrent] = React.useState(1);  
  const steps = [
    {
      title: "Register for a free 7 days Bootcamp with DevTown",
      description :  currentMultiStepFormPage ==1 &&  <MultiStepformRegisterCard/>,
    },
    {
      title: "Register for a Free 7 Days Bootcamp with DevTown",
      description : currentMultiStepFormPage ==2 && <MultiStepFormRegisteredCard/>,
    },
    {
      title: "Register for a Free 7 Days Bootcamp with DevTown",
      description  :currentMultiStepFormPage ===3  && <MultiStepFormJoinWhatsapp/>,
    },
    {
      title : "Register for a Free 7 Days Bootcamp with DevTown", 
      description : currentMultiStepFormPage === 4 && <MultiStepFormJoinedWhatsapp/>
    }
  ];

  return !(currentMultiStepFormPage ===5) ?  (
    <Steps
      style={{
        marginTop: "20px",
      }}
      direction="vertical"
      size="small"
      current={currentMultiStepFormPage}
      items={steps}
    />
  ) :( 
    <CourseCard/>
  );
};
export default MultiStepForm;
