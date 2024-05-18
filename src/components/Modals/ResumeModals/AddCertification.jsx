import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Checkbox, Col, Form, Input, InputNumber, Row } from 'antd'
import CustomDatePicker from '../../DatePicker/CustomDatePicker'
import { StyledForm, Title, InnerContainer, StyledDate } from '../../../styles/myResume.styles'
import TextArea from 'antd/es/input/TextArea'
import Skill from './Skill3'


const AddCertification = () => {

    const [checked, setChecked] = useState(false)
    const [skills, setSkills] = useState([])

    const handleCheckbox = () => setChecked(!checked)
    const handleSkills = (e) => setSkills(e)

    const handleSubmit = (e) => {
        console.log(e)
    }

    return (
        <StyledForm name="basic" onFinish={handleSubmit} >
            <Title>Add Cetificate</Title>
            <InnerContainer>

                <Form.Item label="Certificate Name" name="certificate"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Certificate Name!',
                        },
                    ]}
                >
                    <Input placeholder="i.e Google UX Design" size='large' />
                </Form.Item>

                <Form.Item label="Issuing Organization" name="issueOrg"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the Issuing Organization Name!',
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

                <Form.Item label="Credential ID" name="credentialId"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Credential ID!',
                        },
                    ]}
                >
                    <Input placeholder="i.e ID" size='large' />
                </Form.Item>

                <Form.Item label="Credential URL" name="credentialUrl"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Credential URL!',
                        },
                    ]}
                >
                    <Input placeholder="i.e URL" size='large' />
                </Form.Item>
                <Skill skills={skills} setSkills={handleSkills} />
                <Form.Item name={"checked"}>
                    <Checkbox onChange={handleCheckbox} checked={checked}>Add DevTown Certificate</Checkbox>
                </Form.Item>
            </InnerContainer>
            <Form.Item>
                <Button type='primary' htmlType='submit' size='large'>Save</Button>
            </Form.Item>
        </StyledForm>
    )
}

export default AddCertification;