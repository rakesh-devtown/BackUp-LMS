import React, { useEffect, useState } from "react";
import {
  AppstoreOutlined,
  CheckCircleFilled,
  LockFilled,
  MailOutlined,
  SafetyCertificateOutlined,
  SettingFilled,
  SettingOutlined,
  UnlockFilled,
} from "@ant-design/icons";
import { Menu } from "antd";
import useBatchStore from "../../store/batchStore";
import { useNavigate } from "react-router-dom";
import { DropDownContainer, DropDownMenu } from "../../styles/dropdown.styles";
import styled from "styled-components";
const VideoIcon = styled(SettingFilled)`
  color: ${props => props.isLocked ? 'gray' : 'black'};
  display: flex;
  justify-content: space-between;
`;

const VideoLabel = styled.div`
  color: ${props => props.isLocked ? 'gray' : 'black'};
  display: flex;
  justify-content: space-between;
`;

const VideoName = styled.div`
  width: 93%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const VideoStatus = styled.div`
  width: 7%;
`;

const rootSubmenuKeys = ["sub1", "sub2", "sub4", "sub5", "sub6", "sub7"];
const Dropdown = ({ data, certificates , isPresent }) => {
  const [openKeys, setOpenKeys] = useState([]);
  
  const findVideoById = (videoId, data) => {

    for (let item of data) {
     if(item.progress && item.progress.videos )  {
      for (let video of item.progress.videos) {
        if (video === videoId) {
          return true;
        }
      }
     }
    }
    return false;
  };
  const setCurrentVideo = useBatchStore((state) => state.setCurrentVideo);
  const setCurrentSection = useBatchStore((state) => state.setCurrentSection);
  const navigate = useNavigate();

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
 

  
  const itemss = data?.map((item, i) => {
    const prevItem = i > 0 ? data[i - 1] : null;
    const { progress = [], videos } = prevItem || {};
    const isLocked = !(progress?.videos?.length === videos?.length);

    return {
      key: item._id,
      icon: <SettingOutlined />,
      children: item.videos.map((video, i) => ({
        onClick:() => {
          if (!isLocked) {
            setCurrentVideo(video);
          }
        },
        key: video._id,
        icon: <VideoIcon isLocked={isLocked} onClick={() => {
          if (!isLocked) {
            setCurrentVideo(video);
          }
        }} />,
        label: (
          <VideoLabel isLocked={isLocked} onClick={() => {
            if (!isLocked) {
              setCurrentVideo(video);
            }
          }}>
            <VideoName>{video.name}</VideoName>
            <VideoStatus>
              {isLocked ? <LockFilled /> : findVideoById(video._id , data ) ? <div style={{color:"green"}}> <CheckCircleFilled /></div> :  <UnlockFilled />}
            </VideoStatus>
          </VideoLabel>
        ),
      })),
      label: item.name,
      onClick: () => {
        setCurrentSection(item);
      },
    };
  });
  useEffect(() => {

  } , [isPresent ,data])
  return (
    <DropDownContainer maxHeight={window.innerHeight * 0.7}>
  <DropDownMenu
    mode="inline"
    openKeys={openKeys}
    onOpenChange={onOpenChange}
    items={itemss}
  />
  {certificates && certificates.length >  0 && (
    <DropDownMenu
      mode="inline"
      items={[
        {
          key: "Key",
          label: "Certificates",
          icon: <SafetyCertificateOutlined />,
          children: certificates.map((certificate) => ({
            key: certificate._id,
            icon: <AppstoreOutlined />,
            onClick: () => {
              navigate(`/download/${certificate._id}`)
            },
            label: "View",
          })),
        },
      ]}
    />
  )}
</DropDownContainer>
  );
};
export default Dropdown;
