import React, { useState } from "react";
import { Container } from "../../styles/LoginPage.styles";
import useAuthStore from "../../store/authStore";
import { LineChartOutlined, LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Flex } from "antd";
import CareerPathSelection from "./CareerPathSelection";
import CompanyType from "./CompanyType";
import CareerTrack from "./CarrerTrack";
import {
  CareerPathContainer,
  CareerPathItem,
  CareerPathText,
  CarrerPathActionButton,
  CarrerPathBackButton,
  CarrerPathInfo,
  LevelsOuterContainer,
} from "../../styles/carrerpath.styles";
import { useNavigate } from "react-router-dom";
import loginUiStore from "../../store/loginUi.store";

const ParentContainer = styled(Container)`
  width: 100%; 
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

function WrapperCareersPath() {
  const setCurrentPage = loginUiStore((state) => state.setCurrentPage);

  const [info, setInfo] = useState([""]);
  const navigate = useNavigate();

  const [currentInfo, setCurrentInfo] = useState("years");
  const user = useAuthStore((state) => state.user);
  console.log(currentInfo)
  console.log(info)    
  const experienceLevels = [
    "0-3 years",
    "4-6 years",
    "7-10 years",
    "10+ years",
  ];

  return (
    <ParentContainer>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <CareerPathContainer>
            <CareerPathText>
             
              {
                 " I am Ayush having "
              }
              {info.map(
                (item, index) =>
                  item !== "" && (
                    <CareerPathText key={index}>
                      <CareerPathItem> {" "} {   item}</CareerPathItem>

                      <CarrerPathInfo>
                        {index === 1 && ", i working as a "}
                        {index === 2 && "in a"}
                        {index === 3 && "and my career track want to in"}
                      </CarrerPathInfo>
                    </CareerPathText>
                  )
              )}
            </CareerPathText>
          </CareerPathContainer>
        </div>

        <Levels>
          {currentInfo === "years" &&  
          (
            <LevelsOuterContainer >
              {

              experienceLevels.map((level) => (
                <ExperienceLevel
                  onClick={() => {
                    setInfo((info) => {
                      let newInfo = [...info];
                      newInfo[1] = level;
                      return newInfo;
                    });
                    setCurrentInfo("experience");
                  }}
                  key={level}
                >
                  {level}
                </ExperienceLevel>
              ))}
            </LevelsOuterContainer>
          ) 
            }
        

          {currentInfo === "experience" && (
            <CareerPathSelection
              info={info}
              setInfo={setInfo}
              setCurrentInfo={setCurrentInfo}
            />
          )}
          {currentInfo === "company-type" && (
            <CompanyType
              info={info}
              setInfo={setInfo}
              setCurrentInfo={setCurrentInfo}
            />
          )}
          {currentInfo === "track" && (
            <CareerTrack
              info={info}
              setInfo={setInfo}
              setCurrentInfo={setCurrentInfo}
            />
          )}
        </Levels>
      </div> 
             {
              currentInfo === "years" && ( 

              < CarrerPathBackButton
                onClick={() => {
                  if(info.length === 1){
                    setCurrentPage("signup")
                  }
                  setCurrentInfo("years");
                  setInfo(info.slice(0, -1));
                
                }}
              >
                <CarrerPathActionButton 
                  >
                  Back 
                </CarrerPathActionButton>
              </CarrerPathBackButton>
              )
             }
    </ParentContainer>
  );
}

export default WrapperCareersPath;

const ExperienceLevel = styled.div`
  font-family: "Poppins", sans-serif;
  &:not(:last-of-type) {
    margin-bottom: 28px;
  }
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Levels = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-top: 16px;
  width: 100%;

  color: #fff;
  font-size: 18px;

  font-weight: 400;


  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Line = styled.div`
  border-top: 3px solid #232323;
  width: 100%;

  margin-left: 10px;
`;
