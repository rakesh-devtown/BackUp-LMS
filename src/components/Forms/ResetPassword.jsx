import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  ArrowLeftOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import { Form, Input, Button, message, notification } from "antd";
import styled from "styled-components";
import useAuthStore from "../../store/authStore";
import img from "../../assets/images/ICON.svg";
import { StyledButton } from "../../styles/LoginPage.styles";
import { StyledLabel } from "../../styles/LoginPage.styles";
import { HaddingColored } from "../../styles/shared.styles";
import loginUiStore from "../../store/loginUi.store";
import useResumeStore from "../../store/resumeStore";

export default function ResetPassword({ handleNext }) {
  const navigate = useNavigate();
  // const { token } = useParams();
  const currentPage = loginUiStore((state) => state.currentPage);
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuthStore();
  const { changePassowrd } = useResumeStore();

  const handleSubmit = async (values) => {
    try {
      if (loading) return;
      setLoading(true);
      if (values.password === values.confirmPassword) {
        const token = localStorage.getItem("token");
        let res;
        if (currentPage === "changePasswordOtp") {
          res = await changePassowrd(values.password);
          if (res) return handleNext();
        } else {
          res = await resetPassword(values.password, token);
        }

        if (res) {
          handleNext();
        }

      } else {
        notification.error({
          message: "Password Mismatch",
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Card>
        <ResetPassTitle>
          <HaddingColored>Hi, Welcome to DevTown!</HaddingColored>
        </ResetPassTitle>
        <ResetPassTitle
          style={{
            fontSize: "16px",
            fontWeight: "400",
            marginBottom: "14.6px",
          }}
        >
          Create an Account and Start Learning with Us!
        </ResetPassTitle>
        <Form onFinish={handleSubmit} requiredMark="optional" layout="vertical">
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your new password!" },
            ]}
          >
            <Input.Password
              style={{
                padding: "10px",
              }}
              placeholder="New Password"
              iconRender={(visible) =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              { required: true, message: "Please confirm your new password!" },
            ]}
          >
            <Input.Password
              style={{
                padding: "10px",
              }}
              placeholder="Confirm New Password"
              iconRender={(visible) =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item>
            <StyledButton
              loading={loading}
              disabled={loading}
              type="primary"
              htmlType="submit"
              children="reset"
            >
              Reset Password
            </StyledButton>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: start;
  height: 100%;
  position: relative;
  align-items: center;
`;

const Card = styled.div`
  max-width: 500px;
  background-color: white;

  border-radius: 10px;
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
`;

const ResetPassTitle = styled.h2`
  text-align: start;
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 5px;
`;
