import { FileFilled } from '@ant-design/icons';
import { Space } from 'antd';
import styled from 'styled-components';
import mern_icon from '../../assets/images/courses/mern_icon.svg'
import useWindowSize from '../../hooks/useWindowSize';
import LastActivityCard from './LastActivityCard';

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
            <LastActivityCard leftPadding={true} />
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

const FlexBox = styled.div`
    display: flex;
    flex-grow: 1;
    gap: 16px;
    align-items: center;
`

export default MyCoursesCard;