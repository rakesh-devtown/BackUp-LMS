import styled from "styled-components";

const MeetingContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MeetingInnerContainer = styled.div`
  border-radius: 0.5rem;
  height: 100%;
  width: 50%;
`;

const MeetingImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MeetingStatusContainer = styled.div`
  text-align: center;
  font-size: 1.25rem;
  padding-top: 1rem;
`;

export { MeetingContainer, MeetingInnerContainer, MeetingImageContainer, MeetingStatusContainer};
