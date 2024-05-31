import { useState } from 'react';
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { StyledContainer, StyledHeader } from '../../../styles/myResume.styles'
import CertificationCard from './CertificationCards';
import googleIcon from '../../../assets/images/googleIcon.png'
import ResumeModals from '../../Modals/ResumeModals';

const Certifications = () => {


    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(!showModal)

    return (
        <StyledContainer>
            {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"certification"} />}
            <StyledHeader>
                <h4>Certifications</h4>
                <Button type="text" size="large" icon={<PlusOutlined />} style={{ color: "#0859DE" }} onClick={handleShowModal} >Add</Button>
            </StyledHeader>
            <CertificationCard icon={googleIcon} />
        </StyledContainer>
    )
}

export default Certifications;