import React, { useState, useEffect } from "react";
import { Checkbox, Flex, message } from "antd";
import useAuthStore from "../../store/authStore.js"; // Adjust the path according to your project structure
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
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
  BlueText,
  StyledSignInForm,
} from "../../styles/LoginPage.styles.js";
import ForgetPass from "./ForgetPass.jsx"
import Config from "../../config.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Helmet } from "react-helmet";
import LoginCarousel from "../../components/ui/LoginCaraousel.jsx";

const googleClientId = Config.googleClientId; // Access the client ID from the config

export default function Login() {

  const [currentPage , setCurrentPage] = useState("sigfnup")


  const { login, isAuthenticated, isGoogleAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const [isLoginPage, setIsLoginPage] = useState(true);

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
  useEffect(() =>  {
    const toggle_button = document.querySelectorAll('.toggle');
    const main = document.querySelector(".main");
    toggle_button.forEach((btn) => {
      btn.addEventListener('click', () => {
        main.classList.toggle('sign-up-mode');
      });
    })
    return () => {
      toggle_button.forEach((btn) => {
        btn.removeEventListener('click', () => {
          main.classList.toggle('sign-up-mode');
        });
      })
    }
    
    
  }, [])
  return (
    <Layout className="layout">
      <Helmet>
        <title>Learn-DevTown Login</title>
        <meta name="Login" content="Login to learn.devtown.in" />
        <link rel="canonical" href="https://www.learn.devtown.in/auth" />
      </Helmet>

      <main className="main">
        <div className="box">
          <div className="inner-box">
            <div className="form-wrap">
              {/* Login Form */}
              <StyledLoginForm  className="sign-in-form">
                <StyledSignInForm name="login-form" onFinish={handleSubmit}>
                <StyledHeading>Hey Buddy,</StyledHeading>
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
                    <SignInText>Or sign in with</SignInText>
                    <StyledHr />
                  </FlexContainer>

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
                    Email Address
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
                    Password
                    <StyledPassword
                      placeholder="Min. 8 characters"
                      type="password"
                    />
                  </Form.Item>
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
                  </Form.Item>
                  <Form.Item>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "-40px",
                      }}
                    >
                      <Link to="/auth/forgot-password">
                        <BlueText>
                          Forget Password?
                        </BlueText>
                      </Link>
                    </div>
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
                        Don't have an account? <BlueText className="toggle" >Create</BlueText>
                      </Flex>
                    </div>
                  </Form.Item>
                </StyledSignInForm>
              </StyledLoginForm>
              
              {/* Register form  */}
              
                <StyledLoginForm currentPage={currentPage} className="sign-up-form">
                    {
                      currentPage === "signup"
                      ?<StyledSignInForm className=""  name="login-form" onFinish={handleSubmit}>
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
                          <SignInText>Or sign in with</SignInText>
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
                          Name
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
                          Email Address
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
                          Password
                          <StyledPassword
                            placeholder="Min. 8 characters"
                            type="password"
                            />
                        </Form.Item>
                            <Form.Item>
                              <Checkbox>
                                I agree to the <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>
                              </Checkbox>
                            </Form.Item>
                        <Form.Item>
                          <StyledButton
                            type="primary"
                            htmlType="submit"
                            className="login-button"
                            children="Login"
                            loading={loading}
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
                          >
                            <Link to="/auth/forgot-password">
                              <BlueText>
                                Forget Password?
                              </BlueText>
                            </Link>
                          </div>
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
                              Already have a Account? <BlueText className="toggle"  >Login</BlueText>
                            </Flex>
                          </div>
                        </Form.Item>
                      </StyledSignInForm> :
                      <ForgetPass/>
                    }


             
              </StyledLoginForm> 
              
              
              
              
              
            </div>
            <div className="carousel">
                    <LoginCarousel/>
            </div>
          </div>
        </div>
      </main>

      {/* <StyledLoginPage>
        <StyledFormContainer     >
          
          <div>
              <StyledLoginForm>
          
            <StyledHeading>Hi, Welcome to DevTown!</StyledHeading>
            
            <Form name="login-form" onFinish={handleSubmit}>
              <Form.Item name="form-text">
                <StyledP>
                  Create an account and start learning with us.
                </StyledP>
              </Form.Item>
              <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      marginBottom: "1rem",
              
                    }}
                  >
                    <GoogleOAuthProvider clientId={googleClientId}>
                      <GoogleAuthLogin />
                    </GoogleOAuthProvider>
       
                  </div>
                  <LoginContainer>
  
                    
                    <LoginLinkContainer>
                      <LoginLink to="/auth/magic-login">
                        <img
                          width="25"
                          height="25"
                          color="blue"
                          src="https://img.icons8.com/ios/50/000000/fantasy.png"
                          alt="maginc Link icons"
                        /> 
                      <p  style={{color:"#6B7280"}} >Magic Link</p>
                      </LoginLink>
                    </LoginLinkContainer>
                  </LoginContainer>
                    <FlexContainer>
    
    
                    <StyledHr />
                    <SignInText>Or sign in  with</SignInText>
                    <StyledHr />
                    </FlexContainer>
         

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
                Email Address
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
                Password
                <StyledPassword placeholder="Min. 8 characters" type="password" />
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
              </Form.Item>
              <Form.Item>
                <div style={{ display: "flex", justifyContent: "center" , marginTop:"-40px"}}>
                  <Link to="/auth/forgot-password">
                  <BlueText>
                    
                  </BlueText>
                  </Link>
                </div>
              </Form.Item>
              <Form.Item>
                <div style={{ display: "flex", justifyContent: "center" , marginTop:"-60px", color:"black"}}>
                  <div>
                    Don't  have an account?{" "}
                   <BlueText>
                    Create 
                   </BlueText>
                  </div>
                </div>
              </Form.Item>

            </Form>
          </StyledLoginForm>
          </div>
          <div>
            Hello World 
          </div>
          
          

          
        </StyledFormContainer>
      </StyledLoginPage>  */}
    </Layout>
  );
}
