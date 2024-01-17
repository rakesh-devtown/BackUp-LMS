import React, { useEffect, useState } from "react";
import { setHeader } from "../../utils/header";
import { serviceGet, servicePost } from "../../utils/api";
import MeetEndSVG from "../../assets/images/meetEnd.svg";

function MeetingEnded() {
  const query = new URLSearchParams(window.location.search);
  const meetingNumber = query.get("meetingNumber");
  const email = query.get("email");
  const [meetingStatus, setmeetingStatus] = useState("");

  const markAttendance = async () => {
    try {
      setHeader("auth", localStorage.getItem("token"));
      const { message } = await servicePost(
        "student/student-api/v1/attendance",
        {
          leave_time: new Date(),
          meetingNumber,
          event: "left",
          email,
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const getMeetingStatus = async () => {
    try {
      //   dispatch(setLoadingTrue());
      setHeader("auth", localStorage.getItem("token"));
      const { status } = await serviceGet(
        `student/meeting/status/${meetingNumber}`
      );
      setmeetingStatus(status);
    } catch (e) {
      console.log(e);
    } finally {
      //   dispatch(setLoadingFalse());
    }
  };
  useEffect(() => {
    getMeetingStatus();
    markAttendance();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100vh",
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          borderRadius: "0.5rem",
          height: "100%",
          width: "50%",
          height: "50%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={MeetEndSVG}
            alt="Meet ended"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.25rem",
            paddingTop: "1rem",
          }}
        >
          {meetingStatus === "waiting"
            ? "Your Meeting has not started yet, please reload the page and wait on Zoom screen"
            : "Your meeting has ended, Thanks for joining"}
        </div>
      </div>
    </div>
  );
}

export default MeetingEnded;
