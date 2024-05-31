import { Button, Space } from 'antd';
import useWindowSize from '../../../hooks/useWindowSize';
import { EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import collegeLogo from '../../../assets/images/collegeLogo.png'
import { GoDotFill } from 'react-icons/go';
import { CardContainer, CardInner, DotStyle } from '../../../styles/myResume.styles';
import { useState } from 'react';
import ResumeModals from '../../Modals/ResumeModals';


const EducationCard = () => {

    const { width } = useWindowSize();
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(!showModal)


    return (
        <CardContainer width={width}>
            {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"education"} value={{}} />}
            <div>
                <img src={collegeLogo} alt="logo" />
            </div>
            <CardInner width={width}>
                <Space size={2} direction="vertical">
                    <h5>Rathinam College of Arts and Science</h5>
                    <Space size={[6, 0]} align='start' wrap>
                        <p>Bachelor of commerce </p>
                        <DotStyle><GoDotFill /></DotStyle>
                        <p>B.Com, Accounting and Finance</p>
                    </Space>
                    <Space size={6} align='start'>
                        <p>Jul 2019</p>
                        <DotStyle><GoDotFill /></DotStyle>
                        <p>Mar 2022</p>
                    </Space>
                </Space>
                <Button type="text" danger icon={<EditOutlined />} size="large" onClick={handleShowModal} className='edit-btn' >Edit</Button>

            </CardInner>
        </CardContainer>
    )
}

export default EducationCard;