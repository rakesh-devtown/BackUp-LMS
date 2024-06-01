import { useState } from 'react';
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { StyledContainer, StyledHeader } from '../../../styles/myResume.styles'
import ResumeModals from '../../Modals/ResumeModals';
import SkillsCard from './SkillsCard';

const Skills = () => {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(!showModal)

    return (
        <StyledContainer>
            {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"skills"} />}
            <StyledHeader>
                <h4>Skills</h4>
                <Button type="text" size="large" icon={<PlusOutlined />} style={{ color: "#0859DE" }} onClick={handleShowModal}>Add</Button>
            </StyledHeader>
            <SkillsCard skills={["java", "css", "DSA"]} />
        </StyledContainer>
    )
}

export default Skills;