import { ClockCircleOutlined, FolderOpenOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Space, Typography } from 'antd';
import styled from "styled-components"


const FolderDetailsCard = () => {

    return (
        <StyledDetailsCard>
            <div className='small-box'>
                <i><FolderOpenOutlined /></i>
                <p>6 Sections</p>
            </div>
            <div className='small-box'>
                <i><PlayCircleOutlined /></i>
                <p>202 lectures</p>
            </div>
            <div className='small-box'>
                <i><ClockCircleOutlined /></i>
                <p>19h 37m</p>
            </div>
        </StyledDetailsCard>
    )
}

export default FolderDetailsCard;

const StyledDetailsCard = styled.div`
    display: flex;
    font-family: Inter;
    gap: 16px;
    .small-box{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 6px;
        i{
            color: #1E6DE8;
        }
        p{
            color: #4E5566;
            font-size: 14px;
            font-weight: 400;
            line-height: 22px; /* 157.143% */
            letter-spacing: -0.14px;
        }
    }    
`
