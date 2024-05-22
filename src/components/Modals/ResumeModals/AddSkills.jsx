import { useState } from 'react';
import { Button } from 'antd';
import { Title, InnerContainer } from '../../../styles/myResume.styles';
import Skill from './Skill';

const AddSkills = () => {
    const [skills, setSkills] = useState([])

    const handleSkills = (e) => setSkills(e)
    const handleSubmit = (e) => {
        console.log(e)
    }

    return (
        <>
            <Title>Add Skills</Title>
            <InnerContainer>
                <Skill skills={skills} setSkills={handleSkills} />
            </InnerContainer>
            <Button type='primary' size='large' onClick={handleSubmit} >Save</Button>
        </>
    )
}

export default AddSkills;