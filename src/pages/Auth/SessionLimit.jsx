

import React, { useEffect, useState } from "react";
import { Button, Card, notification } from "antd";
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
import useAuthStore from "../../store/authStore";
import { serviceDelete, serviceGet } from "../../utils/api";

const SessionLimit = () => {
  const [sessions, setSessions] = useState([]); // Now useState is defined

  const user = useAuthStore((state) => state.user);
  const screenLimitReached = useAuthStore((state) => state.screenLimitReached);
  const clearSessions = useAuthStore((state) => state.clearSessions);
  const navigate = useNavigate();
  const clearSession = async (sessionId) => {
    console.log(sessionId)
    try {
      const { success, message } = await serviceDelete(
        `student/student-api/v1/screen?screenSessionId=${sessionId}`
      );

      if (success) {
        clearSessions();
        navigate("/programs");
      }
    } catch (error) {
      notification.error({ message: "Something went wrong" });
    }
  };
    const clearAllSession = async()=>{
    try {
      const {success, message} = await serviceDelete(`student/student-api/v1/screen?studentId=${user._id}`)
      if(success){
        clearSessions();
        navigate('/programs');
      }
    } catch (error) {
      notification.error({ message: 'Something went wrong' });
    }
  }

  const fetchSessions = async () => {
    try {
      if (user && screenLimitReached) {
        const {
          data: { screenSessions },
        } = await serviceGet(`student/student-api/v1/screen/${user?._id}`);
        setSessions(screenSessions);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      notification.error({ message: error.message });
    }
  };
  useEffect(() => {
    fetchSessions();
  }, [user, screenLimitReached]);
  const navigateToHomePage = () => {
    navigate("/auth");
  };

  return (
    <SessionLimitContainer>
      <BackButton onClick={navigateToHomePage}>Back</BackButton>
      <CardContainer>
        <Title>Active Session Limit Reached</Title>
        <Description>
          You have reached your limit of 2 active sessions on DevTown. Please
          end another session before logging in.
        </Description>
        {sessions.map((e) => (
          <Box>
            <LoginTime>
              {" "}
              {`${new Date(e?.lastLogin).getMonth() + 1}/${new Date(
                e?.lastLogin
              ).getDate()}/${new Date(e?.lastLogin).getFullYear()}`}{" "}
            </LoginTime> 

            <ClearButton style={{cursor : "pointer"}} onClick={() => clearSession(e._id)}>
              {" "}
              Logout{" "}
            </ClearButton>
          </Box>
        ))}
       

        <ClearAllButton style={{cursor : "pointer"}} onClick={() => clearAllSession()}  > Clear all Sessions</ClearAllButton>
      </CardContainer>
    </SessionLimitContainer>
  );
};

export default SessionLimit;
