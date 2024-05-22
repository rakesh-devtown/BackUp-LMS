import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Col, Form, Input, InputNumber, Row, Space, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { EditOutlined, FileFilled, PlusOutlined } from '@ant-design/icons';
import useWindowSize from '../../../hooks/useWindowSize'
import { StyledForm, Title, InnerContainer, UpdateDelete } from '../../../styles/myResume.styles';
import CountrySelect from '../../CountrySelect/CountrySelect';
import customizeRequiredMark from '../../../utils/custom-form-functions';

const EditPersonalDetails = ({ value }) => {

    const [upload, setUpload] = useState(false)
    const { width } = useWindowSize();

    const handleDelete = () => console.log("delete");
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
        <StyledForm name="basic" onFinish={handleSubmit} requiredMark={customizeRequiredMark} >
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
                    {upload &&
                        <StyledUpload name="logo" action="/upload.do" listType="picture" onChange={handleUpload}>
                            <Button icon={<PlusOutlined />} size='large' style={{ marginTop: "10px" }}>Upload</Button>
                        </StyledUpload>
                    }
                </Form.Item>
                {
                    !upload &&
                    <UploadedResume>
                        <Space size={28}>
                            <FileFilled style={{ color: "red" }} />
                            <Space size={5} direction='vertical'>
                                <h5>Sujith S</h5>
                                <p>My Resume</p>
                            </Space>
                        </Space>
                        <Button type="text" danger icon={<EditOutlined />} size="large" onClick={handleUpload} >Edit</Button>
                    </UploadedResume>
                }

            </InnerContainer>
            <Form.Item>
                <UpdateDelete width={width}>
                    <Button type='primary' htmlType='submit' size='large'>Update</Button>
                    <Button type='primary' danger ghost size='large' onClick={handleDelete}>Cancel</Button>
                </UpdateDelete>
            </Form.Item>
        </StyledForm>
    )
}

const StyledUpload = styled(Upload)`
display: flex;
justify-content: center;
`

const UploadedResume = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "DM Sans";
    h5{
        color: #121212;
    }
    p{
        color: #121212;        
        font-size: 14px;
        font-weight: 400;
    }
    input{
        height: unset;
    }
`
export default EditPersonalDetails