import styled from 'styled-components';

const RocketChatContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: white;
`;

const RocketChatButtonContainer = styled.div`
  z-index: 10;
  position: absolute;
  left: 2px;
  top: 3px;
`;

const RocketChatButton = styled.button`
  padding: 0;
  cursor: pointer;
  border: none;
  color: white;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 20px;
  background: transparent;
`;

const RocketChatContent = styled.div`
  margin-top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: between;
  align-items: start;
`;

const RocketChatIframe = styled.iframe`


  height: "100%";
  width: "100%";
`;

const MessageOuterContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  height: 100%;
  overflow-y: hidden;
`;


export { RocketChatContainer, RocketChatButtonContainer, RocketChatButton, RocketChatContent, RocketChatIframe 

    ,      MessageOuterContainer
};