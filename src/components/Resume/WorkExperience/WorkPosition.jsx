import { useState } from 'react';
import { Button, Space } from 'antd';
import styled from 'styled-components';
import { EditOutlined } from '@ant-design/icons';
import { GoDotFill } from "react-icons/go";
import useWindowSize from '../../../hooks/useWindowSize';
import ResumeModals from '../../Modals/ResumeModals';
import { CardContainer, CardInner } from '../../../styles/myResume.styles';


const WorkPosition = ({mockData}) => {

    const { width } = useWindowSize();
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(!showModal)


    return (
        <CardContainer width={width}>
            {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"experience"} value={mockData} />}
            <div>
                <GoDotFill color="#6422CD" size={25} />
            </div>
            <CardInner width={width}>
                <Space size={10} direction="vertical">
                    <h5>{mockData?.role}</h5>
                    <p>{mockData?.detail}</p>
                </Space>
                <Button type="text" danger icon={<EditOutlined />} size="large" className='edit-btn' onClick={handleShowModal} >Edit</Button>

            </CardInner>
        </CardContainer>
    )
}

export default WorkPosition;