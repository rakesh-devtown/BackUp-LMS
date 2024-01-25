import styled from 'styled-components';

const DevAreaContainer = styled.div`
  display: flex;
  background-color: rgb(30,30,30);
`;


const DevAreaOutlet = styled.div`
  height: 100vh;
  padding-top: 4px;
  width: 98%;
`;
const DevScreenOuterContainer = styled.div`
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
const DevScreenImage = styled.img`
  width: 50%;
  height: 50%;
`;


const DevScreenImageOuterContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DevIndexScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export {DevScreenImage,DevIndexScreen,DevScreenImageOuterContainer,  DevAreaContainer, DevAreaOutlet, DevScreenOuterContainer};