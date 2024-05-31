import { CheckOutlined, FileFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Button, Space } from 'antd';
import styled from 'styled-components';
import mern_icon from '../../assets/images/courses/mern_icon.svg'
import useWindowSize from '../../hooks/useWindowSize';

const MyCoursesCard = () => {

    const { width } = useWindowSize();
    return (
        <StyledCard width={width}>
            <Top width={width}>
                <FlexBox width={width}>
                    <img src={mern_icon} height={33} width={33} alt='icon' />
                    <div className="header">
                        <h5>Front End Web Development</h5>
                        <Space>
                            <i> <FileFilled /></i>
                            <p className='lessons'>20 Lessons</p>
                        </Space>
                    </div>
                </FlexBox>
                <p className='completion'>0% Completed</p>
            </Top>
            <Bottom width={width}>
                <div className="content">
                    <div className="content-top">
                        <p>Last activity on week 1</p>
                    </div>
                    <div className="content-bottom">
                        <FlexBox>
                            <i><CheckOutlined style={{ color: 'green' }} /></i>
                            <div className='details'>
                                <p>Lecture 1 : Introduction to Data Science</p>
                                <p>End date : <span>16 August, 2024 </span>, 11:50 pm</p>
                            </div>
                        </FlexBox>
                        <Link to={'/video'} >
                            <Button type='primary' size='large' danger >Resume Learning</Button>
                        </Link>
                    </div>
                </div>
            </Bottom>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    padding: ${props => props.width >= 768 ? "24px" : "16px"};
    border-radius: 8px;
    border: 0.5px solid #5578D1;
    background: #F6FAFF;
`

const Top = styled.div`
    margin-bottom: 24px;
    display: flex;
    gap: 16px;
    /* align-items: center; */
    align-items: ${props => props.width >= 768 ? "center" : "flex-start"};
    flex-direction: ${props => props.width >= 768 ? "row" : "column"};
    .header{
        i{
            color: var(--secondaryColor);
        }
    }
    h5{
        color: var(--secondaryColor2);
        font-size: 24px;
        font-weight: 700;
    }
    img{
        margin: 10px;
    }
    .lessons{
        color: #343434;
        font-size: 14px;
        font-weight: 400;
    }
    .completion{
        color: #294169;
        font-size: 18px;
        font-weight: 400;
        margin-left: ${props => props.width >= 768 ? null : "70px"};
    }
`
const Bottom = styled.div`
        padding-left: ${props => props.width >= 768 ? "70px" : 0};
    .content-top{
        color: white;
        font-size: 16px;
        font-weight: 400;
        padding: 16px 20px;
        border-radius: 8px 8px 0px 0px;
        border-bottom: 0.5px solid #ABB6D2;
        background: var(--secondaryColor);
    }
    .content-bottom{
        display: flex;
        padding: 16px;
        gap:10px;
        border-radius: 8px;
        border: 1px solid #D2E0FF;
        background: var(--Color-White-100, #FFF);
        align-items: ${props => props.width >= 768 ? "center" : "flex-start"};
        flex-direction: ${props => props.width >= 768 ? "row" : "column"};
        i{
            padding: 5px;
        }
        button{
            font-family: 'DM Sans';
        }
    }
    .details{
        display: flex;
        flex-direction: column;
        gap: 8px;
        color: #474747;
        flex-grow: 1;
        p:first-Child{
            font-size: 16px;
            font-weight: 500;
        }
        p:nth-Child(2){
            font-size: 14px;
            font-weight: 400;
            span{
                font-weight: 500;
            }
        }
    }
`

const FlexBox = styled.div`
    display: flex;
    flex-grow: 1;
    gap: 16px;
    align-items: center;
`

export default MyCoursesCard;