import { useState } from "react";
import styled from "styled-components";
import { Button, Progress, Space } from "antd";
import SocialMediaCardSmall from "../Cards/SocialMediaCardSmall";
import useWindowSize from "../../hooks/useWindowSize";
import userPic from "../../assets/images/profilePic.jpg";
import shareIcon from "../../assets/images/shareIcon.png";
import ShareModal from "../Modals/ShareModal/ShareModal";
import { CameraOutlined, PlusOutlined } from "@ant-design/icons";
import ResumeModals from "../Modals/ResumeModals";
import useAuthStore from "../../store/authStore";

const ProfileHeader = () => {

  const [shareModal, setShareModal] = useState(false);
  const [addSocialMedia, setAddSocialMedia] = useState(false);
  const { width } = useWindowSize();
  const user = useAuthStore((state) => state.user);


  const handleShareModal = () => setShareModal(!shareModal);
  const handleAddSocialMedia = () => setAddSocialMedia(!addSocialMedia);

  const cameraIcon = {
    color: "#aea7a7",
    fontSize: "1rem",
    marginTop: "4px",
  };

  return (
    <Profile width={width}>
      {addSocialMedia && (
        <ResumeModals
          handleCancel={handleAddSocialMedia}
          keyItem={"socialMedia"}
        />
      )}
      <ShareModal
        showShareModal={shareModal}
        handleClose={handleShareModal}
        title={"Share my profile"}
      />

      <div className="profile-top">
        <ProfilePic userPic={userPic}>
          <Progress
            type="circle"
            percent={75}
            showInfo={false}
            strokeColor="#05B260"
          ></Progress>
          <div className="upload">
            <CameraOutlined style={cameraIcon} />
          </div>
        </ProfilePic>

        {/* for responsiveness showing in mobile */}
        <div className="hide-in-lptp">
          <Space className="name" size={15}>
            {user?.name}
            <img
              src={shareIcon}
              alt="icon"
              className="share-icon"
              onClick={handleShareModal}
            />
          </Space>
          <div className="field"> UX Designer</div>
        </div>
      </div>
      <Space direction="vertical">
        <div className="hide-in-mobile">
          <div className="name-card">
            <Space className="name" size={15}>
            {user?.name}
              <img
                src={shareIcon}
                alt="icon"
                className="share-icon"
                onClick={handleShareModal}
              />
            </Space>
            <StyledMediaCard>
              {/* social media link of the user */}
              <SocialMediaCardSmall />
              <Button shape="circle" onClick={handleAddSocialMedia}>
                <PlusOutlined />
              </Button>
            </StyledMediaCard>
          </div>
          <div className="field"> UX Designer</div>
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo.
        </div>
        <div className="hide-in-lptp card-bottom">
          <StyledMediaCard>
            <SocialMediaCardSmall />
            <Button shape="circle" onClick={handleAddSocialMedia}>
              <PlusOutlined />
            </Button>
          </StyledMediaCard>
        </div>
      </Space>
    </Profile>
  );
};

const Profile = styled.div`
  display: flex;
  gap: ${(props) => (props.width >= 768 ? "40px" : "24px")};
  align-items: center;
  align-self: stretch;
  flex-direction: ${(props) => (props.width >= 768 ? "row" : "column")};
  .hide-in-lptp {
    display: ${(props) => (props.width >= 768 ? "none" : null)};
  }
  .hide-in-mobile {
    display: ${(props) => (props.width >= 768 ? null : "none")};
  }
  .profile-top {
    display: flex;
    gap: 25px;
    align-items: center;
    width: ${(props) => (props.width >= 768 ? null : "100%")};
  }
  .name {
    font-family: Inter;
    font-size: 36px;
    font-weight: 700;
    background: linear-gradient(90deg, #0a5be0 0%, #ff4e72 104.46%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .name-card {
    display: flex;
    justify-content: space-between;
    .share-icon {
      cursor: pointer;
    }
  }
  .field {
    color: #384d6d;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
  }
  .text {
    color: #61738e;
    font-family: "DM Sans";
    font-size: 16px;
    font-weight: 400;
  }
  .card-bottom {
    margin-top: 12px;
  }
`;

const StyledMediaCard = styled(Space)`
  .ant-btn {
    display: none;
    color: #0859de;
    transition: all 0.3s;
    &:hover {
      color: white !important;
      background-color: #0859de !important;
    }
  }
  &:hover {
    .ant-btn {
      display: block;
    }
  }
`;

const ProfilePic = styled.div`
  position: relative;
  background-image: ${(props) => `url(${props.userPic})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  overflow: hidden;
  height: 120px;
  width: 120px;
  cursor: pointer;
  .ant-progress {
    position: relative;
    z-index: 5;
  }
  .upload {
    display: none;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgb(0, 0, 0, 0.5);
    width: 100%;
    height: 28%;
    text-align: center;
  }
  &:hover .upload {
    display: inline-block;
    /* bottom:0; */
  }
`;
export default ProfileHeader;
