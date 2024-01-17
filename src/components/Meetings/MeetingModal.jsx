import React, { useState } from "react";
import { Button, Modal } from "antd";
import useAuthStore from "../../store/authStore";
import { servicePost } from "../../utils/api";
import { setHeader } from "../../utils/header";
import { useNavigate } from "react-router-dom";
const MeetingModal = ({
  open,
  setopen,
  meetingNumber,
  setOpen,
  name,
  date,
  platform = "zoom",
  url = "",
}) => {

  const user = useAuthStore((state) => state.user);
  
  const handleAttendance = async () => {
    const { email } = user;
    try {
      setHeader("auth" , localStorage.getItem("token"));
      const { data, success, message } = await servicePost(
        `student/student-api/v1/webhook/attendance-gmeet`,
        {
          meetingId: meetingNumber,
          user:email,
        },
      );
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate() ;

  const handleOk = () => {

    platform == "zoom" ? navigate(`/meeting/${meetingNumber}` , {state : {name , date  , url }}) : window.open(url, '_blank');
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      
      <Modal
        title="Do You Want to Join the Meeting ?"
        open={open  }
        onOk={handleOk}
        onCancel={handleCancel}
      >
        
      </Modal>
    </>
  );
};
export default MeetingModal;
