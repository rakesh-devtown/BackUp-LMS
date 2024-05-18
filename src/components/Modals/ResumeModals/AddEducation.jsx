import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Checkbox, Col, Form, Input, InputNumber, Row } from 'antd'
import CustomDatePicker from '../../DatePicker/CustomDatePicker'
import { StyledForm, Title, InnerContainer, StyledDate } from '../../../styles/myResume.styles'


const AddEducation = () => {

    const [checked, setChecked] = useState(false)

    const handleCheckbox = () => setChecked(!checked)

    const handleSubmit = (e) => {
        console.log(e)
    }

    return (
        <StyledForm name="basic" onFinish={handleSubmit} >
            <Title>Add Education</Title>
            <InnerContainer>

                <Form.Item label="College Name" name="collegeName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your College Name!',
                        },
                    ]}
                >
                    <Input placeholder="i.e IIT Madras" size='large' />
                </Form.Item>
                <Form.Item label="Grade" name="grade"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your grade!',
                        },
                    ]}
                >
                    <InputNumber max={10} min={0} placeholder="i.e 8.5" size='large' />
                </Form.Item>
                <StyledDate>
                    <h5>Start Date</h5>
                    <Row gutter={15}>
                        <Col span={12}>
                            <CustomDatePicker mode={'Month'} name={'startMonth'} />
                        </Col>
                        <Col span={12}>
                            <CustomDatePicker mode={'Year'} name={'startYear'} required={true} />
                        </Col>
                    </Row>
                </StyledDate>
                <StyledDate>
                    <h5>End Date</h5>
                    {!checked &&
                        <Row gutter={15}>
                            <Col span={12}>
                                <CustomDatePicker mode={'Month'} name={'endMonth'} />
                            </Col>
                            <Col span={12}>
                                <CustomDatePicker mode={'Year'} name={'endYear'} required={true} />
                            </Col>
                        </Row>
                    }
                    <Form.Item name={"checked"}>
                        <Checkbox onChange={handleCheckbox} checked={checked}>On - Going</Checkbox>
                    </Form.Item>
                </StyledDate>
            </InnerContainer>
            <Form.Item>
                <Button type='primary' htmlType='submit' size='large'>Save</Button>
            </Form.Item>
        </StyledForm>
    )
}

export default AddEducation;