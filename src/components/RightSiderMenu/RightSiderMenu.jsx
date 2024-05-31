import React from 'react'
import { BookOutlined, QuestionCircleOutlined, WechatOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const RightSiderMenu = () => {
    return (
        <MenuBar>
            <i><BookOutlined style={{ fontSize: "20px" }} /></i>
            <i><QuestionCircleOutlined style={{ fontSize: "20px" }} /></i>
            <i><WechatOutlined style={{ fontSize: "20px" }} /></i>
        </MenuBar>
    )
}

const MenuBar = styled.div`
    display: flex;
    width: 60px;
    padding: 18px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid #D2E0FF;
    background: var(--Color-White-100, #FFF);
    i{
        color: #9E9E9E;
        &:hover{
            color: var(--secondaryColor);
        }
    }
`
export default RightSiderMenu