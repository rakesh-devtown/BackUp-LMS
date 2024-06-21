import { useState } from 'react';
import { Button, notification } from 'antd';
import { Title, InnerContainer } from '../../../styles/myResume.styles';
import Skill from './Skill';
import useResumeStore from '../../../store/resumeStore';
import { useEffect } from 'react';

const AddSkills = ({handleCancel,value}) => {
    const [userSkills, setUserSkills] = useState([])
    const {updateSkills} = useResumeStore();
    const resumeId = useResumeStore(state=>state.resumeId);
    const skills = useResumeStore(state=>state.skills);
    const handleSkills = (e) => setUserSkills(e)

    const handleSubmit = async(e) => {
        try{
            if(userSkills.length === 0) return notification.error({message:"Please add some skills"})
                const data = {
                    name:userSkills,
                    resumeId:resumeId
                }
                await updateSkills(data,skills);
        }catch(err)
        {
            console.log(err);
        }finally{
            handleCancel();
        }
    }

        useEffect(()=>{
            if(skills.length > 0)
            {
                setUserSkills(skills.map(ele=>ele.name));
            }
        },[skills])

    return (
        <>
            <Title>Add Skills</Title>
            <InnerContainer>
                <Skill skills={userSkills} setSkills={handleSkills} />
            </InnerContainer>
            <Button type='primary' size='large' onClick={handleSubmit} >Save</Button>
        </>
    )
}

export default AddSkills;