import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { AppleFilled, WindowsFilled } from '@ant-design/icons';
import styled from 'styled-components';
import useWindowSize from '../../../hooks/useWindowSize';
import { StyledParagraph, StyledTitle, StyledModalContent } from '../../../styles/settings.styles';



const DeviceLogged = ({ handleCancel }) => {

    const { width } = useWindowSize()

    const handleClear = () => {
        handleCancel()
    }

    return (
        <StyledVariant width={width}>
            <StyledTitle level={2}>Device Logged</StyledTitle>
            <div className='sub-container' >
                <Card width={width} className='card1'>
                    <div><i><WindowsFilled /></i> <p>Windows</p></div>
                    <p>Your Current Session</p>
                    <div className='hidden hidden-card1'>Logout</div>
                </Card>
                <Card width={width} className='card2'>
                    <div><i><WindowsFilled /></i> <p>Mac</p></div>
                    <p>November 27,2024</p>
                    <div className='hidden hidden-card2'>Logout</div>
                </Card>
                {/* <Card className='card3'>
                    <div><i><WindowsFilled /></i> <p>Windows</p></div>
                    <p>November 27,2024</p>
                    <div className='hidden hidden-card3'>Logout</div>
                </Card>
                <Card className='card4'>
                    <div><i><WindowsFilled /></i> <p>Linux</p></div>
                    <p>November 27,2024</p>
                    <div className='hidden hidden-card4'>Logout</div>
                </Card>
                <Card className='card5'>
                    <div><i><AppleFilled /></i> <p>IOS Mobile</p></div>
                    <p>March 27,2024</p>
                    <div className='hidden hidden-card5'>Logout</div>
                </Card> */}
                <Button type='primary' size='large' style={{ height: "55px" }} onClick={handleClear}>Clear all session</Button>
                <Link className='last-element'>Have problem with devices login?</Link>
            </div>
        </StyledVariant>
    )
}

const StyledVariant = styled(StyledModalContent)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    .sub-container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 17px;
    }
    .last-element{
        color: var(--Color-Brand-Brand-Blue, #0859DE);
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        padding: 16px 0;
    }

    /* showing logout option based on hover card */
    .card1:hover .hidden-card1{
        display:flex;
    }
    .card2:hover .hidden-card2{
        display:flex;
    }
    .card3:hover .hidden-card3{
        display:flex;
    }
    .card4:hover .hidden-card4{
        display:flex;
    }
    .card5:hover .hidden-card5{
        display:flex;
    }
`

const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${props => props.width >= 768 ? "16px 24px" : "16px 5px"};
    width: ${props => props.width >= 768 ? "430px" : "330px"};
    
    color: #081735;
    font-size: 18px;
    font-weight: 500;
    border-radius: 6.487px;
    cursor: pointer;
    div{
        display: flex;
        gap: 12px;
    }
    .hidden{
        display: none;
        justify-content: center;
        align-items:center ;
        padding: 16px 24px;
        width: ${props => props.width >= 768 ? "430px" : "330px"};
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #DE0844;
        z-index: 55;
        border-radius: 6.487px;
        font-size: 18px;
        font-weight: 600;
        color: white;
        transition: all 0.3s;
        
    }
    .hidden-card1{
        background-color: #0859DE;
    }
`
export default DeviceLogged;

