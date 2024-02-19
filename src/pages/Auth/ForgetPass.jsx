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
  justify-content: start;
  height: 100%;
  width: 100%;
  position: relative;
  align-items: start;
`;

const FormContainer = styled.div`
  max-width: 500px;
  background-color: white;

  border-radius: 10px;
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
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

export default function ForgetPass() {
  const navigate = useNavigate();
  const { forgotPassword } = useAuthStore();
  const setCurrentPage = loginUiStore((state) => state.setCurrentPage);
  const onFinish = (values) => {
    if (forgotPassword(values)) {
      navigate("/auth");
    }
    // forgotPassword(() => navigate('/auth'), values);
  };
  const navigateToHomePage = () => {
    navigate("/auth");
  };
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
        <Form onFinish={onFinish}>
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
                setCurrentPage("reset-password");
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
                setCurrentPage("signup");
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
          fontSize: "18px",
        }}
      >
        Terms and Conditions | FAQs | Contact Us
      </div>
    </Container>
  );
}
