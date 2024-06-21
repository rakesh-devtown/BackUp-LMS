import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { StyledContainer, StyledHeader } from '../../../styles/myResume.styles'
import EducationCard from './EducationCard'
import { useState } from 'react'
import ResumeModals from '../../Modals/ResumeModals'
import useResumeStore from '../../../store/resumeStore'

const Education = () => {

    const [showModal, setShowModal] = useState(false);
    const education = useResumeStore(state => state.education);

    const handleShowModal = () => setShowModal(!showModal)

    return (
        <StyledContainer>
            {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"education"} />}
            <StyledHeader>
                <h4>Education</h4>
                <Button type="text" size="large" icon={<PlusOutlined />} style={{ color: "#0859DE" }} onClick={handleShowModal} >Add</Button>
            </StyledHeader>
            {
                education && education.map((edu, index) => (
                    <EducationCard key={index} 
                        item={edu}
                        name={edu.collageName} 
                        degree={edu.degreeName} 
                        startDateMonth={new Date(edu.startDate).toLocaleString('default', { month: 'short' })} 
                        startDateYear={new Date(edu.startDate).getFullYear()} 
                        endDateMonth={edu.endDate ? new Date(edu.endDate).toLocaleString('default', { month: 'short' }) : null} 
                        endDateYear={edu.endDate ? new Date(edu.endDate).getFullYear() : null} />
                ))
            }
        </StyledContainer>
    )
}

export default Education