import React, { useState } from "react";
import { Button, Checkbox, Col, Form, Input, InputNumber, Row } from "antd";
import useWindowSize from "../../../hooks/useWindowSize";
import CustomDatePicker from "../../DatePicker/CustomDatePicker";
import { StyledForm, Title, InnerContainer, StyledDate, SaveBtn, UpdateDelete } from "../../../styles/myResume.styles";
import customizeRequiredMark from "../../../utils/custom-form-functions";
import useResumeStore from "../../../store/resumeStore";

const AddCertification = ({ value, handleCancel }) => {
  const [certificate, setCertificate] = useState(value);
  const [checked, setChecked] = useState(false);
  const { width } = useWindowSize();

  console.log(certificate);
  const { postCertificates, updateCertificate, deleteCertificate } = useResumeStore();

  const handleDelete = async () => {
    try {
      await deleteCertificate(certificate.id);
      handleCancel();
    } catch (err) {
      console.log(err);
    }
  };
  const handleCheckbox = () => setChecked(!checked);
  const handleSubmit = async (e) => {
    try {
      const data = !value
        ? {
            name: e.name,
            credentialId: e.credentialId,
            credentialUrl: e.credentialUrl,
            issuingOrg: e.issuingOrg,
            issueDate: new Date(e.startYear, e.startMonth - 1, 10),
          }
        : {
            name: e.name,
            credentialId: e.credentialId,
            credentialUrl: e.credentialUrl,
            issuingOrg: e.issuingOrg,
            issueDate: new Date(e.startYear, e.startMonth - 1, 10),
            id: certificate.id,
          };
      if (value) {
        await updateCertificate(data);
      } else {
        await postCertificates(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      handleCancel();
    }
  };

  return (
    <StyledForm name="basic" onFinish={handleSubmit} requiredMark={customizeRequiredMark}>
      <Title>{value ? "Edit" : "Add"} Certificate</Title>
      <InnerContainer>
        <Form.Item
          label="Certificate Name"
          name="name"
          initialValue={certificate?.name}
          rules={[
            {
              required: true,
              message: "Please input Certificate Name!",
            },
          ]}
        >
          <Input placeholder="i.e Google UX Design" size="large" />
        </Form.Item>

        <Form.Item
          label="Issuing Organization"
          name="issuingOrg"
          initialValue={certificate?.issuingOrg}
          rules={[
            {
              required: true,
              message: "Please input the Issuing Organization Name!",
            },
          ]}
        >
          <Input placeholder="Coursera" size="large" />
        </Form.Item>

        <StyledDate>
          <h5>Issue Date</h5>
          <Row gutter={15}>
            <Col span={12}>
              <CustomDatePicker
                mode={"Month"}
                name={"startMonth"}
                required={true}
                value={
                  certificate?.issueDate
                    ? new Date(certificate?.issueDate).toLocaleString("default", {
                        month: "2-digit",
                      })
                    : null
                }
              />
            </Col>
            <Col span={12}>
              <CustomDatePicker
                mode={"Year"}
                name={"startYear"}
                required={true}
                value={certificate?.issueDate ? new Date(certificate?.issueDate).getFullYear() : null}
              />
            </Col>
          </Row>
        </StyledDate>

        <Form.Item
          label="Credential ID"
          name="credentialId"
          initialValue={certificate?.credentialId}
          rules={[
            {
              required: true,
              message: "Please input Credential ID!",
            },
          ]}
        >
          <Input placeholder="i.e ID" size="large" />
        </Form.Item>

        <Form.Item
          label="Credential URL"
          name="credentialUrl"
          initialValue={certificate?.credentialUrl}
          rules={[
            {
              required: true,
              message: "Please input Credential URL!",
            },
          ]}
        >
          <Input placeholder="i.e URL" size="large" />
        </Form.Item>
        {/* <Form.Item name={"checked"}>
                    <Checkbox onChange={handleCheckbox} checked={checked}>Add DevTown Certificate</Checkbox>
            </Form.Item> */}
      </InnerContainer>
      <Form.Item>
        {value ? (
          <UpdateDelete width={width}>
            <Button type="primary" htmlType="submit" size="large">
              Update
            </Button>
            <Button type="primary" danger ghost size="large" onClick={handleDelete}>
              Delete
            </Button>
          </UpdateDelete>
        ) : (
          <SaveBtn width={width} type="primary" htmlType="submit" size="large">
            Save
          </SaveBtn>
        )}
      </Form.Item>
    </StyledForm>
  );
};

export default AddCertification;
