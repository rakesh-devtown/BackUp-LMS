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
        icon: <SettingFilled onClick={() => {
          if (!isLocked) {
            setCurrentVideo(video);
          }
        }}
        style={{
          color: isLocked ? "gray" : "black",
          display: "flex",
          justifyContent: "space-between",
        }} />,
        label: (
          <div
            onClick={() => {
              if (!isLocked) {
                setCurrentVideo(video);
              }
            }}
            style={{
              color: isLocked ? "gray" : "black",
              display: "flex",
              justifyContent: "space-between",

            }}
          >
            <div style={{width:"93%" , whiteSpace:"nowrap" ,overflow:"hidden" ,textOverflow:"ellipsis"}}>

            {video.name}
            </div>
            <div style={{width:"7%"}}>
             {isLocked ? <LockFilled /> : findVideoById(video._id , data ) ? <div style={{color:"green"}}> <CheckCircleFilled /></div> :  <UnlockFilled />}

            </div>
          </div>
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
    <div style={{display: "flex"  ,flexDirection : "column" , alignItems :"center" ,paddingTop: '1rem', color: 'black', maxHeight: '400px', overflowY: 'auto', width: '91.666667%' }}>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          width: 300,
          height: "100%",
        }}
        items={itemss}
      />
      {certificates && certificates.length >  0 && (
        <Menu
        mode="inline"
          style={{
            width: 300,
            height: "100%",
          }}
          items={[
            {
              key: "jkfgdbfd",
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
    </div>
  );
};
export default Dropdown;
