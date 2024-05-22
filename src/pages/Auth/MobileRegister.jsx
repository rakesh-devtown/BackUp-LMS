import React from 'react'
import { BlueText, FlexContainer, InputUsername, SignInText, StyledButton, StyledHeading, StyledHr, StyledLabel, StyledP, StyledPassword, StyledSignInForm } from '../../styles/LoginPage.styles'
import { Checkbox, Flex, Form } from 'antd'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleAuthLogin } from './GoogleAuthLogin'
import TermAndCondition from '../../components/ui/TermsNCondition'
import { Link } from 'react-router-dom'
import loginUiStore from '../../store/loginUi.store'

function MobileRegister() {
  const [isConditionModalOpen, setIsConditionModalOpen] = React.useState(false)
  const setMobileCurrentPage = loginUiStore((state) => state.setMobileCurrentPage);

  const [acceptTerms, setAcceptTerms] = React.useState(false)
  return (
    <StyledSignInForm className="" name="">
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
        <GoogleOAuthProvider >
          <GoogleAuthLogin />
        </GoogleOAuthProvider>
      </div>

      <FlexContainer>
        <StyledHr />
        <SignInText>Or sign in with Email </SignInText>
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
      // rules={[
      //   {
      //     type: "email",
      //     required: true,
      //     message: "Please enter your email!",
      //   },
      // ]}
      >
        <StyledLabel>Email Address</StyledLabel>
        <InputUsername placeholder="examplemail@gmail.com" />
      </Form.Item>

      <Form.Item
        name="password"
      // rules={[
      //   {
      //     required: true,
      //     message: "Please enter your password!",
      //   },
      //   {
      //     min: 1,
      //     message: "Password must be at least 8 characters long.",
      //   },
      // ]}
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
          onClick={() => {
            setMobileCurrentPage("otp-register")
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
        >
          <Link
            className=""
            onClick={() => setMobileCurrentPage("forget-password")}
          >
            <BlueText>Forget Password?</BlueText>
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
            Already have a Account?{" "}
            <BlueText onClick={() => {
              setMobileCurrentPage("login");
            }}>Login</BlueText>
          </Flex>
        </div>
      </Form.Item>
    </StyledSignInForm>
  )
}

export default MobileRegister;