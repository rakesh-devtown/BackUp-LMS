import { useState } from 'react';
import styled from 'styled-components';
import { Button, Form, Input } from 'antd'
import { StyledForm, Title, InnerContainer } from '../../../styles/myResume.styles'
import LinkedIn from '../../../assets/images/socialMediaLogo/Linkedin.png';
import Leetcode from '../../../assets/images/socialMediaLogo/Leetcode.png';
import Github from '../../../assets/images/socialMediaLogo/GitHub.png';
import Behance from '../../../assets/images/socialMediaLogo/Behance.png';
import Reddit from '../../../assets/images/socialMediaLogo/Reddit.png';
import Website from '../../../assets/images/socialMediaLogo/Website.png';
import Medium from '../../../assets/images/socialMediaLogo/Medium.png';
import Dribble from '../../../assets/images/socialMediaLogo/Dribble.png';


const mockData = [
    {
        name: "LinkedIn",
        img: LinkedIn
    },
    {
        name: "Github",
        img: Github
    },
    {
        name: "Leetcode",
        img: Leetcode
    },
    {
        name: "Website",
        img: Website
    },
    {
        name: "Dribble",
        img: Dribble
    },
    {
        name: "Behance",
        img: Behance
    },
    {
        name: "Reddit",
        img: Reddit
    },
    {
        name: "Medium",
        img: Medium
    },
]


const AddSocialMedia = () => {

    const [values, setValues] = useState({})
    const [form] = Form.useForm();

    Form.useWatch((val) => {
        setValues(val)
    }, form);

    const handleSubmit = (e) => {
        console.log(e);
    }
    const handleRemove = (field) => {
        form.resetFields([field])
    }

    return (
        <>
            <StyledForm form={form} name="basic" onFinish={handleSubmit} >
                <Title>Add Social Media Account</Title>
                <InnerContainer>
                    {
                        mockData.map((e, id) => (
                            <StyledCard>
                                <img src={e.img} alt='icon' />
                                <Form.Item label={e.name} name={e.name}
                                    rules={[
                                        {
                                            type: 'url',
                                            // warningOnly: true,
                                            message: "Please type valid URL!"
                                        },
                                    ]}
                                >
                                    <Input placeholder='Url' size='large' />
                                </Form.Item>
                                {
                                    values?.[e.name] &&
                                    <Button type='text' danger onClick={() => handleRemove(e.name)} >Remove</Button>
                                }
                            </StyledCard>
                        ))
                    }

                </InnerContainer>
                <Form.Item>
                    <Button type='primary' htmlType='submit' size='large'>Save</Button>
                </Form.Item>
            </StyledForm >
        </>
    )
}


const StyledCard = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    i{
      display: grid;
      place-items: center;
      height: 67px;
      width: 67px;
      color: white;
      background-color: #069;
      border-radius: 50%;
    }
`
export default AddSocialMedia