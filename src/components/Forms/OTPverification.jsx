import { useEffect, useState } from "react";

import { Form } from "antd";
import { InputOTP } from "antd-input-otp";

import { BlueText, StyledButton } from "../../styles/LoginPage.styles";
import { ArrowLeftOutlined, EditFilled } from "@ant-design/icons";
import styled from "styled-components";

const OTPverify = ({ handleBack, handleNext }) => {

    const [otpValid, setOtpValid] = useState(false);
    const [timer, setTimer] = useState(60)


    // #region The Uncontrolled Logic
    const [form] = Form.useForm();

    //watching otp to change btn color
    Form.useWatch((values) => {
        // The value will be array of string
        // Check the field if there is no value, or value is undefined/empty string
        const otp = values.otp
        if (otp?.length === 4 && !(!otp || otp.includes(undefined) || otp.includes(""))) {
            setOtpValid(true)
        } else {
            setOtpValid(false)
        }
    }, form);


    const handleFinish = (values) => {
        // The value will be array of string
        // Check the field if there is no value, or value is undefined/empty string
        // const { otp } = values;
        // if (!otp || otp.includes(undefined) || otp.includes(""))

        if (!otpValid)
            return form.setFields([
                {
                    name: "otp",
                    errors: ["OTP is invalid."]
                }
            ]);
        console.log(`OTP: ${values.otp}`);
        handleNext()
    };

    useEffect(() => {
        //timer to resend code
        let intervalId;
        if (timer > 0) {
            intervalId = setInterval(() => {
                setTimer(timer - 1)
            }, 1000);
        }
        return () => clearInterval(intervalId)
    }, [timer])

    return (
        <StyledCard>
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
                Please enter the 4 digit code that send to your email Address {" "} <span style={{
                    fontWeight: "800",

                }}>
                    ayush@devtown.in <EditFilled />
                </span>
            </p>
            <BlueText
                style={{
                    fontWeight: "800",
                }}
            >
                {timer >= 10 && "00:" + timer}
                {(timer < 10) && "00:0" + timer}
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
                    <p style={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        justifyContent: "center",
                        gap: "5px",
                    }} >
                        I didn't recieve any code! <BlueText>Resend</BlueText>
                    </p>
                </Form.Item>
                <Form.Item noStyle>
                    <StyledButton style={{
                        background: otpValid ? "#0859DE" : "#C6C6C6",

                    }} block htmlType="submit" type="primary">
                        Verify and Proceed
                    </StyledButton>
                </Form.Item>
            </Form>


            <BlueText
                style={{
                    fontSize: "20px"
                }}
                onClick={() => handleBack()}
            >
                <ArrowLeftOutlined /> Back
            </BlueText>
        </StyledCard>
    );
};

const StyledCard = styled.div`
  border-radius: 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* background-color: #ffffff; */
  
  &> h2 {
      text-align: center;
      margin: 0 0 2rem;
    }
    
    .center-error-message:where(.ant-form-item) .ant-form-item-explain-error {
        text-align: center;
    }
    
    .input-classname {
        border-radius: 16px;
    }
    
    .wrapper-classname {
        gap: 4px;
        margin-bottom: 24px;
    }
    
`

export default OTPverify;
