import { ProfileOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const CreateUiEmployeeId = () => {
    return (
        <StyledCard>
            <i><ProfileOutlined /></i>
            <p>Create an Ui for Employee ID Card Portal</p>
        </StyledCard>
    )
}

const StyledCard = styled.div`
justify-content: flex-start;
align-items: center;
    display: flex;
    gap: 10px;
    color: #1D2026;
font-family: "DM Sans";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 150%;
`

export default CreateUiEmployeeId