import { useState } from "react";
import styled from "styled-components";
import { Button, Progress, Space } from "antd";
import SocialMediaCardSmall from "../Cards/SocialMediaCardSmall";
import useWindowSize from "../../hooks/useWindowSize";
import userPic from "../../assets/images/userPic.jpeg"
import shareIcon from "../../assets/images/shareIcon.png"
import ShareModal from "../Modals/ShareModal/ShareModal";
import { PlusOutlined } from "@ant-design/icons";
import ResumeModals from "../Modals/ResumeModals";

const ProfileHeader = () => {

    const [shareModal, setShareModal] = useState(false)
    const [addSocialMedia, setAddSocialMedia] = useState(false);
    const { width } = useWindowSize();



    const progressBarStyle = {
        backgroundImage: `url(${userPic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "50%",
    }

    const handleShareModal = () => setShareModal(!shareModal)
    const handleAddSocialMedia = () => setAddSocialMedia(!addSocialMedia)

    return (
        <Profile width={width}>
            {addSocialMedia && <ResumeModals handleCancel={handleAddSocialMedia} keyItem={"socialMedia"} />}
            <ShareModal showShareModal={shareModal} handleClose={handleShareModal} title={"Share my profile"} />

            <div className="profile-top">
                <Progress type="circle" percent={75} showInfo={false} strokeColor="#05B260" style={progressBarStyle}>
                </Progress>

                {/* for responsiveness showing in mobile */}
                <div className="hide-in-lptp">
                    <Space className="name" size={15}>
                        Sujith
                        <img src={shareIcon} alt="icon" className="share-icon" onClick={handleShareModal} />
                    </Space>
                    <div className="field"> UX Designer</div>
                </div>
            </div>
            <Space direction="vertical">
                <div className="hide-in-mobile">
                    <div className="name-card">
                        <Space className="name" size={15}>
                            Sujith
                            <img src={shareIcon} alt="icon" className="share-icon" onClick={handleShareModal} />
                        </Space>
                        <StyledMediaCard>
                            {/* social media link of the user */}
                            <SocialMediaCardSmall />
                            <Button shape="circle" onClick={handleAddSocialMedia} ><PlusOutlined /></Button>
                        </StyledMediaCard>

                    </div>
                    <div className="field"> UX Designer</div>
                </div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo.</div>
                <div className="hide-in-lptp card-bottom">

                    <StyledMediaCard>
                        <SocialMediaCardSmall />
                        <Button shape="circle" onClick={handleAddSocialMedia} ><PlusOutlined /></Button>
                    </StyledMediaCard>
                </div>
            </Space>
        </Profile>
    )
}

const Profile = styled.div`
   display: flex;
   gap: ${props => props.width >= 768 ? "40px" : "24px"};
   align-items: center;
   align-self: stretch;
   flex-direction:${props => props.width >= 768 ? "row" : "column"} ;
   .hide-in-lptp{
    display: ${props => props.width >= 768 ? "none" : null};
   }
   .hide-in-mobile{
    display: ${props => props.width >= 768 ? null : "none"};
   }
   .profile-top{
    display: flex;
    gap: 25px;
    align-items: center;
    width: ${props => props.width >= 768 ? null : "100%"};

   }
   .name{
       font-family: Inter;
       font-size: 36px;
       font-weight: 700;
       background: linear-gradient(90deg, #0A5BE0 0%, #FF4E72 104.46%);
       background-clip: text;
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;
    }
    .name-card{
        display: flex;
        justify-content: space-between;
        .share-icon{
            cursor: pointer;
        }
    }
    .field{
        color: #384D6D;
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
    }
    .text{
        color: #61738E;
        font-family: "DM Sans";
        font-size: 16px;
        font-weight: 400;
    }
    .card-bottom{
        margin-top: 12px;
    } 
`

const StyledMediaCard = styled(Space)`
    .ant-btn{
        display: none;
        color: #0859DE;
        transition: all 0.3s;
        &:hover{
            color: white !important;
            background-color: #0859DE !important;
        }
    }
    &:hover{
        .ant-btn{
            display: block;
        }
    }
`

export default ProfileHeader