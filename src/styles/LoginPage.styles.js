import styled from "styled-components";
import Input from "antd/es/input/Input";
import { Button } from "antd";
import { Link } from "react-router-dom";

export const StyledLogo = styled.img`
  width: auto;
  height: 3rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  max-width: 100%;
  vertical-align: middle;
  overflow-clip-margin: content-box;
  overflow: clip;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledLoginPage = styled.div`
  display: flex;
  overflow: hidden;
  margin: 0;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: black;

`;
export const StyledImg = styled.img`
  @media (max-width: 1207px) {
    display: none;
  }
`;

export const StyledFormContainer = styled.div`
  width: 80%;
  color :white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledLoginForm = styled.div`
  padding: 2.5rem;
  background-color: white;
  border-radius: 0.5rem;
  max-width: 27rem;
  width: 100%;
  color: black; 
`;
export const StyledHeading = styled.h1`
  margin-top: 1.5rem;
  font-weight: 900;
`;
export const StyledDevTown = styled.h1`
  color: rgb(100 34 205);
    font-weight: 900;
`;
export const StyledP = styled.p`
  margin-top: 1.5rem;
  margin: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: left;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25rem;
`;
export const InputUsername = styled(Input)`
  height: 2.5rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-color: rgb(209 213 219);
  border-width: 1px;
  border-radius: 0.5rem;
  appearance: none;
  width: 100%;
  display: block;
  position: relative;
  margin: 0;
`;
export const StyledPassword = styled(Input.Password)`
  background-color: white;
  height: 2.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-color: rgb(209 213 219);
  border-width: 1px;
  border-radius: 0.5rem;
  align-items: center;
  width: 100%;
  position: relative;
`;
export const ForgotPassword = styled.p`
  color: #1677ff;
  text-align: right;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;


`;
export const StyledButton = styled(Button)`
  height: 2.5em;
  width: 100%;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
`;
export const CenteredButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

export const LoginLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LoginLink = styled(Link)`
  border: 1px solid;
  border-color: #e3e4e7;
  padding: 8px;
  padding-right: 140px;
  display: flex;
  margin: auto;
  width: 100%;
  justify-content: space-between;  
  border-radius: 5px;

`;
export const StyledHr = styled.hr`
  flex: 1;
  border-top: 2px solid #E5E7EB;
  
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  margin-top: 1rem;
`;
export const SignInText = styled.p`
  text-align: center;
  font-weight: 500;
  color: #6B7280;
`;


export const BlueText = styled.p`
  color: #1677ff;
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
`;
