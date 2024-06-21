import { Button, Space } from 'antd';
import useWindowSize from '../../../hooks/useWindowSize';
import { EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import collegeLogo from '../../../assets/images/college.png'
import { GoDotFill } from 'react-icons/go';
import { CardContainer, CardInner, DotStyle } from '../../../styles/myResume.styles';
import { useState } from 'react';
import ResumeModals from '../../Modals/ResumeModals';
import useResumeStore from '../../../store/resumeStore';


const EducationCard = ({item,name,degree,startDateMonth,startDateYear, endDateMonth, endDateYear,index}) => {

    const { width } = useWindowSize();
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(!showModal)


    return (
        <CardContainer width={width}>
            {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"education"} value={item} />}
            <div>
                <img src={collegeLogo} alt="logo" style={{width:'45px', height:'45px'}}/>
            </div>
            <CardInner width={width}>
                <Space size={2} direction="vertical">
                    <h5>{name}</h5>
                    <Space size={[6, 0]} align='start' wrap>
                        <p>{degree}</p>
                        {/* <DotStyle><GoDotFill /></DotStyle>
                        <p>B.Com, Accounting and Finance</p> */}
                    </Space>
                    <Space size={6} align='start'>
                        <p>{startDateMonth + " "+ startDateYear}</p>
                        <DotStyle><GoDotFill /></DotStyle>
                        <p>{endDateMonth ? endDateMonth + " " + endDateYear : "Present"}</p>
                    </Space>
                </Space>
                <Button type="text" danger icon={<EditOutlined />} size="large" onClick={handleShowModal} className='edit-btn' 
                    >Edit

                </Button>
            </CardInner>
          </CardContainer>
        );
};

export default EducationCard;
