import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Space,
  Spin,
  Upload,
  notification,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { EditOutlined, FileFilled, PlusOutlined } from "@ant-design/icons";
import useWindowSize from "../../../hooks/useWindowSize";
import {
  StyledForm,
  Title,
  InnerContainer,
  UpdateDelete,
} from "../../../styles/myResume.styles";
import CountrySelect from "../../CountrySelect/CountrySelect";
import customizeRequiredMark from "../../../utils/custom-form-functions";
import { serviceGet } from "../../../utils/api";
import { set } from "date-fns";
import useResumeStore from "../../../store/resumeStore";

const EditPersonalDetails = ({ value, handleCancel }) => {
  const personalDetails = useResumeStore((state) => state.personalDetails);
  const [upload, setUpload] = useState(true);
  const { width } = useWindowSize();
  const inputFile = useRef();
  const [loading, setLoading] = useState(false);
  const { updatePersonalDetails } = useResumeStore();
  const [country, setCountry] = useState("In");

  const handleSubmit = async (e) => {
    try {
      const data = {
        name: e.firstName + " " + e.lastName,
        whatsappNo: e.whatsApp,
        location: e.location,
        contactNo: e.contact,
        email: e.email,
        aboutMe: e.aboutMe,
        resumeUrl: resume?.url,
      };

      if (
        !data.name ||
        !data.whatsappNo ||
        !data.location ||
        !data.contactNo ||
        !data.email ||
        !data.aboutMe ||
        !data.resumeUrl
      ) {
        return notification.error({
          message: "Error",
          description: "Please fill all the fields",
        });
      }

      const res = await updatePersonalDetails(data);
    } catch (err) {
      console.log(err);
    } finally {
      handleCancel();
    }
  };
  const [resume, setResume] = useState(null);

  const onFileUploadClick = () => {
    inputFile.current.click();
  };
  const handleUploadResume = async (e) => {
    try {
      setLoading(true);
      const file = e.target.files[0];
      console.log(file);
      if (
        file.type !== "application/pdf" &&
        file.type !== "application/doc" &&
        file.type !== "application/docx"
      ) {
        return notification.error({
          message: "Error",
          description: "Please select valid file",
        });
      }
      const extension = file.type.split("/")[1];
      const { data } = await serviceGet(
        `student/student/v1/me/url?type=.${extension}&path=/resume`
      );
      const url = data.url;
      const key = url.split("?")[0];
      console.log(key);
      const res = await fetch(url, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      });
      if (res.ok) {
        setResume({
          url: key,
          name: file.name,
        });
        setUpload(false);
      } else {
        setUpload(true);
        notification.error({
          message: "Error",
          description: "Error in uploading file",
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (personalDetails?.resumeUrl) {
      setResume({
        url: personalDetails.resumeUrl,
        name: "My Resume",
      });
      setUpload(false);
    }
  }, [personalDetails]);

  return (
    <StyledForm
      name="basic"
      onFinish={handleSubmit}
      requiredMark={customizeRequiredMark}
    >
      <Title>Personal Details</Title>
      <InnerContainer>
        <Row gutter={[15, 15]}>
          <Col span={24} sm={12}>
            <Form.Item
              label="First Name"
              name="firstName"
              initialValue={
                personalDetails?.name
                  ? String(personalDetails?.name).split(" ")[0]
                  : null
              }
              rules={[
                {
                  required: true,
                  message: "Please input your First Name!",
                },
              ]}
            >
              <Input placeholder="Enter Your First Name" size="large" />
            </Form.Item>
          </Col>
          <Col span={24} sm={12}>
            <Form.Item
              label="Last Name"
              name="lastName"
              initialValue={
                personalDetails?.name
                  ? String(personalDetails?.name).split(" ")[1]
                  : null
              }
              rules={[
                {
                  required: true,
                  message: "Please input your Last Name!",
                },
              ]}
            >
              <Input placeholder="Enter Your Last Name" size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[15, 15]}>
          <Col span={24} sm={12}>
            <Form.Item
              label="Whats App Number"
              name="whatsApp"
              initialValue={personalDetails?.whatsappNo}
              rules={[
                {
                  required: true,
                  message: "Please input your Whats App Number!",
                },
              ]}
            >
              <InputNumber
                placeholder="Enter Your Whats App Number"
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={24} sm={12}>
            <Form.Item
              label="Contact Number"
              name="contact"
              initialValue={personalDetails?.contactNo}
              rules={[
                {
                  required: true,
                  message: "Please input your Contact Number!",
                },
              ]}
            >
              <InputNumber
                placeholder="Enter Your Contact Number"
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Email Address"
          name="email"
          initialValue={personalDetails?.email}
          rules={[
            {
              required: true,
              message: "Please input your Email Address!",
            },
          ]}
        >
          <Input
            type="email"
            placeholder="Enter Your Email Address"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="location"
          label="Location"
          initialValue={personalDetails?.location}
          rules={[{ required: true, message: "Please type your Location!" }]}
        >
          <Input
            value={country}
            addonBefore={
              <CountrySelect onSelect={setCountry} selected={country} />
            }
          />
        </Form.Item>

        <Form.Item
          label={"About Me"}
          name={"aboutMe"}
          initialValue={personalDetails?.aboutMe}
          rules={[{ required: true, message: "Please write about yourself!" }]}
        >
          <TextArea rows={5} />
        </Form.Item>

        {/* resume upload */}
        {/* <Form.Item> */}
        {/* <FileFilled /> */}
        <div>
          <h4>Upload Resume</h4>
          {upload && (
            <Button
              icon={<PlusOutlined />}
              size="large"
              style={{ marginTop: "10px", opacity: loading ? 0.5 : 1 }}
              type="button"
              onClick={onFileUploadClick}
            >
              Upload
            </Button>
          )}
          {loading && <Spin />}
          <input
            ref={inputFile}
            onChange={handleUploadResume}
            type="file"
            style={{ display: "none" }}
          />
        </div>
        {!upload && (
          <UploadedResume>
            <Space size={28}>
              <FileFilled style={{ color: "red" }} />
              <Space size={5} direction="vertical">
                <h5>
                  <a target="_blank" href={resume?.url}>
                    {resume?.name}
                  </a>
                </h5>
                <p>My Resume</p>
              </Space>
            </Space>
            <Button
              type="text"
              danger
              icon={<EditOutlined />}
              size="large"
              onClick={onFileUploadClick}
            >
              Edit
            </Button>
          </UploadedResume>
        )}
      </InnerContainer>
      <Form.Item>
        <UpdateDelete width={width}>
          <Button type="primary" htmlType="submit" size="large">
            Update
          </Button>
          {/* <Button type='primary' danger ghost size='large' onClick={handleCancel}>Cancel</Button> */}
        </UpdateDelete>
      </Form.Item>
    </StyledForm>
  );
};

const StyledUpload = styled(Upload)`
  display: flex;
  justify-content: center;
`;

const UploadedResume = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "DM Sans";
  h5 {
    color: #121212;
  }
  p {
    color: #121212;
    font-size: 14px;
    font-weight: 400;
  }
  input {
    height: unset;
  }
`;
export default EditPersonalDetails;
