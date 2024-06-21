import { Modal } from "antd";
import React from "react";
import AddEducation from "./AddEducation";
import AddExperience from "./AddExperience";
import useWindowSize from "../../../hooks/useWindowSize";
import AddSkills from "./AddSkills";
import AddSocialMedia from "./AddSocialMedia";
import AddProject from "./AddProject";
import AddCertification from "./AddCertification";
import EditPersonalDetails from "./EditPersonalDetails";

const ResumeModals = ({ keyItem, handleCancel, value }) => {
  const { width } = useWindowSize();
  return (
    <>
      <Modal
        // styles={myModalStyles}
        // propWidth={width}
        // maskClosable={false}
        open={true}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        centered={true}
        footer={null}
        width={width >= 1200 ? "1016px" : width >= 768 ? "600px" : "450px"}
      >
        {keyItem === "education" && <AddEducation handleCancel={handleCancel} value={value}/>}
        {keyItem === "skills" && <AddSkills handleCancel={handleCancel} value={value} />}
        {keyItem === "socialMedia" && <AddSocialMedia handleCancel={handleCancel}/>}
        {keyItem === "experience" && <AddExperience value={value} handleCancel={handleCancel}/>}
        {keyItem === "project" && <AddProject handleCancel={handleCancel}/>}
        {keyItem === "certification" && <AddCertification handleCancel={handleCancel}/>}
        {keyItem === "personalDetails" && <EditPersonalDetails handleCancel={handleCancel}/>}
      </Modal>
    </>
  );
};

export default ResumeModals;
