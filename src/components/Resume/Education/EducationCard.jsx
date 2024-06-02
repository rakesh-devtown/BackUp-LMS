import { Button, Space } from 'antd';
import useWindowSize from '../../../hooks/useWindowSize';
import { EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import collegeLogo from '../../../assets/images/collegeLogo.png'
import { GoDotFill } from 'react-icons/go';
import { DotStyle } from '../../../styles/myResume.styles';
import { useState } from 'react';
import ResumeModals from '../../Modals/ResumeModals';


const EducationCard = () => {

    const { width } = useWindowSize();
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(!showModal)


    return (
        <Position width={width}>
            {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"education"} value={{}} />}
            <div>
                <img src={collegeLogo} alt="logo" />
            </div>
            <div className="inner-container">
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

            </div>
        </Position>
    )
}

const Position = styled.div`
display: flex;
padding: ${props => props.width >= 768 ? '8px 40px' : '8px 16px'};
flex-direction: ${props => props.width >= 768 ? 'row' : 'column'} ;
gap: ${props => props.width >= 768 ? "32px" : "8px"};
align-items: ${props => props.width >= 768 ? 'center' : 'flex-start'};

.inner-container{
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    gap: ${props => props.width >= 768 ? '30px' : '8px'};
    flex-direction: ${props => props.width >= 768 ? 'row' : 'column'} ;
    align-items: ${props => props.width >= 768 ? 'center' : 'flex-start'};

}
`

export default EducationCard;