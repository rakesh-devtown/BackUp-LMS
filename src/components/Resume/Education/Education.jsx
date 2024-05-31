import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { StyledContainer, StyledHeader } from '../../../styles/myResume.styles'
import EducationCard from './EducationCard'
import { useState } from 'react'
import ResumeModals from '../../Modals/ResumeModals'

const Education = () => {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(!showModal)

    return (
        <StyledContainer>
            {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"education"} />}
            <StyledHeader>
                <h4>Education</h4>
                <Button type="text" size="large" icon={<PlusOutlined />} style={{ color: "#0859DE" }} onClick={handleShowModal} >Add</Button>
            </StyledHeader>
            <EducationCard />
        </StyledContainer>
    )
}

export default Education