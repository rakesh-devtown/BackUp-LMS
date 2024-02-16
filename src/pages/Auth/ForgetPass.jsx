import { Form, Input, Button as AntButton, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuthStore from "../../store/authStore";
import img from "../../assets/images/ICON.svg";
import { StyledButton } from "../../styles/SessionLimit.styles";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Container = styled.div`
  display: flex;
  align-items: start ;
  justify-content: start ;
  
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
  font-size: 40px;
  margin-bottom: 24px;
  font-weight: 900;
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
      
      <FormContainer >
        <Flex >

        <Title >Forgot 
          
          </Title>
          <Title>
          Password ?

          </Title>
        </Flex>
        <h5>
          Don't Worry! We can help.
        </h5>
        <Form onFinish={onFinish}>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            Email Address
            <Input placeholder="mailaddress@example.com" />
          </Form.Item>

          <Form.Item>
            <AntButton style={{width:"100%", fontWeight:"700"}} type="primary" htmlType="submit">
             Continue 
            </AntButton>
          </Form.Item>
        </Form>
      </FormContainer>
    </Container>
  );
}
