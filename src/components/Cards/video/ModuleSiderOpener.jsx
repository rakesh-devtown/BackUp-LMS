import { ArrowLeftOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import React from 'react'
import FolderDetailsCard from './FolderDetailsCard'
import styled from 'styled-components'

const ModuleSiderOpenerCard = ({ handleCollapsed }) => {

    return (
        <StyledDiv>
            <Button type='link' size='large' style={{ paddingLeft: "0" }}> <ArrowLeftOutlined /> Back</Button>
            <div className='container'>
                <div className='content' onClick={() => handleCollapsed()}>
                    <div>
                        <Typography.Title level={3}> Full Stack Web Development Industrial Training program</Typography.Title>
                    </div>
                    <FolderDetailsCard />
                </div>
                <RightOutlined style={{ color: "#0859DE" }} size={"large"} />
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
padding: 20px;
.container{
    display: flex;
    gap :5px;
}
 .content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 1 0 0;
        font-family: Inter;
        div h3{
            color: var(--secondaryColor);
            font-size: 32px;
            font-weight: 700;
            line-height: 40px; /* 125% */
            letter-spacing: -0.32px;
        }
    }
`

export default ModuleSiderOpenerCard;