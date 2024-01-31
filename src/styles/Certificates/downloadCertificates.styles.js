import styled from 'styled-components';
import { Button } from 'antd';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: pulse;
`;

const LoadingBox = styled.div`
  margin-right: 2rem;
  height: 595px;
  width: 841px;
  overflow: hidden;
  position: relative;
  background-color: #e2e8f0;
  box-shadow: 0px 0px 15px 5px #9d9696;
`;

const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

const ButtonContainerCertificate = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;
const NoteContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #f87171;
  font-size: 2rem;
  font-weight: 500;
`;

const StyledButtonDownLoad = styled(Button)`
  display: flex;
  justify-content: center;
  padding: 0.3rem 1rem;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.375rem;
  color: #fff;
  background-color: #4f46e5;
  &:hover {
    background-color: #4338ca;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.125rem #a5b4fc, 0 0 0 0.25rem #818cf8;
  }
`;

const DocumentContainer = styled.div`
  width: 100%;
`;

export { LoadingContainer, LoadingBox, Container, ButtonContainerCertificate, StyledButtonDownLoad, DocumentContainer ,    NoteContainer };