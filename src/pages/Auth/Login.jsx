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
} from "../../styles/LoginPage.styles.js";
import Config from "../../config.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
    <Layout className="layout" >
      <StyledLoginPage
       
      >
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
                <InputUsername placeholder="Username" />
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
                <Link to="/auth/forgot-password">
                  <ForgotPassword> Forgot your password?</ForgotPassword>
                </Link>
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
                <LoginContainer>
  <GoogleOAuthProvider clientId={googleClientId}>
    <GoogleAuthLogin />
  </GoogleOAuthProvider>
  <LoginLinkContainer>
    <LoginLink to="/auth/magic-login">
      <img
        width="25"
        height="25"
        src="https://img.icons8.com/ios/50/000000/fantasy.png"
        alt="fantasy"
      />
    </LoginLink>
    <p>Magic Link</p>
  </LoginLinkContainer>
</LoginContainer>
             
              </Form.Item>
            </Form>
          </StyledLoginForm>
        </StyledFormContainer>
        <StyledImg
          src="https://www.student-platform.devtown.in/static/media/Login_image.d23150f57543b9b841d955f9245b17ca.svg"
          alt="Login"
        />
      </StyledLoginPage>
    </Layout>
  );
}
