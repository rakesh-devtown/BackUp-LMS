import React, { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../../styles/LoginPage.styles";
import {
  CarrerPathActionButton,
  CarrerPathBackButton,
} from "../../styles/carrerpath.styles";
import { Button } from "antd";

const CareerTrack = ({ setCurrentInfo, setInfo, info }) => {
  const careerOptions = [
    "Software Engineering",
    "Data Analytics",
    "Data Science",
  ];
  const [showProceed, setShowProceed] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <ProfileContainer>
        <CareerOptions>
          {careerOptions.map((option, index) => (
            <CareerOption
              onClick={() => {
                setInfo((info) => {
                  let newInfo = [...info];
                  newInfo[4] = option;
                  return newInfo;
                });
              }}
              key={index}
            >
              {option}
            </CareerOption>
          ))}
        </CareerOptions>
        <NavigationSection></NavigationSection>
      </ProfileContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <CarrerPathBackButton
          onClick={() => {
            setCurrentInfo("company-type");
            setInfo(info.slice(0, -1));
          }}
        >
          <CarrerPathActionButton>Back</CarrerPathActionButton>
        </CarrerPathBackButton>
        <Button>Proceed</Button>
      </div>
    </div>
  );
};

const ProfileContainer = styled.section`
  display: flex;
  max-width: 500px;
  flex-direction: column;
  font-size: 24px;
  color: #232323;
  font-weight: 500;
`;

const ProfileIntro = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const TextBlock = styled.p`
  flex-grow: 1;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const HighlightText = styled(TextBlock)`
  color: var(--Color-Brand-Brand-Blue, #0859de);
`;

const ProfileDetail = styled(ProfileIntro)``;

const CareerPathSection = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const CareerOptions = styled.div`
  border-radius: 6px;
  background-color: #0e1426;
  align-self: start;
  display: flex;

  flex-direction: column;
  font-size: 18px;
  color: var(--Color-White-100, #fff);
  font-weight: 400;
  white-space: nowrap;
  padding: 21px;
`;

const CareerOption = styled(TextBlock)`
  margin-top: 27px;
  color: var(--Color-White-100, #fff);
  font-family: Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const NavigationSection = styled.div`
  margin-top: 16px;
`;

const BackButton = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: var(--Color-Brand-Brand-Blue, #0859de);
  cursor: pointer;
`;

export default CareerTrack;
