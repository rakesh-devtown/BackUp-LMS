import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { StyledContainer, StyledHeader } from '../../../styles/myResume.styles';
import ResumeModals from '../../Modals/ResumeModals';
import { useState } from 'react';

const Project = () => {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(!showModal)

    return (
        <StyledContainer>
            {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"project"} />}
            <StyledHeader>
                <h4>Project</h4>
                <Button type="text" size="large" icon={<PlusOutlined />} style={{ color: "#0859DE" }} onClick={handleShowModal} >Add</Button>
            </StyledHeader>
        </StyledContainer>
    )
}

export default Project;