import React from "react";
//import './App.css';
//import 'antd/dist/antd.css'; // Import Ant Design CSS
import { Layout, Form, Input, Button, } from "antd";
import { useNavigate } from 'react-router-dom'; 
import styles from "../styles/LoginPage.styles.js";
const { Content } = Layout;




function LoginPage() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Username:', values.username);
    console.log('Password:', values.password);
    // Implement your login logic here
    navigate('/');
  };

  return (
    <Layout className="layout">
      <Content className="content">
        <div
          className="login-container"
          style={{
            display: "flex",
            overflow: "hidden",
            // backgroundColor:'red',

            // paddingLeft: " 2 rem",
            // paddingRight: "2rem",
            // paddingBottom: "3 rem",
            // paddingTop: "3 rem",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            className="onlyformcontainer"
            style={{
              // background: "rgb(89,86,139)",
              background:
                "linear-gradient(90deg, rgba(89,86,139,1) 0%, rgba(76,9,121,1) 8%, rgba(0,82,255,1) 100%)",
              paddingLeft: " 7rem",
              paddingRight: "5rem",
              paddingBottom: "10rem",
              paddingTop: "10rem",
              justifyContent: "center",
              alignItems: "center",
              maxHeight: "100vh",
              display: "flex",
              border: "0 solid #e5e7eb",
              boxSizing: "border-box",
            }}
          >
            <div
              className="login-form"
              style={{
                padding: "2.5rem",
                backgroundColor: "white",
                borderRadius: "0.5rem",
                // maxWidth: "27rem",
                // maxHeight: "100rem",
                width: "27rem",
                height: "82vh",
                // display: "block",
                border: "0 solid #e5e7eb",
                boxSizing: "border-box",
                justifyContent: "center",
                alignItems: "center",
                display: "block",
              }}
            >
              <img
                src="https://www.student-platform.devtown.in/static/media/ICON.a874e4deea467c4d46a5055eb58c4e7b.svg" // Replace with the path to your image file
                alt="Devtown Logo" // Provide a brief description of the image for accessibility
                style={{
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "auto",
                  height: "3rem",
                  marginLeft: "auto",
                  maxWidth: "100%",
                  marginRight: "auto",
                }}
              />
              <h1 style={{ marginTop: "1.5rem" }}>Welcome back to </h1>
              <h1 style={{ color: "rgb(100 34 205)" }}>DevTown </h1>
              <Form name="login-form" onFinish={onFinish}>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" >
                    <p
                      style={{
                        marginTop: "1.5rem",
                        marginBottom:'0rem',
                        margin: "0",
                        marginBlockStart: " 1em",
                        // marginBlockEnd: " 1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                        textAlign: "left",
                        fontWeight: "600",
                        fontSize: "1rem",
                        lineHeight: "1.25rem",
                      }}
                    >
                      Login to your account to get back to your learning.{" "}
                    </p>
                  </Form.Item>
                </Form.Item>
                {/* Username input */}

                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your username!",
                    },
                  ]}
                >
                  <Input style={styles.Input} placeholder="Username" />
                </Form.Item>

                <Form.Item
                  name="password"
                  
                  rules={[
                    {
                      required: true,
                      message: "Please enter your password!",
                    },
                  ]}
                >
                  <Input.Password
                    style={{ height: "2.5rem",background:'red'  }}
                    placeholder="Password"
                    type="password"
                  />
                </Form.Item>

                
                  <Form.Item name="remember" valuePropName="checked">
                    <p
                      style={{
                        color: "rgb(99 102 241)",
                        fontWeight: "500",
                        fontSize: ".875rem",
                        lineHeight: "1.25rem",
                        textAlign: "right",
                      }}
                    >
                      Forgot your password?
                    </p>
                  </Form.Item>
                

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-button"
                    style={{ 
                    height:'2.5em',  
                    width: "100%" }}
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="login-image">
            <img
              src="https://www.student-platform.devtown.in/static/media/Login_image.d23150f57543b9b841d955f9245b17ca.svg"
              alt="Login"
            />
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default LoginPage;
