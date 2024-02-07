import styled from "styled-components";

const MessageContainer = styled.div`
display: flex;
  
  width: 100%;
  height: 100%;

  overflow-y: hidden;
  background-color: white;
`;
const MessageSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1F2937;
  color: white;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const MessageInnerContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;
const MessageStyledChatHeading = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  padding: 10px;
`;

const MessageSideBarTabs = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 4px;
  padding: 1px;
  padding-bottom: 2px;
  border-bottom: 1px solid gray;
  background-color: ${props => props.channel === 'general' ? 'gray' : ''};
`;
const MessageSideBarGeneralHeading = styled.div`
  color: white;
  font-size: 25px;
  font-weight: 400;
  flex-grow: 1;
  flex-direction: row;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const TabImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 4px;
`;
          
const ChatTabs = styled.div`
cursor: pointer;
display: flex;
flex-direction: column;
margin: 4px;
padding: 1px;
padding-bottom: 2px;
border-bottom: 1px solid gray;
background-color: ${props => props.channel === props.discussionChannelName ? 'gray' : ''};
`;
const ChatSideBarInnerContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  gap: 5px;
  padding: 10px;
`;
const ChatImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 4px;
`;
const ChatName = styled.div`
  flex-grow: 1;
  flex-direction: row;
  font-size : 20px;
`;

const ChatSideBarOuterContainer = styled.div`
  width: 300px;
`;
const RocketChatOuterContainer = styled.div`
  width: 100%;

`;


const SmallChatSideBarContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export { MessageContainer,SmallChatSideBarContainer  ,RocketChatOuterContainer,ChatSideBarOuterContainer, ChatImage ,ChatName,ChatSideBarInnerContainer,ChatTabs,TabImage ,  ImageContainer, MessageSideBarGeneralHeading, MessageSideBarTabs, MessageInnerContainer    , MessageSideBarContainer , MessageStyledChatHeading}