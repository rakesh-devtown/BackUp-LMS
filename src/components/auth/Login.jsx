import React from "react";
//import './App.css';
//import 'antd/dist/antd.css'; // Import Ant Design CSS
import { Layout, Form } from "antd";
import { useNavigate } from "react-router-dom";
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
  CenteredButtonContainer,
} from "../../styles/LoginPage.styles.js";

//import styles from "../../styles/LoginPage.styles.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleAuthLogin } from "./GoogleAuthLogin.jsx";

function Login() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Username:", values.username);
    console.log("Password:", values.password);
    // Implement your login logic here
    navigate("/");
  };

  return (
    <Layout className="layout">
      <StyledLoginPage>
        <StyledFormContainer>
          <StyledLoginForm>
            <StyledLogo
              src="https://www.student-platform.devtown.in/static/media/ICON.a874e4deea467c4d46a5055eb58c4e7b.svg" // Replace with the path to your image file
              alt="Devtown Logo" // Provide a brief description of the image for accessibility
              style={{
                display: "block",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
                height: "3rem",
                marginLeft: "auto",
                maxWidth: "100%",
                marginRight: "auto",
              }}
            />
            <StyledHeading>Welcome back to</StyledHeading>
            <StyledDevTown>DevTown</StyledDevTown>
            <Form name="login-form" onFinish={onFinish}>
              <Form.Item name="form-text">
                <StyledP>
                  Login to your account to get back to your learning.
                </StyledP>
              </Form.Item>
              {/* Username input */}

              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please enter your username!",
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
                ]}
              >
                <StyledPassword placeholder="Password" type="password" />
              </Form.Item>

              <Form.Item>
                <ForgotPassword> Forgot your password?</ForgotPassword>
              </Form.Item>

              <Form.Item>
                <StyledButton
                  type="primary"
                  htmlType="submit"
                  className="login-button"
                >
                  Log in
                </StyledButton>
                <CenteredButtonContainer>
                <GoogleOAuthProvider clientId="970443825554-si54tskbc2sls46t9ip912ldii6r9nkv.apps.googleusercontent.com">
                  <GoogleAuthLogin />
                </GoogleOAuthProvider>
                </CenteredButtonContainer>

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

export default Login;
