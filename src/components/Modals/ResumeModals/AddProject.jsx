import React, { useState } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import CustomDatePicker from "../../DatePicker/CustomDatePicker";
import useWindowSize from "../../../hooks/useWindowSize";
import { StyledForm, Title, InnerContainer, StyledDate, SaveBtn, UpdateDelete } from "../../../styles/myResume.styles";
import customizeRequiredMark from "../../../utils/custom-form-functions";
import useResumeStore from "../../../store/resumeStore";

const AddProject = ({ value, handleCancel }) => {
  const [project, setProject] = useState(value);
  const { postProject, deleteProject, updateProject } = useResumeStore();
  const { width } = useWindowSize();

  const handleSubmit = async (e) => {
    console.log(e);
    try {
      const data = !value
        ? {
            name: e.name,
            githubLink: e.github,
            hostedLink: e.hosted,
            issueDate: new Date(e.startYear, e.startMonth - 1, 10),
            description: e.description,
          }
        : {
            name: e.name,
            githubLink: e.github,
            hostedLink: e.hosted,
            issueDate: new Date(e.startYear, e.startMonth - 1, 10),
            description: e.description,
            id: project.id,
          };

      console.log(data);
      if (value) {
        await updateProject(data);
      } else {
        await postProject(data);
      }
      handleCancel();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteProject(project.id);
      handleCancel();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledForm name="basic" onFinish={handleSubmit} requiredMark={customizeRequiredMark}>
      <Title>{value ? "Edit" : "Add"} Project</Title>
      <InnerContainer>
        <Form.Item
          label="Project Name"
          name="name"
          initialValue={project?.name}
          rules={[
            {
              required: true,
              message: "Please input Project Name!",
            },
          ]}
        >
          <Input placeholder="i.e To do list" size="large" />
        </Form.Item>

        <Form.Item
          label="Github Link"
          name="github"
          initialValue={project?.githubLink}
          rules={[
            {
              required: true,
              message: "Please input the GitHub Link!",
            },
          ]}
        >
          <Input placeholder="Coursera" size="large" />
        </Form.Item>

        <Form.Item
          label="Hosted Link"
          name="hosted"
          initialValue={project?.hostedLink}
          rules={[
            {
              required: true,
              message: "Please input the Hosted Link!",
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
                value={
                  project?.issueDate
                    ? new Date(project?.issueDate).toLocaleString("default", {
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
                value={project?.issueDate ? new Date(project?.issueDate).getFullYear() : null}
              />
            </Col>
          </Row>
        </StyledDate>
        <Form.Item
          label="Description"
          name={"description"}
          initialValue={project?.description}
          rules={[
            {
              required: true,
              message: "Please write description!",
            },
          ]}
        >
          <TextArea rows={5} />
        </Form.Item>
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

export default AddProject;
