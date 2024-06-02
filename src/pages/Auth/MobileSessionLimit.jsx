import React, { useEffect, useState } from "react";
import {
  BlueText,
  Container,
  StyledButton,
} from "../../styles/LoginPage.styles";
import { notification } from "antd";
import { serviceDelete, serviceGet } from "../../utils/api";
import useAuthStore from "../../store/authStore";
import useWindowSize from "../../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";
import useLoadingStore from "../../store/loadingStore";
import loginUiStore from "../../store/loginUi.store";
import {
  Box,
  LoginTime,
  OsColor,
  SessionLimitContainers,
  StyledClearButton,
} from "../../styles/SessionLimit.styles";

function MobileSessionLimit() {
  const [sessions, setSessions] = useState([]); // Now useState is defined
  const { width } = useWindowSize();
  const user = useAuthStore((state) => state.user);
  const screenLimitReached = useAuthStore((state) => state.screenLimitReached);
  const clearSessions = useAuthStore((state) => state.clearSessions);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const setMobileCurrentPage = loginUiStore((state) => state.setMobileCurrentPage);
  const setCurrentLeftPage = loginUiStore((state) => state.setCurrentLeftPage);
  const loadUser = useAuthStore((state) => state.loadUser);
  const navigate = useNavigate();
  const clearSession = async (sessionId) => {
    try {
      setLoading(true);
      const { success, message } = await serviceDelete(
        `student/student/v1/screen?screenSessionId=${sessionId}`
      );

      if (success) {
        clearSessions();
        window.location.reload();
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
        `student/student/v1/screen?studentId=${user.id}`
      );
      if (success) {
        clearSessions();
        loadUser();
        navigate("/");
      }
    } catch (error) {
      notification.error({ message: "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };
 // console.log(sessions);
  const fetchSessions = async () => {
    try {
      if (user && screenLimitReached) {
        setLoading(true);
        const {
          data
        } = await serviceGet(`student/student/v1/screen/${user?.id}`);
        setSessions(data);
      } else {
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

  //   const navigateToHomePage = () => {
  //     navigate("/auth");
  //   };
  // const data = [
  //   {
  //     _id: "1",
  //     os: "Windows",
  //     lastLogin: "2021-08-01T00:00:00.000Z"
  //   },
  //   {
  //     _id: "2",
  //     os: "Mac",
  //     lastLogin: "2021-08-01T00:00:00.000Z"
  //   },
  //   {
  //     _id: "3",
  //     os: "Linux",
  //     lastLogin: "2021-08-01T00:00:00.000Z"
  //   }
  // ]
  return (
    <Container>
      <div>
        <h1
          style={{
            marginBottom: "20px",
          }}
        >
          Active Session Limit Reached
        </h1>
        <p
          style={{
            marginBottom: "20px",
          }}
        >
          Sessions limit reached on DevTown. Please close another session before
          logging in.
        </p>
        <div>
          {sessions.map((e, index) => (
            <Box key={index} onClick={() => clearSession(e.id)}>
              <SessionLimitContainers>
                <div>
                  {e?.os?.includes("Windows") ? (
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/color/48/windows-10.png"
                      alt="windows-10"
                    />
                  ) : e?.os?.includes("Mac") ? (
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/ios-filled/50/mac-os.png"
                      alt="mac-os"
                    />
                  ) : e?.os?.includes("Android") ? (
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/plasticine/100/android-os.png"
                      alt="android-os"
                    />
                  ) : e?.os?.includes("Linux") ? (
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/color/48/linux--v1.png"
                      alt="linux--v1"
                    />
                  ) : (
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/pulsar-line/48/laptop-and-phone.png"
                      alt="laptop-and-phone"
                    />
                  )}
                </div>
                {e.os}
              </SessionLimitContainers>
              <LoginTime>
                {" "}
                {`${new Date(e.lastLogin).toLocaleString("default", {
                  month: "long",
                })} ${new Date(e.lastLogin).getDate()}, ${new Date(
                  e.lastLogin
                ).getFullYear()}`}
              </LoginTime>
            </Box>
          ))}

          <StyledButton onClick={() => clearAllSession()}>
            Clear all Sessions
          </StyledButton>
          <BlueText
            style={{
              textAlign: "center",
              marginTop: "20px",
            }}
            onClick={() => {
              setMobileCurrentPage("login");
            }}
          >
            Having problem with login ?
          </BlueText>
        </div>
      </div>
    </Container>
  );
}

export default MobileSessionLimit;
