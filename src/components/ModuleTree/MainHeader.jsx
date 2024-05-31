import { ClockCircleOutlined, FolderOpenOutlined, PlayCircleOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import styled from 'styled-components'

const MainHeader = () => {
    return (
        <StyledHeader>
            <h4>Full Stack Web Development - Self Paced</h4>
            <div>
                <Space>
                    <i><FolderOpenOutlined /></i>
                    <p>6 Sections</p>
                </Space>
                <Space>
                    <i><PlayCircleOutlined /></i>
                    <p>202 lectures</p>
                </Space>
                <Space>
                    <i><ClockCircleOutlined /></i>
                    <p>19h 37m</p>
                </Space>
            </div>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
padding: 22px 20px;
border-top-left-radius: 15px;
z-index: 100;
position: relative;
background-color: #122545;
    color: white;
    font-family: "DM Sans";
    font-style: normal;
    line-height: normal;
    h4{
        font-size: 26px;
        font-weight: 700;
        
    }
    p{
        font-size: 16px;
        font-weight: 500;
    }
`
export default MainHeader;