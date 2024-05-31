import * as React from "react";
import styled from "styled-components";
import {
  CarrerPathActionButton,
  CarrerPathContainer,
} from "../../styles/carrerpath.styles";

export default function CompanyType({ setCurrentInfo, setInfo, info }) {
  const careerOptions = [
    "Service Based Companies",
    "High Growth Startups",
    "Scaled Startups",
    "Product MNCs",
    "Big Tech Companies",
  ];

  return (
    <CarrerPathContainer>
      <OptionsList>
        {careerOptions.map((option, index) => (
          <Option
            onClick={() => {
              setInfo((info) => {
                let newInfo = [...info];
                newInfo[3] = option;
                return newInfo;
              });
              setCurrentInfo("track");
            }}
            key={index}
          >
            {option}
          </Option>
        ))}
      </OptionsList>
      <Navigation>
        <CarrerPathActionButton
          onClick={() => {
            setCurrentInfo("experience");
            setInfo(info.slice(0, -1));
          }}
        >
          {" "}
          Back
        </CarrerPathActionButton>
      </Navigation>
    </CarrerPathContainer>
  );
}

const MainContainer = styled.main`
  display: flex;
  max-width: 500px;
  padding-bottom: 50px;
  flex-direction: column;
  font-size: 24px;
  font-weight: 500;
`;

const Introduction = styled.section`
  display: flex;
  margin-right: 13px;
  justify-content: space-between;
  gap: 10px;
  color: #232323;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
    flex-wrap: wrap;
  }
`;

const Position = styled.section`
  align-self: start;
  display: flex;
  margin-top: 10px;
  padding-right: 20px;
  gap: 10px;
  @media (max-width: 991px) {
    padding-right: 0;
  }
`;

const OptionsList = styled.section`
  border-radius: 6px;
  background-color: #0e1426;
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  font-size: 18px;
  color: #fff;
  padding: 14px 32px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 14px 20px;
  }
`;

const Option = styled.div`
  font-family: Poppins, sans-serif;
  &:not(:first-child) {
    margin-top: 27px;
  }
`;

const Navigation = styled.nav`
  align-self: start;
  display: flex;
  margin-top: 16px;
  gap: 8px;
  font-size: 20px;
  color: #0859de;
  font-weight: 400;
`;

const ProfilePicture = styled.img`
  aspect-ratio: 1.19;
  object-fit: cover;
  width: auto; /* Adjusted for correct aspect ratio */
  margin: auto 0;
`;

const Highlight = styled.span`
  color: #0859de;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
`;
