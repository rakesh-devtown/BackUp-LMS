import React, { useEffect, useState } from "react";
import { Flex, Form, Space, message } from "antd";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleAuthLogin } from "./GoogleAuthLogin";
import { Link, useNavigate } from "react-router-dom";
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
import useAuthStore from "../../store/authStore";
import Config from "../../config.js";
import styled from "styled-components";

const googleClientId = Config.googleClientId; // Access the client ID from the config

function MobileLogin() {
  const mobileCurrentPage = loginUiStore((state) => state.mobileCurrentPage);
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated, isGoogleAuthenticated } = useAuthStore();
  const screenLimitReached = useAuthStore((state) => state.screenLimitReached);
  const navigate = useNavigate();
  const setMobileCurrentPage = loginUiStore((state) => state.setMobileCurrentPage);

  const width = useWindowSize();

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const { email, password } = values;
      const response = await login({
        email: email.toLowerCase(),
        password,
      });
    } catch (error) {
      message.error(
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (screenLimitReached) setMobileCurrentPage("session-limit");
  }, [screenLimitReached, navigate, setMobileCurrentPage]);

  useEffect(() => {
    if (isAuthenticated || isGoogleAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, isGoogleAuthenticated, navigate]);

  return (
    <StyledSignInForm width={width} name="login-form" onFinish={handleSubmit}>
      <Space size={5} direction="vertical">
        <StyledHeading>Hey Learner,</StyledHeading>
        {/* <Form.Item name="form-text"> */}
        <StyledP>Unlock your learning journey! Log in now to explore and discover.</StyledP>
        {/* </Form.Item> */}
      </Space>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GoogleOAuthProvider clientId={googleClientId}>
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

      <Space size={12.7} direction="vertical">
        <Field>
          <StyledLabel>Email Address</StyledLabel>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please enter your email!",
              },
            ]}
            normalize={(value) => value.trim()}
          >
            <InputUsername placeholder="support@devtown.in" />
          </Form.Item>
        </Field>
        <Field>
          <StyledLabel>Password</StyledLabel>
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
            <StyledPassword placeholder="Min. 8 characters" type="password" />
          </Form.Item>
        </Field>
      </Space>

      <Form.Item>
        <StyledButton type="primary" htmlType="submit" className="login-button" children="Login">
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

const Field = styled.div`
  display: flex;
  gap: 8.2px;
  flex-direction: column;
`;

export default MobileLogin;
