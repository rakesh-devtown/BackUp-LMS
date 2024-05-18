import { FacebookOutlined, LinkedinOutlined, WhatsAppOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import styled from 'styled-components'
import instaIcon from '../../assets/images/instaIcon.svg'

const SocialMediaCard = () => {

    return (
        <StyledShare>
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