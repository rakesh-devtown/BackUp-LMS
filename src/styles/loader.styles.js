import styled, { keyframes } from 'styled-components';

const loaderAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.2) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoaderInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 100vh;
  border-radius: 50%;
  animation: ${loaderAnimation} 2s infinite linear;
  opacity: 0;
  transform: scale(0.2) rotate(0deg);
`;
const LoaderOuterContainer = styled.div`
  background-color: #BEE3F8;
  opacity: 1;
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
export { LoaderContainer, LoaderInnerContainer,LoaderOuterContainer };