import { useEffect, useState } from 'react';
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { StyledContainer, StyledHeader } from '../../../styles/myResume.styles'
import ResumeModals from '../../Modals/ResumeModals';
import SkillsCard from './SkillsCard';
import useResumeStore from '../../../store/resumeStore';

const Skills = () => {

    const [showModal, setShowModal] = useState(false);
    const skills = useResumeStore(state => state.skills);
    const [userSkills, setUserSkills] = useState([]);
    const handleShowModal = () => setShowModal(!showModal)

    useEffect(()=>{
        if(skills.length > 0)
        {
            setUserSkills(skills.map(ele=>ele.name));
        }
    },[skills])

    return (
        <StyledContainer>
            {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"skills"} />}
            <StyledHeader>
                <h4>Skills</h4>
                <Button type="text" size="large" icon={<PlusOutlined />} style={{ color: "#0859DE" }} onClick={handleShowModal}>Add</Button>
            </StyledHeader>
            <SkillsCard skills={userSkills} />
        </StyledContainer>
    )
}

export default Skills;