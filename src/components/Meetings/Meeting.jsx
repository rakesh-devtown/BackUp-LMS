import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import { servicePost } from '../../utils/api';
import { setHeader } from '../../utils/header';
import { notification } from 'antd';

function Meeting() {

    const { id: meetingNumber } = useParams();
  const [signature, setsignature] = useState('')
  const user= useAuthStore((state) => state.user);
//   const user = useSelector(profileState);
  const userName = `${user.firstName}-${user.email}`;
  let { state } = useLocation();
  const {url} = state;
  const pass = url.split('=')[1];
  const getSignature = async () => {
    try {
        setHeader("auth" , localStorage.getItem("token"));
      const { signature } = await servicePost(
        "student/generateSign",
        {
          meetingNumber,
        },
       
      );
        setsignature(signature);
       
    } catch (e) {
      notification.error({
        message: "Error",
        description: e.message,
      
      })
    }
  };
  const markAttendance = async()=>{
    try {
        setHeader("auth" , localStorage.getItem("token"));
      const { message } = await servicePost(
        "student/student-api/v1/attendance",
        {
          join_time : new Date(),
          meetingNumber,
          event: 'joined',
          email: user?.email
        },
        
      );
    } catch (e) {
      notification.error({
        message: "Error",
        description: e.message,
      
      })
    }
  }

  useEffect(() => {
  getSignature();
  markAttendance();
  }, [])
  
  return (
    <>
    <iframe
      title="Meeting"
     
      // src={`http://localhost:3001/?sign=${signature}&type=student&name=${userName}&path=http://localhost:3000/meeting/ended&pass=${pass}`}
      src={`https://www.meet.devtown.in/?sign=${signature}&type=student&name=${userName}&path=https://development.d3pa2xipcjjv0z.amplifyapp.com/meeting/ended&pass=${pass}`}
      frameborder="0"
      height="100%"
      width="100%"
    ></iframe>
   
  </>
  )
}

export default Meeting