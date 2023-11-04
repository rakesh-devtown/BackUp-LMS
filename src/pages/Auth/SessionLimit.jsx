import React from "react";
import {
  Button,
  Card,
} from "antd";
import {
  BackButton,
  CardContainer,
  SessionLimitContainer,
  Title,
  Description,
  ClearButton,
  ButtonContainer,
  Box,
  LoginTime,
  ClearAllButton,
} from "../../styles/SessionLimit.styles";
import { useNavigate } from "react-router-dom";

const SessionLimit = () => {
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate("/");
  };

  return (
    <SessionLimitContainer>
      <BackButton onClick={navigateToHomePage}>Back</BackButton>
      <CardContainer>
        <Title>Active Session Limit Reached</Title>
        <Description>
          You have reached your limit of 2 active sessions on DevTown. Please end another session before logging in.
        </Description>
        <Box>
          <LoginTime> October 29, 2023</LoginTime>
          <ClearButton>Log Out </ClearButton>
          </Box>
        <Box>
          <LoginTime> October 29, 2023</LoginTime>
          <ClearButton>Log Out </ClearButton>
          </Box>       
          
         
        
        <ClearAllButton>Clear all Sessions</ClearAllButton>
      </CardContainer>
    </SessionLimitContainer>
  );
};

export default SessionLimit;
