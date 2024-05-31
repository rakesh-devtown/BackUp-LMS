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
  StyledButton,
  StyledClearButton,
  SessionLimitContainers,
  OsColor,
} from "../../styles/SessionLimit.styles";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import { serviceDelete, serviceGet } from "../../utils/api";
import useWindowSize from "../../hooks/useWindowSize";
import useLoadingStore from "../../store/loadingStore";
import { ArrowLeftOutlined } from "@ant-design/icons";


const SessionLimit = () => {
  const [sessions, setSessions] = useState([]); // Now useState is defined
  const { width } = useWindowSize();
  const user = useAuthStore((state) => state.user);
  const screenLimitReached = useAuthStore((state) => state.screenLimitReached);
  const clearSessions = useAuthStore((state) => state.clearSessions);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const navigate = useNavigate();
  const clearSession = async (sessionId) => {
    try {
      setLoading(true);
      const { success, message } = await serviceDelete(
        `student/student-api/v1/screen?screenSessionId=${sessionId}`
      );

      if (success) {
        clearSessions();
        navigate("/programs");
      }
    } catch (error) {
      notification.error({ message: "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };
  const clearAllSession = async () => {
    try {
      setLoading(true);
      const { success, message } = await serviceDelete(
        `student/student-api/v1/screen?studentId=${user._id}`
      );
      if (success) {
        clearSessions();
        navigate("/programs");
      }
    } catch (error) {
      notification.error({ message: "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };
  const fetchSessions = async () => {
    try {
      if (user && screenLimitReached) {
        setLoading(true);
        const {
          data: { screenSessions },
        } = await serviceGet(`student/student-api/v1/screen/${user?._id}`);
        setSessions(screenSessions);
      } else {
        navigate("/programs");
      }
    } catch (error) {
      notification.error({ message: error.message });
    } finally {
      setLoading(false);
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
      <StyledButton onClick={navigateToHomePage}>
        <ArrowLeftOutlined /> Back
      </StyledButton>

      <CardContainer>
        <Title>Active Session Limit Reached</Title>
        <Description>
          You have reached your limit of 2 active sessions on DevTown. Please
          end another session before logging in.
        </Description>
        {sessions.map((e, idx) => (
          <Box key={idx}>
            <SessionLimitContainers>
              <div>
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
                ) : (e?.os?.includes("Android") || e?.os?.includes("Linux armv81")) ? (
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
              <LoginTime>
                {" "}
                {`${new Date(e?.lastLogin).getMonth() + 1}/${new Date(
                  e?.lastLogin
                ).getDate()}/${new Date(e?.lastLogin).getFullYear()}`}{" "}
              </LoginTime>
            </SessionLimitContainers>
            <OsColor>{width > 500 && e?.os}</OsColor>
            <StyledClearButton onClick={() => clearSession(e._id)}>
              {" "}
              Logout{" "}
            </StyledClearButton>
          </Box>
        ))}

        <ClearAllButton onClick={() => clearAllSession()}>
          {" "}
          Clear all Sessions
        </ClearAllButton>
      </CardContainer>
    </SessionLimitContainer>
  );
};

export default SessionLimit;
