import styled from "styled-components";
import Input from "antd/es/input/Input";
import { Button, Form } from "antd";
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
  background-color: black;
`;
export const StyledImg = styled.img`
  @media (max-width: 1207px) {
    display: none;
  }
`;

export const StyledFormContainer = styled.div`
  width: 80%;
  color: white;
  display: flex;
  flex-direction: row;
  width: 80%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledLoginForm = styled.div`
  background-color: white;
  max-width: 500px;
  padding: ${props => props.width > 1150 ? "0 37.5px" : "0 37.5px"};
  width: 100%;
  color: black;
  margin: auto;
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: opacity 0.02s 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledSignInForm = styled(Form)`
  display: flex;
  flex-direction: column;
  /* padding: 0 1rem; */
  max-width: 500px;
  min-width: 350px;
  width: 100%;
  justify-content: center;
  gap: ${props => props.width >= 992 ? "16.5px" : "22px"};
  .ant-form-item{
    margin-bottom: 0;
  }
`;

export const StyledHeading = styled.h1`
  font-weight: 900
`;
export const StyledDevTown = styled.h1`
  color: rgb(100 34 205);
  font-weight: 900;
  font-weight: 900;
`;
export const StyledP = styled.p`
  text-align: left;
  font-weight: 500;
  font-size: 13.5px;
  font-size: 13.5px;
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
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
export const StyledButton = styled(Button)`
  width: 100%;
  padding: 1.5rem 0rem 1.5rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0rem 1.5rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.3rem;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '1'}rem;
  font-size: 20px;
  font-weight: 700;
  background: #0859de;
  color: white;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '1'}rem;
  font-size: 20px;
  font-weight: 700;
  background: #0859de;
  color: white;
  font-weight: 700;
  font-size: 18px;
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
  justify-content: center;
  max-width: 500px;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  width: 100%;
`;

export const LoginLink = styled(Link)`
  border: 1px solid;
  border-color: #e3e4e7;
  padding: 8px;
  width: 100%;

  padding: 8px;
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 5px;
  justify-content: center;
  gap: 5px;
`;
export const StyledHr = styled.hr`
  flex: 1;
  border-top: 1px solid #e5e7eb;
  border-top: 1px solid #e5e7eb;
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;
export const SignInText = styled.p`
  text-align: center;
  font-weight: 500;
  font-weight: 500;
`;

export const ActiveSessionPara = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;

export const CarrersHadding = styled.h1`
font-size: 23px;
font-weight: 400;
line-height: 30px;
letter-spacing: 0em;
text-align: center;

`;  
export const BlueText = styled.p`
  color: #0859de;
  font-weight: 500;
  cursor: pointer;
`;

export const StyledLabel = styled.p`
  margin-bottom: 7px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: start;
  height: 100%;
  position: relative;
  align-items: center;

`; 