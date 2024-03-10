import React from "react";
import styled from "styled-components";
import loginUiStore from "../../store/loginUi.store";

export default function CareerPathHero() {
    const currentPage = loginUiStore((state) => state.currentPage);
    const setMobileCurrentPage = loginUiStore((state) => state.setMobileCurrentPage);   
  return (
    <MainContent>
      <Title>Answer Simple 4 simple questions</Title>
      <SubTitle>
        <Highlight>Discover your path</Highlight>
      </SubTitle>
        <p>
                to a Successful Tech Career!
            </p>
      <CallToAction
        onClick={()=>{
            
            setMobileCurrentPage("carrer-info");
        }}
      >Create <Strong>Free</Strong> personalized Career Path!</CallToAction>
      <p
        style={{
            cursor: "pointer",
        
        }}
        onClick={()=>{
            
            setMobileCurrentPage("login");
        }}
      >Go to Dashboard</p>
    </MainContent>
  );
}

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8px;
  font-size: 20px;
  color: #606268;
  text-align: center;
`;

const Title = styled.p`
  font-size: 23px;
  font-family: DM Sans, sans-serif;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-family: DM Sans, sans-serif;
  font-size: 38px;
  margin-top: 25px;
`;

const Highlight = styled.span`
  font-weight: 700;
  color: rgba(8,89,222,1);
`;

const CallToAction = styled.p`
  font-family: DM Sans, sans-serif;
  background-color: #0859de;
  color: #fff;
  border-radius: 8px;
  padding: 16px 24px;
  margin-top: 33px;
    margin-bottom: 23px;
    cursor: pointer;
`;

const Strong = styled.strong`
  font-weight: 700;
`;

const DashboardButton = styled.button`
  font-family: DM Sans, sans-serif;
  font-size: 20px;
  margin-top: 28px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  background-color: #0859de;
  color: white;
  border-radius: 8px;
  &:focus {
    outline: 2px solid #fff;
  }
`;
