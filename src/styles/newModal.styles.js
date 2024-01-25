import styled from "styled-components";

const NewModalFeedbackContainer = styled.div`
  font-weight: bold;
  color: #9865e8;
  margin-top: 80px;
  margin-bottom: 80px;
  height: 200px;
  font-size: 1.125em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: underline;
  cursor: pointer;
`;

const NewModalButton = styled.button`
  margin-top: 16px;
  margin-bottom: 12px;
  padding: 8px 16px;
  background-color: white;
  color: #928e8e;
  font-weight: bold;
  border-radius: 8px;
  font-size: 1.125em;
`;

const NewModalUpdateContainer = styled.div`
  color: white;
  background: linear-gradient(to bottom right, #7b68ee, #1e90ff);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 1.125em;
`;

const NewModalLogoutText = styled.p`
  margin-top: 8px;
  font-size: 1.125em;
`;

export { NewModalFeedbackContainer, NewModalButton
    
    , NewModalUpdateContainer
    , NewModalLogoutText
};
