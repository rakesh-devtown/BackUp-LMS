import { Form, Input, Button as AntButton } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAuthStore from "../../store/authStore";
// import img from "../../assets/images/ICON.svg";

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
  padding: 10px;
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
  margin-top: 24px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #333;
`;

export default function ForgetPass() {
  const navigate = useNavigate();
  const { forgotPassword } = useAuthStore();

  const onFinish = (values) => {
    
    if(forgotPassword(values  )) {
      navigate('/auth');
    }
    // forgotPassword(() => navigate('/auth'), values);
  };

  return (
    <Container>
      <FormContainer>
        {/* <Image src={img} alt="Workflow" /> */}
        <Title>Forgot Password ?</Title>

        <Form onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="Email address" />
          </Form.Item>

          <Form.Item>
            <AntButton type="primary" htmlType="submit">
              Send Link
            </AntButton>
          </Form.Item>
        </Form>
      </FormContainer>
    </Container>
  );
}