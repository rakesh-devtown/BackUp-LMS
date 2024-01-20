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
import useWindowSize from "../../hooks/useWindowSixe";  
const SessionLimit = () => {
  const [sessions, setSessions] = useState([]); // Now useState is defined
  const {width} = useWindowSize();
  const user = useAuthStore((state) => state.user);
  const screenLimitReached = useAuthStore((state) => state.screenLimitReached);
  const clearSessions = useAuthStore((state) => state.clearSessions);
  const navigate = useNavigate();
  const clearSession = async (sessionId) => {
    console.log(sessionId);
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
  const clearAllSession = async () => {
    try {
      const { success, message } = await serviceDelete(
        `student/student-api/v1/screen?studentId=${user._id}`
      );
      if (success) {
        clearSessions();
        navigate("/programs");
      }
    } catch (error) {
      notification.error({ message: "Something went wrong" });
    }
  };

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
      <Button
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "6px 15px",
          border: "1px solid #012353",
          borderRadius: "4px",
          display: "inline-flex",
          gap: "10px",
          color: "black",
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "1.4",
          fontFamily: "'Manrope', sans-serif",
        }}
      >
        Back
      </Button>

      <CardContainer>
        <Title>Active Session Limit Reached</Title>
        <Description>
          You have reached your limit of 2 active sessions on DevTown. Please
          end another session before logging in.
        </Description>
        {sessions.map((e  , idx) => (
          <Box key={idx} style={{borderRadius:"10px"  , display:"flex" }}>

            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <div style={{}}>
                {e?.os?.includes("Windows") ? (
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/windows-10.png"
                    alt="windows-10"
                  />
                ) : e?.os?.includes("Mac") ? (
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/ios-filled/50/mac-os.png"
                    alt="mac-os"
                  />
                ) : e?.os?.includes("Android") ? (
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/plasticine/100/android-os.png"
                    alt="android-os"
                  />
                ) : e?.os?.includes("Linux") ? (
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/linux--v1.png"
                    alt="linux--v1"
                  />
                ) : (
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/pulsar-line/48/laptop-and-phone.png"
                    alt="laptop-and-phone"
                  />
                )}
              </div>
              <LoginTime style={{color:"#595a5c"}}>
                {" "}
                {`${new Date(e?.lastLogin).getMonth() + 1}/${new Date(
                  e?.lastLogin
                ).getDate()}/${new Date(e?.lastLogin).getFullYear()}`}{" "}
              </LoginTime>
            </div>
                  <div style={{color:"#595a5c"}}>
                    { width >500   && e?.os}
                  </div>
            <Button
              onClick={() => clearSession(e._id)}
              style={{
                marginLeft :"10px" ,
                padding: "6px 15px",
                border: "1px solid #012353",
                borderRadius: "4px",
                display: "inline-flex",
                gap: "10px",
                color: "black",
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "1.4",
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              {" "}
              Logout{" "}
            </Button>
          </Box>
        ))}

        <ClearAllButton
          style={{ cursor: "pointer" }}
          onClick={() => clearAllSession()}
        >
          {" "}
          Clear all Sessions
        </ClearAllButton>
      </CardContainer>
    </SessionLimitContainer>
  );
};

export default SessionLimit;
