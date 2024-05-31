import React, { useState } from 'react'
import { Button, Checkbox, Col, Form, Input, InputNumber, Row } from 'antd'
import useWindowSize from '../../../hooks/useWindowSize'
import CustomDatePicker from '../../DatePicker/CustomDatePicker'
import { StyledForm, Title, InnerContainer, StyledDate, SaveBtn, UpdateDelete } from '../../../styles/myResume.styles'
import Skill from './Skill'
import customizeRequiredMark from '../../../utils/custom-form-functions'


const AddCertification = ({ value }) => {

    const [state, setState] = useState(value);
    const [checked, setChecked] = useState(false)
    const [skills, setSkills] = useState([])
    const { width } = useWindowSize();

    const handleDelete = () => console.log("delete");
    const handleCheckbox = () => setChecked(!checked)
    const handleSkills = (e) => setSkills(e)

    const handleSubmit = (e) => {
        console.log(e)
    }

    return (
        <StyledForm name="basic" onFinish={handleSubmit} requiredMark={customizeRequiredMark} >
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

export default AddCertification;