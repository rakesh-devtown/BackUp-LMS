import { Button, Space } from 'antd';
import { EditOutlined, SearchOutlined, UploadOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { GoDotFill } from 'react-icons/go';
import useWindowSize from '../../../hooks/useWindowSize';
import { CardContainer, CardInner, DotStyle } from '../../../styles/myResume.styles';


const CertificationCard = ({ icon, }) => {

    const { width } = useWindowSize();

    return (
        <CardContainer width={width}>
            <div>
                <img src={icon} alt="logo" />
            </div>
            <CardInnerVariant width={width}>
                <Space size={2} direction="vertical">
                    <h5>Google UX Design Professional Certification</h5>
                    <Space size={6} align='start' >
                        <p>Coursera</p>
                        <DotStyle><GoDotFill /></DotStyle>
                        <p>Jan 2024</p>
                    </Space>
                    <p>Credential Id 4s65d4f54sdf545s4f543s54f64f</p>
                    <Button icon={<UploadOutlined />} iconPosition="end" shape='round' size='large'>Show Credential</Button>
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