import React from "react";
import { Flex, Form, Space } from "antd";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleAuthLogin } from "./GoogleAuthLogin";
import { Link } from "react-router-dom";
import {
  BlueText,
  FlexContainer,
  InputUsername,
  LoginContainer,
  LoginLink,
  SignInText,
  StyledButton,
  StyledHeading,
  StyledHr,
  StyledLabel,
  StyledP,
  StyledPassword,
  StyledSignInForm,
} from "../../styles/LoginPage.styles";
import loginUiStore from "../../store/loginUi.store";
import useWindowSize from "../../hooks/useWindowSize";

function MobileLogin() {
  const mobileCurrentPage = loginUiStore((state) => state.mobileCurrentPage);
  const setMobileCurrentPage = loginUiStore(
    (state) => state.setMobileCurrentPage
  );

  const width = useWindowSize()

  return (
    <StyledSignInForm width={width} name="login-form">
      <StyledHeading>Hey Buddy,</StyledHeading>
      {/* <Form.Item name="form-text"> */}
      <StyledP>Create an account and start learning with us!</StyledP>
      {/* </Form.Item> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GoogleOAuthProvider>
          <GoogleAuthLogin />
        </GoogleOAuthProvider>
      </div>
      <LoginContainer>
        <LoginLink to="/auth/magic-login">
          <img
            width="25"
            height="25"
            color="blue"
            src="https://img.icons8.com/ios/50/000000/fantasy.png"
            alt="maginc Link icons"
          />
          <p style={{ color: "#6B7280" }}>Sign In with Magic Link </p>
        </LoginLink>
      </LoginContainer>
      <FlexContainer>
        <StyledHr />
        <SignInText>Or sign up with Email </SignInText>
        <StyledHr />
      </FlexContainer>

      <Space size={10} direction="vertical">
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please enter your email!",
            },
          ]}
        >
          <StyledLabel>Email Address</StyledLabel>
          <InputUsername placeholder="examplemail@gmail.com" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
            {
              min: 1,
              message: "Password must be at least 8 characters long.",
            },
          ]}
        >
          <StyledLabel>Password</StyledLabel>
          <StyledPassword placeholder="Min. 8 characters" type="password" />
        </Form.Item>
      </Space>

      <Form.Item>
        <StyledButton
          type="primary"
          htmlType="submit"
          className="login-button"
          children="Login"
          onClick={() => {
            setMobileCurrentPage("session-limit");
          }}
        >
          Login
        </StyledButton>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link onClick={() => setMobileCurrentPage("forget-password")}>
            <BlueText>Forget Password?</BlueText>
          </Link>
        </div>
      </Form.Item>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "black",
        }}
      >
        <Flex justify="center" align="center">
          Don't have an account?{" "}
          <BlueText

            onClick={() => {
              setMobileCurrentPage("register");
            }}
          >
            Create
          </BlueText>
        </Flex>
      </div> */}
    </StyledSignInForm>
  );
}

export default MobileLogin;
