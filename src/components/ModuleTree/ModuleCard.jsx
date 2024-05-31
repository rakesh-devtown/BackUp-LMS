import { ClockCircleOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import styled from 'styled-components';
import checkImg from '../../assets/images/checks.svg'

const ModuleCard = ({ title, locked }) => {
    return (
        <StyledModule>
            {/* module name */}
            <p className='title'>{title}</p>
            {/* module details */}
            <div className='module-details'>
                <Space size={24}>
                    <p>3 Lessons</p>
                    <Space>
                        <i><ClockCircleOutlined /></i>
                        <p> 45mins</p>
                    </Space>
                </Space>
                {
                    !locked &&
                    <Space>
                        <i> <img src={checkImg} alt="check.icon" /> </i>
                        <p>12% finished</p>
                    </Space>
                }
            </div>

        </StyledModule>
    )
}

const StyledModule = styled.div`
color: #555;
/* padding: 20px 14px; */
font-family: "DM Sans";
font-size: 16px;
font-weight: 500;
/* border-bottom: 1px solid #D6D6D6; */
.title{
    color: var(--secondaryColor);
}
.module-details{
    display: flex;
    flex-direction: column;
    gap: 12px;
}
`

export default ModuleCard;