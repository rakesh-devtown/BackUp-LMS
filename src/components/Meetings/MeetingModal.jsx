import React, { useState } from "react";
import { Button, Modal, notification } from "antd";
import useAuthStore from "../../store/authStore";
import { servicePost } from "../../utils/api";
import { setHeader } from "../../utils/header";
import { useNavigate } from "react-router-dom";
import useLoadingStore from "../../store/loadingStore";
import axios from "axios";
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
  const setLoading = useLoadingStore((state) => state.setLoading);

  const user = useAuthStore((state) => state.user);
  
  const handleAttendance = async () => {
    const { email } = user;
    try {
      setLoading(true)
      setHeader("auth" , localStorage.getItem("token"));
      const { data, success, message } = await servicePost(
        `student/student-api/v1/webhook/attendance-gmeet`,
        {
          meetingId: meetingNumber,
          user:email,
        },
        axios.defaults.headers.common
      );
      setOpen(false);
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.message,
      }); 
    } finally {
      setLoading(false)
    }
  };
  const navigate = useNavigate() ;

  const handleOk = () => {
    handleAttendance();
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
