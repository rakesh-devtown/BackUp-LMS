import { useRef, useState } from "react";
import styled from "styled-components";
import { Button, Progress, Space, notification } from "antd";
import SocialMediaCardSmall from "../Cards/SocialMediaCardSmall";
import useWindowSize from "../../hooks/useWindowSize";
import userPic from "../../assets/images/profilePic.jpg";
import shareIcon from "../../assets/images/shareIcon.png";
import ShareModal from "../Modals/ShareModal/ShareModal";
import { CameraOutlined, PlusOutlined } from "@ant-design/icons";
import ResumeModals from "../Modals/ResumeModals";
import useAuthStore from "../../store/authStore";
import { serviceGet } from "../../utils/api";
import axios from "axios";
import useResumeStore from "../../store/resumeStore";

const ProfileHeader = () => {
  const [shareModal, setShareModal] = useState(false);
  const personalDetails = useResumeStore((state) => state.personalDetails);
  const role = useResumeStore((state) => state.role);
  const inputFile = useRef(null);
  const [addSocialMedia, setAddSocialMedia] = useState(false);
  const { width } = useWindowSize();
  const user = useAuthStore((state) => state.user);
  const setProfileImage = useAuthStore((state) => state.setProfileImage);

  const handleShareModal = () => setShareModal(!shareModal);
  const handleAddSocialMedia = () => setAddSocialMedia(!addSocialMedia);

  const cameraIcon = {
    color: "#aea7a7",
    fontSize: "1rem",
    marginTop: "4px",
  };

  const onFileUploadClick = () => {
    inputFile.current.click();
  };

  const handleFileChange = async (event) => {
    try {
      const file = event.target.files[0];
      if (
        file.type !== "image/png" &&
        file.type !== "image/jpeg" &&
        file.type !== "image/jpg"
      ) {
        return notification.error({
          message: "Error",
          description: "Please select valid Image",
        });
      }
      const extension = file.type.split("/")[1];
      const { data } = await serviceGet(
        `student/student/v1/me/url?type=.${extension}&path=/profile-pictures`
      );
      const url = data.url;
      const key = url.split("?")[0];
      console.log(key);
      const res = await fetch(url, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      });
      if (res.ok) {
        setProfileImage(key, user);
      }
    } catch (err) {
      console.log(err);
    }
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
        <ProfilePic userPic={user?.profilePic || userPic}>
          <button
            onClick={onFileUploadClick}
            style={{
              zIndex: 999,
              backgroundColor: "transparent",
              border: 0,
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          >
            <Progress
              type="circle"
              percent={75}
              showInfo={false}
              strokeColor="#05B260"
            ></Progress>
            <div className="upload">
              <CameraOutlined style={cameraIcon} />
            </div>
            <input
              ref={inputFile}
              onChange={handleFileChange}
              type="file"
              style={{ display: "none" }}
            />
          </button>
        </ProfilePic>
        {/* for responsiveness showing in mobile */}
        <div className="hide-in-lptp">
          <Space className="name" size={15}>
            {user?.name}
            {/* share profile button mobile view*/}
            {/* <img
              src={shareIcon}
              alt="icon"
              className="share-icon"
              onClick={handleShareModal}
            /> */}
          </Space>
          <div className="field">{role ? role : ''}</div>
        </div>
      </div>
      <Space direction="vertical profile-content">
        <div className="hide-in-mobile">
          <div className="name-card">
            <Space className="name" size={15}>
              {user?.name}
              {/* share profile button laptop view*/}
              {/* <img
                src={shareIcon}
                alt="icon"
                className="share-icon"
                onClick={handleShareModal}
              /> */}
            </Space>
            <StyledMediaCard socialLink={personalDetails?.socialLink}>
              {/* social media link of the user */}
              <SocialMediaCardSmall />
              <Button shape="circle" onClick={handleAddSocialMedia}>
                <PlusOutlined />
              </Button>
            </StyledMediaCard>
          </div>
          <div className="field">{role ? role : ""}</div>
        </div>
        <div className="text">{personalDetails?.aboutMe}</div>
        <div className="hide-in-lptp card-bottom">
          <StyledMediaCard socialLink={personalDetails?.socialLink}>
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
  .profile-content {
    flex-grow: 1;
  }
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
    text-transform: capitalize;
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
    display: ${(props) => (props.socialLink ? "none" : null)};
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
  flex-shrink: 0;
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
