import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Checkbox, Col, Form, Input, InputNumber, Row, Upload } from 'antd'
import CustomDatePicker from '../../DatePicker/CustomDatePicker'
import { StyledForm, Title, InnerContainer, StyledDate } from '../../../styles/myResume.styles'
import TextArea from 'antd/es/input/TextArea'
import CountrySelect from '../../CountrySelect/CountrySelect'
import { PlusOutlined } from '@ant-design/icons'

const EditPersonalDetails = ({ value }) => {

    const [upload, setUpload] = useState(true)


    const handleSubmit = (e) => console.log(e);
    const handleUpload = () => setUpload(!upload)

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <StyledForm name="basic" onFinish={handleSubmit} requiredMark={<PlusOutlined />} >
            <Title>Personal Details</Title>
            <InnerContainer>

                <Row gutter={[15, 15]}>
                    <Col span={24} sm={12}>
                        <Form.Item label="First Name" name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Role!',
                                },
                            ]}
                        >
                            <Input placeholder="Enter Your First Name" size='large' />
                        </Form.Item>
                    </Col>
                    <Col span={24} sm={12}>
                        <Form.Item label="Last Name" name="lastName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Last Name!',
                                },
                            ]}
                        >
                            <Input placeholder="Enter Your Last Name" size='large' />

                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[15, 15]}>
                    <Col span={24} sm={12}>
                        <Form.Item label="Whats App Number" name="whatsApp"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Whats App Number!',
                                },
                            ]}
                        >
                            <InputNumber placeholder="Enter Your Whats App Number" size='large' />
                        </Form.Item>
                    </Col>
                    <Col span={24} sm={12}>
                        <Form.Item label="Contact Number" name="contact"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Contact Number!',
                                },
                            ]}
                        >
                            <InputNumber placeholder="Enter Your Contact Number" size='large' />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item label="Email Address" name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email Address!',
                        },
                    ]}
                >
                    <Input type='email' placeholder="Enter Your Email Address" size='large' />

                </Form.Item>

                <Form.Item
                    name="location"
                    label="Location"
                    rules={[{ required: true, message: 'Please type your Location!' }]}
                >
                    <Input addonBefore={<CountrySelect />} />
                </Form.Item>

                <Form.Item label={"About Me"} name={"aboutMe"}
                    rules={[{ required: true, message: 'Please write about yourself!' }]}
                >
                    <TextArea rows={5} />
                </Form.Item>

                {/* resume upload */}
                {/* <Form.Item> */}
                {/* <FileFilled /> */}
                <Form.Item
                    name="resume"
                    label="My Resume"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    {
                        // upload &&
                        <StyledUpload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<PlusOutlined />} size='large' style={{ marginTop: "10px" }}>Upload</Button>
                        </StyledUpload>
                    }
                </Form.Item>


            </InnerContainer>
            <Form.Item>
                <Button type='primary' htmlType='submit' size='large'>Save</Button>
            </Form.Item>
        </StyledForm>
    )
}

const StyledUpload = styled(Upload)`
display: flex;
justify-content: center;
`
export default EditPersonalDetails