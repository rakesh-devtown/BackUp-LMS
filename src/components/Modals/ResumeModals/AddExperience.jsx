import React, { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { Button, Checkbox, Col, Form, Input, Row, Space } from 'antd';
import useWindowSize from '../../../hooks/useWindowSize';
import CustomDatePicker from '../../DatePicker/CustomDatePicker';
import { StyledForm, Title, InnerContainer, StyledDate, SaveBtn, UpdateDelete } from '../../../styles/myResume.styles';
import customizeRequiredMark from '../../../utils/custom-form-functions';
import useResumeStore from '../../../store/resumeStore';

const AddExperience = ({ value }) => {
  const [state, setState] = useState(value);
  const [checkbox1, setcheckbox1] = useState(value?.endDate.present);
  const [checkbox2, setcheckbox2] = useState(false);
  const { width } = useWindowSize();
  const { postExperience } = useResumeStore();

 
  const handleCheckbox1 = () => setcheckbox1(!checkbox1);
  const handleCheckbox2 = () => setcheckbox2(!checkbox2);

  const handleSubmit = async(e) => {
    try{
        const data={
            companyName:e.company,
            role:e.role,
            startDate:new Date(e.startYear,e.startMonth-1,10),
            endDate:checkbox1 ? null : new Date(e.endYear,e.endMonth-1,10),
            description:e.description,
            isProfileSubHeadline:checkbox2
        }
        await postExperience(data);         
    }catch(err){
        console.log(err)
    }
}

  const handleDelete = () => console.log("delete");

  return (
    <StyledForm
      name="basic"
      onFinish={handleSubmit}
      requiredMark={customizeRequiredMark}
    >
      <Title>{value ? "Edit" : "Add"} Work Experience</Title>
      <InnerContainer>
        <Form.Item
          label="Role"
          name="role"
          initialValue={state?.role}
          rules={[
            {
              required: true,
              message: "Please input your Role!",
            },
          ]}
        >
          <Input placeholder="i.e Software Engineer" size="large" />
        </Form.Item>
        <Form.Item
          label="Company Name"
          name="company"
          initialValue={state?.company}
          rules={[
            {
              required: true,
              message: "Please input the company name!",
            },
          ]}
        >
          <Input placeholder="i.e Google" size="large" />
        </Form.Item>
        <StyledDate>
          <h5>Start Date</h5>
          <Row gutter={15}>
            <Col span={12}>
              <CustomDatePicker
                mode={"Month"}
                name={"startMonth"}
                value={state?.startDate.month}
              />
            </Col>
            <Col span={12}>
              <CustomDatePicker
                mode={"Year"}
                name={"startYear"}
                required={true}
                value={state?.startDate.year}
              />
            </Col>
          </Row>
        </StyledDate>
        <StyledDate>
          <h5>End Date</h5>
          {!checkbox1 && (
            <Row gutter={15}>
              <Col span={12}>
                <CustomDatePicker
                  mode={"Month"}
                  name={"endMonth"}
                  value={state?.endDate.month}
                />
              </Col>
              <Col span={12}>
                <CustomDatePicker
                  mode={"Year"}
                  name={"endYear"}
                  required={true}
                  value={state?.endDate.year}
                />
              </Col>
            </Row>
          )}
        </StyledDate>
        <Form.Item name={"presentChecked"}>
          <Checkbox onChange={handleCheckbox1} checked={checkbox1}>
            Present
          </Checkbox>
        </Form.Item>
        <Form.Item label="Description" name={"description"}>
          <TextArea rows={5} />
        </Form.Item>
        <Form.Item name={"profileHeadlineChecked"}>
          <Checkbox onChange={handleCheckbox2} checked={checkbox2}>
            Add as Profile Sub Headline
          </Checkbox>
        </Form.Item>
      </InnerContainer>
      <Form.Item>
        {value ? (
          <UpdateDelete width={width}>
            <Button type="primary" htmlType="submit" size="large">
              Update
            </Button>
            <Button
              type="primary"
              danger
              ghost
              size="large"
              onClick={handleDelete}
            >
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

export default AddExperience;
