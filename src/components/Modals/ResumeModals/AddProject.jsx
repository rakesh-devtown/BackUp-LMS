import React, { useState } from 'react';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import CustomDatePicker from '../../DatePicker/CustomDatePicker';
import useWindowSize from '../../../hooks/useWindowSize';
import { StyledForm, Title, InnerContainer, StyledDate, SaveBtn, UpdateDelete } from '../../../styles/myResume.styles';
import TextArea from 'antd/es/input/TextArea';
import customizeRequiredMark from '../../../utils/custom-form-functions';


const AddProject = ({ value }) => {

    const [state, setState] = useState(value);
    const [checked, setChecked] = useState(false)
    const { width } = useWindowSize();

    const handleDelete = () => console.log("delete");
    const handleCheckbox = () => setChecked(!checked)
    const handleSubmit = (e) => {
        console.log(e)
    }

    return (
        <StyledForm name="basic" onFinish={handleSubmit} requiredMark={customizeRequiredMark}>
            <Title>Add Project</Title>
            <InnerContainer>

                <Form.Item label="Project Name" name="project"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Project Name!',
                        },
                    ]}
                >
                    <Input placeholder="i.e To do list" size='large' />
                </Form.Item>

                <Form.Item label="Github Link" name="github"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the GitHub Link!',
                        },
                    ]}
                >
                    <Input placeholder="Coursera" size='large' />
                </Form.Item>

                <Form.Item label="Hosted Link" name="hosted"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the Hosted Link!',
                        },
                    ]}
                >
                    <Input placeholder="Coursera" size='large' />
                </Form.Item>

                <StyledDate>
                    <h5>Issue Date</h5>
                    <Row gutter={15}>
                        <Col span={12}>
                            <CustomDatePicker mode={'Month'} name={'startMonth'} />
                        </Col>
                        <Col span={12}>
                            <CustomDatePicker mode={'Year'} name={'startYear'} required={true} />
                        </Col>
                    </Row>
                </StyledDate>
                <Form.Item label="Description" name={"description"}
                    rules={[
                        {
                            required: true,
                            message: 'Please write description!',
                        },
                    ]}
                >
                    <TextArea rows={5} />
                </Form.Item>
            </InnerContainer>
            <Form.Item>
                {
                    value ? (
                        <UpdateDelete width={width}>
                            <Button type='primary' htmlType='submit' size='large'>Update</Button>
                            <Button type='primary' danger ghost size='large' onClick={handleDelete}>Delete</Button>
                        </UpdateDelete>
                    ) :
                        <SaveBtn width={width} type='primary' htmlType='submit' size='large'>Save</SaveBtn>
                }
            </Form.Item>
        </StyledForm>
    )
}

export default AddProject;