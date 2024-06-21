import { Button, Space } from 'antd';
import { EditOutlined, SearchOutlined, UploadOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { GoDotFill } from 'react-icons/go';
import useWindowSize from '../../../hooks/useWindowSize';
import { CardContainer, CardInner, DotStyle } from '../../../styles/myResume.styles';
import useResumeStore from '../../../store/resumeStore';


const CertificationCard = ({ icon, title, orgName, credId , month, year, url}) => {

    const { width } = useWindowSize();
   

    return (
        <CardContainer width={width}>
            <div>
                <img src={icon} alt="logo" style={{width:'60px', height:'60px'}}/>
            </div>
            <CardInnerVariant width={width}>
                <Space size={2} direction="vertical">
                    <h5>{title}</h5>
                    <Space size={6} align='start' >
                        <p>{orgName}</p>
                        <DotStyle><GoDotFill /></DotStyle>
                        <p><span>{month}</span>{" "}<span>{year}</span></p>
                    </Space>
                    <p>Credential Id {credId}</p>
                    
                        <Button  onClick={()=>{
                            window.open(url, "_blank")
                        }} icon={<UploadOutlined />} iconPosition="end" shape='round' size='large'>Show Credential</Button>
                    
                </Space>
                <Button type="text" danger icon={<EditOutlined />} size="large" className='edit-btn'>Edit</Button>
            </CardInnerVariant>
        </CardContainer>
    )
}


const CardInnerVariant = styled(CardInner)`
    .ant-space-item button{
        margin-top: 16px;
        color: #61738E;
        border-color: #61738E;
        &:hover{
            color: white;
            border: none;
            background-color: #0859DE;
        }
    }
`

export default CertificationCard;