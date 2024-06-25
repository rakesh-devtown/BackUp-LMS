import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Col, Form, Input, InputNumber, Row, notification } from 'antd';
import useWindowSize from '../../../hooks/useWindowSize';
import CustomDatePicker from '../../DatePicker/CustomDatePicker';
import { StyledForm, Title, InnerContainer, StyledDate, SaveBtn, UpdateDelete } from '../../../styles/myResume.styles';
import customizeRequiredMark from '../../../utils/custom-form-functions';
import useResumeStore from '../../../store/resumeStore';


const AddEducation = ({ value, handleCancel }) => {

    const [education, setEducation] = useState(value);
    const [checked, setChecked] = useState(false)
    const { width } = useWindowSize();

    const handleCheckbox = () => setChecked(!checked)
    const {postEducation, deleteEducation, updateEducation} = useResumeStore();
    //const education = useResumeStore(state => state.education);
    const handleSubmit = async(e) => {
        try{
            //return notification.success({message:"test"})
            const data = !value ? 
            {
                collageName:e.collegeName,
                grade:e.grade,
                startDate: new Date(e.startYear, e.startMonth-1,10),
                endDate: checked ? null : new Date(e.endYear, e.endMonth-1,10),
                degreeName: e.degreeName
            }:
            {
                collageName:e.collegeName,
                grade:e.grade,
                startDate: new Date(e.startYear, e.startMonth-1,10),
                endDate: checked ? null : new Date(e.endYear, e.endMonth-1,10),
                degreeName: e.degreeName,
                id: education.id
            }

            console.log(data)
            if(value)
            {
                await updateEducation(data);
            }
            else
            {
                await postEducation(data);
            }
            handleCancel();
        }catch(err)
        {
            console.log(err)
        }
    }


    const handleDelete = async() => {
        try{
            await deleteEducation(education.id);
            handleCancel();
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        if(value){
            setEducation(value);
            if(value.endDate === null){
                setChecked(true);
            }
        }
    },[value])


    return (
        <StyledForm name="basic" onFinish={handleSubmit} requiredMark={customizeRequiredMark}>
            <Title>Add Education</Title>
            <InnerContainer>

                <Form.Item label="College Name" name="collegeName"
                    initialValue={education?.collageName}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your College Name!',
                        },
                    ]}
                >
                    <Input placeholder="i.e IIT Madras" size='large' />
                </Form.Item>

                <Form.Item label="Course Name" name="degreeName"
                    initialValue={education?.degreeName}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Course Name!',
                        },
                    ]}
                >
                    <Input placeholder="i.e Bachelor of commerce" size='large' />
                </Form.Item>

                <Form.Item label="Grade" name="grade"
                    initialValue={education?.grade}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your grade!',
                        },
                    ]}
                >
                    <InputNumber max={10} min={0} placeholder="i.e 8.5" size='large' />
                </Form.Item>
                <StyledDate
                >
                    <h5>Start Date</h5>
                    <Row gutter={15}>
                        <Col span={12}>
                            <CustomDatePicker
                                mode={'Month'} name={'startMonth'} 
                                value={education?.startDate ? new Date(education.startDate).toLocaleString('default', { month: '2-digit' }): null}
                             />
                        </Col>
                        <Col span={12}>
                            <CustomDatePicker mode={'Year'} name={'startYear'} required={true} 
                                value={education?.startDate ? new Date(education.startDate).getFullYear() : null}
                            />
                        </Col>
                    </Row>
                </StyledDate>
                <StyledDate>
                    <h5>End Date</h5>
                    {!checked &&
                        <Row gutter={15}>
                            <Col span={12}>
                                <CustomDatePicker mode={'Month'} name={'endMonth'} 
                                    value={education?.endDate ? new Date(education.endDate).toLocaleString('default', { month: '2-digit' }) : null}
                                />
                            </Col>
                            <Col span={12}>
                                <CustomDatePicker mode={'Year'} name={'endYear'} required={true} 
                                    value={education?.endDate ? new Date(education.endDate).getFullYear() : null}
                                />
                            </Col>
                        </Row>
                    }
                    <Form.Item name={"checked"}>
                        <Checkbox

                            onChange={handleCheckbox} checked={checked}>On - Going</Checkbox>
                    </Form.Item>
                </StyledDate>
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

export default AddEducation;
