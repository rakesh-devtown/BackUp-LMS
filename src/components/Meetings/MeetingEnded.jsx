import React, { useEffect, useState } from "react";
import { setHeader } from "../../utils/header";
import { serviceGet, servicePost } from "../../utils/api";
import MeetEndSVG from "../../assets/images/meetEnd.svg";
import { MeetingContainer, MeetingImageContainer, MeetingInnerContainer, MeetingStatusContainer } from "../../styles/meeting.styles";

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
    <MeetingContainer>
      <MeetingInnerContainer>
      <MeetingImageContainer>
          <img
            src={MeetEndSVG}
            alt="Meet ended"
            style={{ width: "100%", height: "100%" }}
          />
        </MeetingImageContainer>
        <MeetingStatusContainer>
          {meetingStatus === "waiting"
            ? "Your Meeting has not started yet, please reload the page and wait on Zoom screen"
            : "Your meeting has ended, Thanks for joining"}
        </MeetingStatusContainer>
      </MeetingInnerContainer>
    </MeetingContainer>
  );
}

export default MeetingEnded;
