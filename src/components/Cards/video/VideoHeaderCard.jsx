import { ArrowLeftOutlined, ClockCircleOutlined, FolderOpenOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Button, Space, Typography } from 'antd';
import styled from 'styled-components';
import FolderDetailsCard from './FolderDetailsCard';
import useWindowSize from '../../../hooks/useWindowSize';

const VideoHeaderCard = () => {

    const { width } = useWindowSize();

    return (
        <StyledMainContainer width={width}>
            <Header width={width}>
                {
                    width >= 768 &&
                    <StyledBtn1 type='text' shape='circle' > <ArrowLeftOutlined /> </StyledBtn1>
                }

                <Content>
                    <div>
                        <Typography.Title level={3} style={{ minWidth: "125px" }}> What is CSS Flexbox?</Typography.Title>
                    </div>
                    {/* <FolderDetailsCard /> */}
                </Content>
                <Space size={12} className='space-antd-btn' wrap={true} >
                    <StyledBtn2 type='text' size='large'>Previous Lecture</StyledBtn2>
                    <StyledBtn2 type='text' size='large'>Next Lecture</StyledBtn2>
                    {/* <button>Previous Lecture</button>
                <button>Next Lecture</button> */}
                </Space>
                {
                    width < 768 && <Button type='link' size='large'> <ArrowLeftOutlined />Back</Button>
                }
            </Header>
        </StyledMainContainer>

    )
}

const StyledMainContainer = styled.div`
    display: ${props => props.width >= 768 ? null : "flex"};
    justify-content: center;
    border-radius: 19px;
    background: var(--Color-White-100, #FFF);
    /* box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25); */
    box-shadow: ${props => props.width >= 768 ? "0px 0px 3px 0px rgba(0, 0, 0, 0.25)" : "none"};
`

const StyledBtn1 = styled(Button)`
    font-size: 1.5rem;
     height: 50px;
     width: 50px;
     min-width: auto;
     color: var(--secondaryColor);
     &:hover{
        color: white !important;
         background-color: var(--secondaryColor) !important;
     }
`
const StyledBtn2 = styled(Button)`
    font-weight: 600;
    color: var(--secondaryColor);
     &:hover{
        color: white !important;
         background-color: var(--secondaryColor) !important;
     }
`

const Header = styled.div`
    display: flex;
    padding: ${props => props.width >= 1300 ? "20px 22px" : "20px 5px"};
    align-items: ${props => props.width >= 768 ? "center" : "flex-start"};
    gap: 16px;
    align-self: stretch;
    flex-direction: ${props => props.width >= 768 ? "row" : "column"};
     //styling for buttons
     .space-antd-btn{
        justify-content: end;
          button{
            width: 160px;
            font-family: Inter;
            font-weight: 500;
            border-radius: 11px;
        }
}
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    flex: 1 0 0;
    font-family: Inter;
    div h3{
        color: var(--secondaryColor);
        font-size: 32px;
        font-weight: 600;
        line-height: 40px; /* 125% */
        letter-spacing: -0.32px;
        margin: 0;
    }
    
`

export default VideoHeaderCard;