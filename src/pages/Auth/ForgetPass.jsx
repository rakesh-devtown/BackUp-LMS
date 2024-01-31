import { Form, Input, Button as AntButton } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuthStore from "../../store/authStore";
import img from "../../assets/images/ICON.svg";
import { StyledButton } from "../../styles/SessionLimit.styles";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 12px 4px;
`;

const FormContainer = styled.div`
  max-width: 500px;
  background-color: white;
  padding: 100px 50px;
  border-radius: 10px;
  width: 100%;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  height: 48px;
  width: auto;
`;

const Title = styled.h2`
  margin-top: 40px;
  text-align: center;
  font-size: 24px;
  margin-bottom: 24px;
  font-weight: 700;
  color: #333;
`;

export default function ForgetPass() {
  const navigate = useNavigate();
  const { forgotPassword } = useAuthStore();

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
      <StyledButton
      onClick={navigateToHomePage}
      >
       <ArrowLeftOutlined/>  Back
      </StyledButton>
      <FormContainer>
        <Image src={img} alt="Workflow" />
        <Title>Forgot Password ?</Title>

        <Form onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email address" />
          </Form.Item>

          <Form.Item>
            <AntButton style={{width:"100%", fontWeight:"700"}} type="primary" htmlType="submit">
              Send Link
            </AntButton>
          </Form.Item>
        </Form>
      </FormContainer>
    </Container>
  );
}
