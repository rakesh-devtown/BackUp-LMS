
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined, ArrowLeftOutlined, CheckCircleFilled } from "@ant-design/icons";
import { Form, Input, Button, message, notification } from "antd";
import styled from "styled-components";
import useAuthStore from "../../store/authStore";
import img from "../../assets/images/ICON.svg";
import { StyledButton } from "../../styles/LoginPage.styles";
import { StyledLabel } from "../../styles/LoginPage.styles";
import { HaddingColored } from "../../styles/shared.styles";
import CheckImage from "../../assets/images/Vector.png";

import loginUiStore from "../../store/loginUi.store";

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

export default function MobileResetPassword() {
  const [updated , setUpdated] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();
  const { resetPassword } = useAuthStore(); 
  const setMobileCurrentPage = loginUiStore((state) => state.setMobileCurrentPage);

  const handleSubmit = (values) => {
    if (values.password === values.confirmPassword) {
      resetPassword(values, token, () => navigate("/programs"));
    } else {
      notification.error({
        message: "Password Mismatch",
      })
    }
  };

  return (
    <Container>
      {
        !updated? (

      <Card>
      <ResetPassTitle>
        <HaddingColored>
        Hi,  Welcome to DevTown! 
        </HaddingColored>
        </ResetPassTitle>
      <ResetPassTitle style={{
        fontSize:"16px",
        fontWeight:"400",

      
      }} >
          Create an Account and Start Learning with Us!
      </ResetPassTitle>
        <Form style={{display:"flex" , flexDirection :"column" ,width:"100%"}}   onFinish={handleSubmit}>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your new password!' }]}>
            <StyledLabel>
              Password 
            </StyledLabel>
            <Input.Password
            style={{
              padding:"10px"
            }}

              placeholder="New Password"
              iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>
          <Form.Item name="confirmPassword" rules={[{ required: true, message: 'Please confirm your new password!' }]}>
            <StyledLabel>
              Confirm Password
            </StyledLabel>
            <Input.Password
             style={{
              padding:"10px"
            }}
              placeholder="Confirm New Password"
              iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>
          <Form.Item>
            <StyledButton style={{
              color:"white",
            }} type="submit" children="reset"
              onClick={() => {
                setUpdated(true);
              }}
            >

              Reset Password
            </StyledButton>
          </Form.Item>
        </Form>
      </Card>
        ) : 
        <Card>
          <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            gap:"30px",
            marginBottom:"30px",
          }}>
            <img src={CheckImage} alt="CheckImage" />
            <h1 style={{
              fontSize:"24px",
              fontWeight:"500",
              textAlign:"center",
              width:'286px'
            }}>
              Password Successfully Updated
            </h1>
          </div>
          <StyledButton
          onClick={()=>{
            setMobileCurrentPage("register");

          }}
            style={{
              
            }}
          >
            Back to login 
          </StyledButton>
        </Card>
      }
       
    </Container>
  );
}
