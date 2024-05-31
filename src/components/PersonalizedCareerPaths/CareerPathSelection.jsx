import React from "react";
import styled from "styled-components";
import { CarrerPathActionButton, CarrerPathContainer } from "../../styles/carrerpath.styles";

const CareerPathSelection = (  {
  setCurrentInfo ,
  setInfo,
  info


}  ) => {
  const CareerRowItems = [
    {
      title: "Developer (Software Developer, SDE/SWE)",
    },
    {
      title: "Non Developer and IT Professional ",
      actualTitle: "Non Developer and IT Professional (Support/Network/QA Testing etc)",
    },
    {
      title: "Non-tech professional/Others",
      actualTitle : "Non-tech professional/Others (Product Manager, Designer, Marketing etc)"
    },
    {
      title: "Data Scientist/Machine Learning Engineer",
    },
    {
      title: "Data Analyst/Business Analyst",
    },
    {
      title: "Others",
    },
  ];

  return (
    <CarrerPathContainer>
     
      <CareerOptions>
        {CareerRowItems.map((item, index) => (
          <CareerItem key={index} 
            onClick={() =>{
              setInfo(info => {
                let newInfo = [...info]; 
                newInfo[2] = item.title; 
                return newInfo; 
              });
              setCurrentInfo("company-type");
            }}
          >
            {item.actualTitle ? item.actualTitle : item.title}
          </CareerItem>
        ))}
      </CareerOptions>
      <Navigation>
        <CarrerPathActionButton
          onClick={() => {
            setCurrentInfo("years");
            setInfo(info.slice(0, -1));
          }}
        >Back</CarrerPathActionButton>
      </Navigation>
    </CarrerPathContainer>
  );
};

const Container = styled.main`
  display: flex;
  max-width: 500px;
  flex-direction: column;
  align-items: start;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 24px;
  font-weight: 500;
  padding: 0 20px;
`;

const Intro = styled.div`
  color: #232323;
  font-family: DM Sans, sans-serif;
`;

const ExperienceLevel = styled.div`
  color: #0859de;
  font-family: DM Sans, sans-serif;
`;

const Subtitle = styled.h2`
  color: #232323;
  font-family: DM Sans, sans-serif;
`;

const CareerOptions = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px; //
  background-color: #0e1426;
  margin-top: 16px;
  padding: 14px; 
  overflow: auto;

`;

const CareerItem = styled.article`
  color: #fff;
  font: 400 16px Poppins, sans-serif;
  background-color: #0e1426;
  white-space: normal;

`;

const Navigation = styled.nav`
  display: flex;

  margin-top: 16px;
  font-size: 20px;

`;

const BackButton = styled.div`
  color: #0859de;
  cursor: pointer;
  font-family: DM Sans, sans-serif;
`;

export default CareerPathSelection;