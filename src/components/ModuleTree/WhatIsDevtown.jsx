import { FileOutlined } from "@ant-design/icons"
import { Button, Space } from "antd"
import styled from "styled-components"

const WhatIsDevtown = () => {
    return (
        <StyledCard>
            <Space size={12}>
                <i><FileOutlined /></i>
                <p>What is DevTown?</p>
            </Space>
            <Button type="primary">Download</Button>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        color: #1D2026;
font-family: "DM Sans";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 150%;
    }
`

export default WhatIsDevtown;