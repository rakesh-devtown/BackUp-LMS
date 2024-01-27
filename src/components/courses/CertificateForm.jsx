import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
const CertificateForm = ({
  handleSubmit,
  updateProfile,
  setupdateProfile,
  setCertificateData,
  open,
  setOpen,
}) => {
  const onFinish = async (values) => {
    setOpen(false);
    await handleSubmit();
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="firstName"
        rules={[
          {
            required: true,
            message: "Please input your Name !",
          },
        ]}
      >
        <Input
          onChange={(e) =>
            setupdateProfile({
              ...updateProfile,
              firstName: e.target.value,
            })
          }
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="First Name"
        />
      </Form.Item>
      <Form.Item
        name="lastName"
        rules={[
          {
            required: true,
            message: "Please enter your lastname!",
          },
        ]}
      >
        <Input
           onChange={(e) =>
            setupdateProfile({
              ...updateProfile,
              lastName: e.target.value,
            })
          }
          prefix={<UserOutlined className="site-form-item-icon" />}
          type="text"
          placeholder="Last Name"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Get Certificate
        </Button>
      </Form.Item>
    </Form>
  );
};
export default CertificateForm;
