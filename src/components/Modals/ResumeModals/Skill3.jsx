import { useState } from 'react'
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import styled from 'styled-components';
import { StyledForm } from '../../../styles/myResume.styles';

const Skill = ({ skills, setSkills }) => {

    const [addSkill, setAddSkill] = useState(false)

    const [form] = Form.useForm()
    const handleAddSkill = () => setAddSkill(!addSkill)
    const handleSubmit = (e) => {
        setSkills(pre => [...pre, e])
        console.log("clicked");
        form.resetFields()
        // setAddSkill(false)
    }
    const handleRemove = (e) => {
        setSkills(pre => [...pre.filter(ele => ele.skill !== e.skill)])
    }

    return (
        <StyledFormVariant form={form} onFinish={handleSubmit}>
            {
                addSkill &&
                <Form.Item label="Skills" name="skill" >
                    {/* <Input placeholder="Skill (i.e- Communication)" size='large' /> */}
                    <Input placeholder="Skill (i.e- Communication)" size='large' suffix={<Close onClick={handleAddSkill}><CloseOutlined /></Close>} />
                </Form.Item>
            }

            {!addSkill && <h5>Skills <span className='blue'>*</span></h5>
            }

            {/* display all the skills */}
            <StyledSkill>
                {
                    skills?.length > 0 && skills.map((ele, ind) => (
                        <div key={ind}>
                            <p>{ele.skill}</p>
                            <CloseOutlined style={{ fontSize: "10px" }} onClick={() => handleRemove(ele)} />
                        </div>
                    ))
                }
            </StyledSkill>

            {!addSkill &&
                <Button icon={<PlusOutlined />} size='large' shape='round' style={{ width: "fit-content", color: '#0859DE' }} onClick={handleAddSkill} > Add Skill</Button>
            }
        </StyledFormVariant>
    )
}

const StyledFormVariant = styled(StyledForm)`
    .ant-input-affix-wrapper{
        padding: 0;
    }
`

const Close = styled.i`
    position: absolute;
    top: 5px;
    right: 5px;
    color:rgba(0, 0, 0, 0.45);
    cursor:pointer;
`
const StyledSkill = styled.div`
display: flex;
gap: 10px;
padding: 10px 0 15px 0;
flex-wrap: wrap;
div{
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 2px 7px;
    border-radius: 30px;
    color: #384D6D;
    background-color: #f5deb37d;
}
`
export default Skill;