import React, { useState, useEffect } from "react";
import { message } from "antd";
import useAuthStore from "../../store/authStore.js"; // Adjust the path according to your project structure
import { Link, useNavigate } from "react-router-dom";

import { GoogleAuthLogin } from "./GoogleAuthLogin";
import { Layout, Form } from "antd";
import {
  StyledLoginPage,
  StyledLoginForm,
  StyledFormContainer,
  StyledLogo,
  StyledHeading,
  StyledDevTown,
  StyledP,
  InputUsername,
  StyledPassword,
  ForgotPassword,
  StyledButton,
  StyledImg,
  LoginContainer,
  LoginLinkContainer,
  LoginLink,
  StyledHr,
  SignInText,
  FlexContainer,
} from "../../styles/LoginPage.styles.js";
import Config from "../../config.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Helmet } from "react-helmet";

const googleClientId = Config.googleClientId; // Access the client ID from the config

export default function Login() {
  const { login, isAuthenticated, isGoogleAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const screenLimitReached = useAuthStore((state) => state.screenLimitReached);

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const { email, password } = values;
      const response = await login({
        email: email.toLowerCase(),
        password,
      });
      // get cookie from response
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

  // navigate to main dashboard
  useEffect(() => {
    if (screenLimitReached) navigate("/auth/session-limit");
  }, [screenLimitReached, navigate]);
  useEffect(() => {
    if (isAuthenticated || isGoogleAuthenticated) {
      // Check if either isAuthenticated or isGoogleAuthenticated is true
      navigate("/programs");
    }
  }, [isAuthenticated, isGoogleAuthenticated, navigate]); // Add isAuthenticated, isGoogleAuthenticated, and navigate as dependencies

  return (
    <Layout className="layout">
      <Helmet>
        <title>Learn-DevTown Login</title>
        <meta name="Login" content="Login to learn.devtown.in" />
        <link rel="canonical" href="https://www.learn.devtown.in/auth" />
    </Helmet>
      <StyledLoginPage>
        <StyledFormContainer>
          <StyledLoginForm>
            <StyledLogo
              src="https://www.student-platform.devtown.in/static/media/ICON.a874e4deea467c4d46a5055eb58c4e7b.svg" // Replace with the path to your image file
              alt="Devtown Logo" // Provide a brief description of the image for accessibility
            />
            <StyledHeading>Welcome back to</StyledHeading>
            <StyledDevTown>DevTown</StyledDevTown>
            <Form name="login-form" onFinish={handleSubmit}>
              <Form.Item name="form-text">
                <StyledP>
                  Login to your account to get back to your learning.
                </StyledP>
              </Form.Item>
              {/* Username input */}

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
                <InputUsername placeholder="Email" />
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
                <StyledPassword placeholder="Password" type="password" />
              </Form.Item>

              <Form.Item>
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <Link to="/auth/forgot-password">
                    <ForgotPassword> Forgot your password?</ForgotPassword>
                  </Link>
                </div>
              </Form.Item>

              <Form.Item>
                <StyledButton
                  type="primary"
                  htmlType="submit"
                  className="login-button"
                  children="Login"
                  loading={loading}
                >
                  Log in
                </StyledButton>
                <FlexContainer>


                <StyledHr />
                <SignInText>Or sign in with</SignInText>
                <StyledHr />
                </FlexContainer>
                <LoginContainer>
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
                    <p>Google</p>
                  </div>
                  <LoginLinkContainer>
                    <LoginLink to="/auth/magic-login">
                      <img
                        width="30"
                        height="30"
                        color="blue"
                        src="https://img.icons8.com/ios/50/000000/fantasy.png"
                        alt="maginc Link icons"
                      />
                    </LoginLink>
                    <p>Magic Link</p>
                  </LoginLinkContainer>
                </LoginContainer>
              </Form.Item>
            </Form>
          </StyledLoginForm>
        </StyledFormContainer>
      </StyledLoginPage>
    </Layout>
  );
}
