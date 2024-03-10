import { useState } from "react";

import { Button, Form } from "antd";
import { InputOTP } from "antd-input-otp";

import "./otp.css";
import loginUiStore from "../../store/loginUi.store";
import { BlueText, StyledButton } from "../../styles/LoginPage.styles";
import { ArrowLeftOutlined, EditFilled } from "@ant-design/icons";

const MobileOtp = () => {
    const setMobileCurrentPage = loginUiStore(
        (state) => state.setMobileCurrentPage
      );
  // #region The Controlled Logic
  const [otpValues, setOtpValues] = useState([]);
  // #endregion

  // #region The Uncontrolled Logic
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    // The value will be array of string
    // Check the field if there is no value, or value is undefined/empty string
    const { otp } = values;
    if (!otp || otp.includes(undefined) || otp.includes(""))
      return form.setFields([
        {
          name: "otp",
          errors: ["OTP is invalid."],
        },
      ]);
    console.log(`OTP: ${otp}`);
  };

  return (
    <div className="app">
      <section className="card">
        <h1
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "32px",
            fontWeight: "900",
            marginBottom: "0px",
          }}
        >
          OTP Verification
        </h1>
        <p
          style={{
            textAlign: "center",
            lineHeight: "2",
            fontSize: "16px",
          }}
        >
          Please enter the 4 digit code that send to your email Address{" "}
          <span
            style={{
              fontWeight: "800",
            }}
          >
            ayush@devtown.in <EditFilled />
          </span>
        </p>
        <BlueText
          style={{
            fontWeight: "800",
          }}
        >
          02:32
        </BlueText>
        <Form form={form} onFinish={handleFinish}>
          <Form.Item
            name="otp"
            className="center-error-message"
            rules={[{ validator: async () => Promise.resolve() }]}
          >
            <InputOTP autoFocus inputType="numeric" length={4} />
          </Form.Item>
          <Form.Item>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              I didn't recieve any code! <BlueText>Resend</BlueText>
            </p>
          </Form.Item>
          <Form.Item noStyle>
            <StyledButton
              style={{
                background: "#C6C6C6",
              }}
              block
              htmlType="submit"
              type="primary"
              onClick={() => {
                setMobileCurrentPage("reset-password")
              }}
            >
              Verify and Proceed
            </StyledButton>
          </Form.Item>
        </Form>

        <BlueText
          style={{
            fontSize: "20px",
          }}
          onClick={() => {
            setMobileCurrentPage("login");
          }}
        >
          <ArrowLeftOutlined /> Back
        </BlueText>
      </section>
    </div>
  );
};

export default MobileOtp;
