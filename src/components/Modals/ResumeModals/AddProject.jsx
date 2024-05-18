import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Checkbox, Col, Form, Input, InputNumber, Row } from 'antd'
import CustomDatePicker from '../../DatePicker/CustomDatePicker'
import { StyledForm, Title, InnerContainer, StyledDate } from '../../../styles/myResume.styles'
import TextArea from 'antd/es/input/TextArea'


const AddProject = () => {

    const [checked, setChecked] = useState(false)

    const handleCheckbox = () => setChecked(!checked)

    const handleSubmit = (e) => {
        console.log(e)
    }

    return (
        <StyledForm name="basic" onFinish={handleSubmit} >
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
                <Button type='primary' htmlType='submit' size='large'>Save</Button>
            </Form.Item>
        </StyledForm>
    )
}

export default AddProject;