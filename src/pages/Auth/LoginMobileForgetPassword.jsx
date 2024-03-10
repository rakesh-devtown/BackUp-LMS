
import { Form, Input, Button as AntButton, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuthStore from "../../store/authStore";
import img from "../../assets/images/ICON.svg";
import { StyledButton, StyledLabel } from "../../styles/LoginPage.styles";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { BlueText } from "../../styles/LoginPage.styles";
import loginUiStore from "../../store/loginUi.store";

const Container = styled.div`
display: flex;
  flex-direction: column;
  padding: 1rem;
  max-width: 550px;
  min-width: 350px;
  width: 100%;
  justify-content: start;
  align-items: center;
`;

const FormContainer = styled.div`

  background-color: white;



`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  height: 48px;
  width: auto;
`;

const Title = styled.h2`
  text-align: start;
  font-size: 40px;
  font-weight: 900;
`;

export default function LoginMobileForgetPassword() {
    const setMobileCurrentPage = loginUiStore((state) => state.setMobileCurrentPage);
  return (
    <Container>
      <FormContainer>
        <Flex gap="" vertical>
          <Title>Forgot</Title>
          <Title>Password ?</Title>
        </Flex>
        <h3
          style={{
              fontWeight: 800,
            }}
            >
          Don't Worry! We can help.
        </h3>
        <Form >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
            
            >
            <StyledLabel>
            Email Address
            </StyledLabel>
            <Input
              style={{
                  padding: "10px",
                  color: "black",
              }}
              placeholder="mailaddress@example.com"
              />
          </Form.Item>

          <Form.Item>
            <StyledButton
              onClick={() => {
                  setMobileCurrentPage("otp");
                }}
                type="primary"
                htmlType="submit"
                >
              Continue
            </StyledButton>
          </Form.Item>
          <Form.Item
            style={{
                lineHeight: "1.5",
                fontSize: "32px",
                marginTop: "-20px",
                textAlign: "center",
            }}
            >
            <p>Remembered your password ? </p>
            <BlueText
              onClick={() => {
                setMobileCurrentPage("register");
                }}
                >
              Back to login
            </BlueText>
          </Form.Item>
        </Form>
      </FormContainer>

      <div
        style={{
            position: "absolute",
            bottom: "30px",
            color: "#424242",
            textAlign: "center",
            width: "100%",
            fontWeight: 400,
            fontSize: "16px",
        }}
        >
        Terms and Conditions | FAQs | Contact Us
      </div>
          </Container>
  );
}
