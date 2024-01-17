import React, { useState } from "react";
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


const findVideoById = (videoId, data) => {
  for (let item of data) {
   if(item.progress !==null)  {
    for (let video of item.progress.videos) {
      if (video === videoId) {
        return true;
      }
    }
   }
  }
  return false;
};

const rootSubmenuKeys = ["sub1", "sub2", "sub4", "sub5", "sub6", "sub7"];
const Dropdown = ({ data, certificates , isPresent }) => {
  const [openKeys, setOpenKeys] = useState([]);
  const setCurrentVideo = useBatchStore((state) => state.setCurrentVideo);
  const setCurrentSection = useBatchStore((state) => state.setCurrentSection);
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
    console.log(data)
    return {
      key: item._id,
      icon: <SettingOutlined />,
      children: item.videos.map((video, i) => ({
        key: video._id,
        icon: <SettingFilled />,
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
            {video.name} {isLocked ? <LockFilled /> : findVideoById(video._id , data ) ? <div style={{color:"green"}}> <CheckCircleFilled /></div> :  <UnlockFilled />}
          </div>
        ),
      })),
      label: item.name,
      onClick: () => {
        setCurrentSection(item);
      },
    };
  });

  return (
    <div style={{display: "flex"  ,flexDirection : "column" , alignItems :"center"}}>
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
          // openKeys={openKeys}
          // onOpenChange={onOpenChange}
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
                label: "View",
                onClick: () => {
                  window.open(certificate.pdfURL);
                },
              })),
            },
          ]}
        />
      )}
    </div>
  );
};
export default Dropdown;
