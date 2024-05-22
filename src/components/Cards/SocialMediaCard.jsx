import { useState } from 'react'
import styled from 'styled-components'
import { Button, Space, message } from 'antd'
import { FacebookOutlined, LinkedinOutlined, WhatsAppOutlined } from '@ant-design/icons'
import instaIcon from '../../assets/images/instaIcon.svg'
import { SuccessMessage } from '../../styles/messagePopup.styles'

const SocialMediaCard = () => {

    const [shareUrl, setShareUrl] = useState(window.location.href)
    const [messageApi, contextHolder] = message.useMessage();

    const handleShare = async () => {
        await navigator.clipboard.writeText(shareUrl);
        messageApi.open({
            key: 1,
            content: <SuccessMessage>Copied URL</SuccessMessage>,
            duration: 1,
            className: "success-message"
        });
    }

    return (
        <StyledShare>
            {/* succesful notification will be showed here */}
            {contextHolder}
            <div className='socialMedia'>
                <Space size={10} direction='vertical'>
                    <a className='whatsApp'><WhatsAppOutlined /></a>
                    <p>WhatsApp</p>
                </Space>
                <Space size={10} direction='vertical'>
                    <a className='insta'><img src={instaIcon} alt="icon" height={45} /></a>
                    <p>Instagram</p>
                </Space>
                <Space size={10} direction='vertical'>
                    <a className='linkedin'><LinkedinOutlined /></a>
                    <p>LinkedIn</p>
                </Space>
                <Space size={10} direction='vertical'>
                    <a className='facebook'><FacebookOutlined /></a>
                    <p>Facebook</p>
                </Space>
            </div>
            <CopyLink>
                <p>{shareUrl}</p>
                <Button type='primary' size='large' shape='round' onClick={handleShare} >Copy Link</Button>
            </CopyLink>
        </StyledShare>
    )
}

export default SocialMediaCard;
const StyledShare = styled.div`
.socialMedia{
    display: flex;
    justify-content: space-between;
    margin: 25px;
    p{
        color: #0F0F0F;
        font-family: Roboto;
        font-size: 11.667px;
        font-weight: 400;
        text-align: center;
    }
    
    a{
        display: grid;
        place-items: center;
        font-size: 2.5rem;
        border-radius: 50%;
        background-color: lightblue;
        color: white;
        height: 70px;
        width: 70px;
    }

    //custom background color for each icon div
    .whatsApp{
        background-color: #65D072;
    }
    .facebook{
        background-color: #425893;
    }
    .linkedin{
        background-color: #007EBB;
    }
    .insta{
        background-color: #FFDFEF;
    }
}

`

const CopyLink = styled.div`
display: flex;
align-items: center;
padding: 4px 4px 4px 18px;
gap: 10px;
border-radius: 40px;
border: 1px solid #CBCBCB;
background: #F9F9F9;
p{
flex-grow: 1;
color: #0F0F0F;
font-family: "DM Sans";
font-size: 14px;
font-weight: 400;
}
`