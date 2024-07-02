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
  justify-content: center;
  align-items: center;
`;

export const StyledLoginForm = styled.div`
  background-color: white;
  max-width: 500px;
  padding: ${(props) => (props.width > 1150 ? "0 37.5px" : "0 37.5px")};
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
  border-radius: 19.773px;
`;

export const StyledSignInForm = styled(Form)`
  display: flex;
  /* width: 375px; */
  width: ${props=> props.width<410 ? "320px" : "375px"};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.width >= 992 ? "12.95px" : "22px")};
  .ant-form-item {
    margin-bottom: 0;
    width: 100%;
  }
  .ant-form-item-label{
    padding-bottom: 6.15px;
    color: #081735;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 12.293px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .ant-space{
    width: 100%;
  }
`;

export const StyledHeading = styled.h1`
  color: #081735;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const StyledDevTown = styled.h1`
  color: rgb(100 34 205);
  font-weight: 900;
`;
export const StyledP = styled.p`
  font-feature-settings: 'clig' off, 'liga' off;
  text-align: left;
  color: #232323;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const InputUsername = styled(Input)`
  /* height: 2.5rem;
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
  margin: 0; */
  color: #4A4A4A;
  padding: 11.651px 10.965px;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 14px;
`;
export const StyledPassword = styled(Input.Password)`
  /* background-color: white;
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
  position: relative; */
  color: #4A4A4A;
  padding: 11.651px 10.965px;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 14px;
`;
export const ForgotPassword = styled.p`
  color: #1677ff;
  text-align: right;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
export const StyledButton = styled(Button)`
  /* width: 100%;
  padding: 1.5rem 0rem 1.5rem 0rem;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.3rem;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "1")}rem;
  font-size: 20px;
  font-weight: 700;
  background: #0859de;
  color: white;
  font-weight: 700;
  font-size: 18px; */
  height: 42px;
  width: 100%;
  gap: 9.731px;
  border-radius: 4.865px;
  background: var(--Color-Brand-Brand-Blue, #0859DE);
  box-shadow: 0px 4.865px 9.731px 0px rgba(143, 149, 178, 0.15);
  color: var(--Color-White-100, #FFF);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 13.5px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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
`;

export const LoginLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 4.865px;
  border: 0.608px solid #d8dae5;
  gap: 10px;
  padding: 9px;
  color: #081735;
  font-size: 13.5px;
  font-weight: 500;
`;
export const StyledHr = styled.hr`
  flex: 1;
  border-top: 1px solid #e5e7eb;
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;
export const SignInText = styled.p`
  color: #232323;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BlueText = styled.p`
  color: var(--Color-Brand-Brand-Blue, #0859DE);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
  cursor: pointer;
  margin-top:3px;
`;

export const StyledLabel = styled.p`
  /* margin-bottom: 7px; */
`;

export const Container = styled.div`
  display: flex;
  justify-content: start;
  height: 100%;
  position: relative;
  align-items: center;
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
