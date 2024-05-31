import React, { useState, useEffect } from "react";
import { Checkbox, Flex, Modal, Space, message } from "antd";
import useAuthStore from "../../store/authStore.js"; // Adjust the path according to your project structure
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { GoogleAuthLogin } from "./GoogleAuthLogin";
import { Layout, Form } from "antd";
import {
  StyledLoginForm,
  StyledHeading,
  StyledP,
  InputUsername,
  StyledPassword,
  StyledButton,
  LoginContainer,
  LoginLink,
  StyledHr,
  SignInText,
  FlexContainer,
  BlueText,
  StyledSignInForm,
  StyledLabel,
} from "../../styles/LoginPage.styles.js";
import ForgetPass from "./ForgetPass.jsx";
import Config from "../../config.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Helmet } from "react-helmet";
import LoginCarousel from "../../components/ui/LoginCaraousel.jsx";
import loginUiStore from "../../store/loginUi.store.js";
import TermAndCondition from "../../components/ui/TermsNCondition.jsx";
import ActiveSession from "./ActiveSession.jsx";
import WrapperCareersPath from "../../components/PersonalizedCareerPaths/WrapperCareersPath.jsx";
import CareerPathHero from "../../components/PersonalizedCareerPaths/CarrerPathHero.jsx";
import useWindowSize from "../../hooks/useWindowSize.js";
import LoginMobileView from "./LoginMobileView.jsx";
import { CloseCircleFilled } from "@ant-design/icons";
import styled from "styled-components";
import OTPverify from "../../components/Forms/OTPverification.jsx";
import ResetPassword from "../../components/Forms/ResetPassword.jsx";
import SuccessBox from "../../components/Forms/Success.jsx";
import SessionLimit from "./SessionLimit.jsx";

const googleClientId = Config.googleClientId; // Access the client ID from the config

export default function Login() {
  const [isConditionModalOpen, setIsConditionModalOpen] = useState(false);
  const [signuptrue, setSignupTrue] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const currentPage = loginUiStore((state) => state.currentPage);
  const setCurrentPage = loginUiStore((state) => state.setCurrentPage);
  const currentLeftPage = loginUiStore((state) => state.currentLeftPage);
  const setCurrentLeftPage = loginUiStore((state) => state.setCurrentLeftPage);
  const { login, isAuthenticated, isGoogleAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const screenLimitReached = useAuthStore((state) => state.screenLimitReached);
  const { width } = useWindowSize();

  const toggleSignUp = () => {
    setSignupTrue(!signuptrue);
  };

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
    if (screenLimitReached) setCurrentLeftPage("sessionlimit");
  }, [screenLimitReached, navigate, setCurrentLeftPage]);

  useEffect(() => {
    if (isAuthenticated || isGoogleAuthenticated) {
      // Check if either isAuthenticated or isGoogleAuthenticated is true
      navigate("/");
    }
  }, [isAuthenticated, isGoogleAuthenticated, navigate]); // Add isAuthenticated, isGoogleAuthenticated, and navigate as dependencies

  useEffect(() => {
    const toggle_button = document.querySelectorAll(".toggle");
    const main = document.querySelector(".main");
    console.log(main);

    toggle_button.forEach((btn) => {
      btn.addEventListener("click", () => {
        console.log(main);
        main.classList.toggle("sign-up-mode");
      });
    });
  }, []);

  return (
    <main className={`main ${signuptrue ? "sign-up-mode" : ""}`}>
      <Helmet>
        <title>Learn-DevTown Login</title>
        <meta name="Login" content="Login to learn.devtown.in" />
        <link rel="canonical" href="https://www.learn.devtown.in/auth" />
      </Helmet>
      <StyledBox width={width}>
        <div className="form-wrap">
          {/* Login Form */}
          <StyledLoginForm className="sign-in-form">
            {currentLeftPage === "signin" ? (
              <StyledSignInForm
                name="login-form"
                onFinish={handleSubmit}
                width={width}
                requiredMark="optional"
                layout="vertical"
              >
                <Space size={5} direction="vertical">
                  <StyledHeading>Hey Buddy,</StyledHeading>
                  <StyledP>
                    Create an account and start learning with us!
                  </StyledP>
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
                  <SignInText>Or sign in with Email </SignInText>
                  <StyledHr />
                </FlexContainer>

                <Space size={10} direction="vertical">
                  <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[
                      {
                        type: "email",
                        required: true,
                        message: "Please enter your email!",
                      },
                    ]}
                  >
                    {/* <StyledLabel>Email Address</StyledLabel> */}
                    <InputUsername placeholder="examplemail@gmail.com" />
                  </Form.Item>

                  <Form.Item
                    label="Password"
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
                    {/* <StyledLabel>Password</StyledLabel> */}
                    <StyledPassword
                      placeholder="Min. 8 characters"
                      type="password"
                    />
                  </Form.Item>
                </Space>

                <Form.Item>
                  <StyledButton
                    type="primary"
                    htmlType="submit"
                    className="login-button"
                    children="Login"
                    loading={loading}
                  >
                    Login
                  </StyledButton>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Link
                      className="toggle"
                      onClick={() => {
                        toggleSignUp();
                        setCurrentPage("forget-password");
                      }}
                    >
                      <BlueText>Forget Password?</BlueText>
                    </Link>
                  </div>
                </Form.Item>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "black",
                  }}
                >
                  {/* toggle to sign up page */}
                  {/* <Flex justify="center" align="center">
                        Don't have an account?{" "}
                        <BlueText onClick={() => {
                          toggleSignUp();
                        }} className="toggle">Create</BlueText>
                      </Flex> */}
                </div>
              </StyledSignInForm>
            ) : currentLeftPage === "sessionlimit" ? (
              <ActiveSession />
            ) : (
              <h1>Hello </h1>
            )}
          </StyledLoginForm>

          {/* Register form  */}

          <StyledLoginForm
            currentPage={currentPage}
            className="sign-up-form"
            width={width}
          >
            {currentPage === "signup" ? (
              <StyledRegisterForm className="" name="">
                <StyledHeading>Hi Welcome to DevTown!</StyledHeading>
                <Form.Item name="form-text">
                  <StyledP>
                    Create an account and start learning with us!
                  </StyledP>
                </Form.Item>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",

                    marginBottom: "1rem",
                  }}
                >
                  <GoogleOAuthProvider clientId={googleClientId}>
                    <GoogleAuthLogin />
                  </GoogleOAuthProvider>
                </div>

                <FlexContainer>
                  <StyledHr />
                  <SignInText>Or sign up with Email </SignInText>
                  <StyledHr />
                </FlexContainer>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      type: "text",
                      required: true,
                      message: "Please enter your Name!",
                    },
                  ]}
                >
                  <StyledLabel>Name</StyledLabel>
                  <InputUsername placeholder="Your Name" />
                </Form.Item>
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
                  <StyledPassword
                    placeholder="Min. 8 characters"
                    type="password"
                  />
                </Form.Item>
                <Form.Item>
                  <TermAndCondition
                    isConditionModalOpen={isConditionModalOpen}
                    setIsConditionModalOpen={setIsConditionModalOpen}
                    acceptTerms={acceptTerms}
                    setAcceptTerms={setAcceptTerms}
                  />
                  <Checkbox>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "5px",
                      }}
                    >
                      I agree to the{" "}
                      <BlueText onClick={() => setIsConditionModalOpen(true)}>
                        Terms and Conditions
                      </BlueText>
                    </div>
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <StyledButton
                    type="primary"
                    htmlType="submit"
                    className="login-button"
                    children="Login"
                    loading={loading}
                    onClick={() => {
                      setCurrentPage("carrer-path");
                    }}
                  >
                    Create
                  </StyledButton>
                </Form.Item>
                <Form.Item>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "-40px",
                    }}
                  ></div>
                </Form.Item>
                <Form.Item>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "-60px",
                      color: "black",
                    }}
                  >
                    <Flex justify="center" align="center">
                      Already have a Account?{" "}
                      <BlueText
                        onClick={() => {
                          toggleSignUp();
                        }}
                        className="toggle"
                      >
                        Login
                      </BlueText>
                    </Flex>
                  </div>
                </Form.Item>
              </StyledRegisterForm>
            ) : currentPage === "forget-password" ? (
              <ForgetPass
                toggleSignUp={toggleSignUp}
                nextPage={() => setCurrentPage("reset-password")}
              />
            ) : currentPage === "otp" ? (
              <OTPverify
                handleBack={toggleSignUp}
                handleNext={() => setCurrentPage("reset-password")}
              />
            ) : currentPage === "reset-password" ? (
              <ResetPassword handleNext={() => setCurrentPage("success")} />
            ) : currentPage === "success" ? (
              <SuccessBox
                handleNext={toggleSignUp}
                successMessage={"Password Successfully Update"}
                btnText={"Back to Login"}
              />
            ) : currentPage === "session-limit" ? (
              <SessionLimit />
            ) : currentPage === "carrer-path" ? (
              <CareerPathHero />
            ) : currentPage == "carrer-info" ? (
              <WrapperCareersPath />
            ) : (
              <h1>Something Wrong</h1>
            )}
          </StyledLoginForm>
        </div>
        <div className="carousel">
          <LoginCarousel />
        </div>
      </StyledBox>
    </main>
  );
}

const StyledBox = styled.div`
  height: 95vh;
  max-height: 720px;
  overflow-y: scroll;
  scrollbar-width: none;
  position: relative;
  width: ${(props) =>
    props.width >= 2000 ? "1226px" : props.width > 1000 ? "957px" : "800px"};
  /* height: 100%; */
  background-color: white;
  border-radius: 30px;
`;

const StyledRegisterForm = styled(StyledLoginForm)`
  display: none;
`;
