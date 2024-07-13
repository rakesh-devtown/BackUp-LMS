import TextArea from "antd/es/input/TextArea";
import { Button, Divider, Form, Space } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { CustomForm, BottomPart } from "../../styles/askDoubtModal.styles";
import { useState } from "react";

const InputIssue = ({ selectedKey }) => {

  const [disabled, setDisabled]= useState()

  const [form] = Form.useForm();
   Form.useWatch((values) => {
    values.description ? setDisabled(false) : setDisabled(true) 
  }, form);

  const handleSubmit = (value) => {
    console.log({ selectedKey, value });
  };

  return (
    <>
      <Divider style={{ marginBottom: "38px" }} />
      <CustomForm form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Describe your Issue" name="description">
          {/* <StyledLabel>Email Address</StyledLabel> */}
          <TextArea
            rows={5}
            placeholder="Doubts with clear and detailed description is accepted 80% faster than doubts with poor description."
          />
        </Form.Item>
        <p className="minimum-words">Minimum 200 words</p>
        <BottomPart>
          <div>
            <p>Tips on writing a good question:</p>
            <Space size={6} align="center">
              <i>
                <CheckCircleOutlined />
              </i>
              <p>Anything you have already tried before to solve the issue but didn't work.</p>
            </Space>
            <Space size={6} align="center">
              <i>
                <CheckCircleOutlined />
              </i>
              <p>Specific area where you need help.</p>
            </Space>
            <Space size={6} align="center">
              <i>
                <CheckCircleOutlined />
              </i>
              <p>Anything you have already tried before to solve the issue but didn't work.</p>
            </Space>
          </div>
          <Divider />
          <Button
            type="primary"
            danger
            disabled={disabled}
            size="large"
            style={{ float: "right", height: "47px", marginRight: "24px", padding: "0 24px" }}
            htmlType="submit"
          >
            Submit
          </Button>
        </BottomPart>
      </CustomForm>
    </>
  );
};

export default InputIssue;
