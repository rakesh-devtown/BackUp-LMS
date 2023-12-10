// import React, { useEffect, useState } from "react"; // Add useState here
// import { Button, Card, Typography, notification } from 'antd';
// import { useNavigate } from "react-router-dom";
// import { serviceDelete, serviceGet } from "../../utils/api";
// import useAuthStore from "../../store/authStore"
// import styled from 'styled-components';

// const { Title, Paragraph } = Typography;
// const StyledContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-color: white;
// `;

// const StyledCard = styled(Card)`
//   /* Add your styles for the Card component */
// `;

// const StyledButton = styled(Button)`
//   /* Add your styles for the Button component */
// `;

// const SessionLimit = () => {
//   const [sessions, setSessions] = useState([]); // Now useState is defined

//   const user = useAuthStore(state => state.user);
//   const screenLimitReached = useAuthStore(state => state.screenLimitReached);
//   const clearSessions = useAuthStore(state => state.clearSessions);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         if(user && screenLimitReached){
//           const {data:{screenSessions}} = await serviceGet(`student/student-api/v1/screen/${user?._id}`)
//           setSessions(screenSessions);
//         }
//         else{
//           navigate('/')
//         }
//       } catch (error) {
//         console.log(error);
//         notification.error({ message: error.message });
//       }
//     };
//     fetchSessions();
//   }, [user, screenLimitReached]);

//   const navigateToHomePage = () => {
//     navigate("/"); // Navigate to the home page ("/home")
//   };

//   const clearAllSession = async()=>{
//     try {
//       const {success, message} = await serviceDelete(`student/student-api/v1/screen?studentId=${user._id}`)
//       if(success){
//         clearSessions();
//         navigate('/programs');
//       }
//     } catch (error) {
//       notification.error({ message: 'Something went wrong' });
//     }
//   }

//   const clearSession = async(sessionId)=>{
//     try {
//       const {success, message} = await serviceDelete(`student/student-api/v1/screen?screenSessionId=${sessionId}`)
      
//       if(success){
//         clearSessions();
//         navigate('/programs');
//       }
//     } catch (error) {
//       notification.error({ message: 'Something went wrong' });
//     }
//   }

//   return (
//     <StyledContainer>
//       <StyledButton onClick={navigateToHomePage}>Back</StyledButton>
//       <StyledCard title="Active Session Limit Reached">
//         <Title level={4}>You have reached your limit of 2 active sessions on DevTown. Please end another session before logging in.</Title>
//         {screenLimitReached?.map((e) => {
//           const d = new Date(e?.lastLogin);
//           return (
//             <StyledCard key={e._id}>
//               <Paragraph>{`${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`}</Paragraph>
//               <StyledButton onClick={() => clearSession(e._id)}>Log Out</StyledButton>
//             </StyledCard>
//           )
//         })}
//         <StyledButton onClick={clearAllSession}>Clear all Sessions</StyledButton>
//       </StyledCard>
//     </StyledContainer>
//   );
// };

// export default SessionLimit;


























































































// // import React from "react";
// // import {
// //   Button,
// //   Card,
// // } from "antd";
// // import {
// //   BackButton,
// //   CardContainer,
// //   SessionLimitContainer,
// //   Title,
// //   Description,
// //   ClearButton,
// //   ButtonContainer,
// //   Box,
// //   LoginTime,
// //   ClearAllButton,
// // } from "../../styles/SessionLimit.styles";
// // import { useNavigate } from "react-router-dom";

// // const SessionLimit = () => {
// //   const navigate = useNavigate();

// //   const navigateToHomePage = () => {
// //     navigate("/");
// //   };

// //   return (
// //     <SessionLimitContainer>
// //       <BackButton onClick={navigateToHomePage}>Back</BackButton>
// //       <CardContainer>
// //         <Title>Active Session Limit Reached</Title>
// //         <Description>
// //           You have reached your limit of 2 active sessions on DevTown. Please end another session before logging in.
// //         </Description>
// //         <Box>
// //           <LoginTime> October 29, 2023</LoginTime>
// //           <ClearButton>Log Out </ClearButton>
// //           </Box>
// //         <Box>
// //           <LoginTime> October 29, 2023</LoginTime>
// //           <ClearButton>Log Out </ClearButton>
// //           </Box>       
          
         
        
// //         <ClearAllButton>Clear all Sessions</ClearAllButton>
// //       </CardContainer>
// //     </SessionLimitContainer>
// //   );
// // };

// // export default SessionLimit;
