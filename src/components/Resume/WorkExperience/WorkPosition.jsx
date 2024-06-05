import { useState } from 'react';
import { Button, Space } from 'antd';
import styled from 'styled-components';
import { EditOutlined } from '@ant-design/icons';
import { GoDotFill } from "react-icons/go";
import useWindowSize from '../../../hooks/useWindowSize';
import ResumeModals from '../../Modals/ResumeModals';
import { CardContainer, CardInner } from '../../../styles/myResume.styles';


const WorkPosition = () => {

    const { width } = useWindowSize();
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(!showModal)

    const mockData = {
        role: "UX Designer",
        company: 'Devtown',
        startDate: { month: "04", year: "2023" },
        endDate: { preset: true },
        description: "lorem30 fjldkjvoivj jfdbjfoidj jvbj vnLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo."
    }

    return (
        <CardContainer width={width}>
            {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"experience"} value={mockData} />}
            <div>
                <GoDotFill color="#6422CD" size={40} />
            </div>
            <CardInner width={width}>
                <Space size={10} direction="vertical">
                    <h5>UX Designer</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo.</p>
                </Space>
                <Button type="text" danger icon={<EditOutlined />} size="large" className='edit-btn' onClick={handleShowModal} >Edit</Button>

            </CardInner>
        </CardContainer>
    )
}

export default WorkPosition;