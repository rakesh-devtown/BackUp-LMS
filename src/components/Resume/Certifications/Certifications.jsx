import { useState } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { StyledContainer, StyledHeader } from "../../../styles/myResume.styles";
import CertificationCard from "./CertificationCards";
import certificate from "../../../assets/images/certificate.png";
import ResumeModals from "../../Modals/ResumeModals";
import useResumeStore from "../../../store/resumeStore";

const Certifications = () => {
  const [showModal, setShowModal] = useState(false);

  const certifications = useResumeStore((state) => state.certifications);

  const handleShowModal = () => setShowModal(!showModal);

  return (
    <StyledContainer>
      {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"certification"} />}
      <StyledHeader>
        <h4>Certifications</h4>
        <Button
          type="text"
          size="large"
          icon={<PlusOutlined />}
          style={{ color: "#0859DE" }}
          onClick={handleShowModal}
        />
      </StyledHeader>

      {certifications &&
        certifications.map((certification, index) => (
          <CertificationCard
            item={certification}
            key={index}
            title={certification.name}
            orgName={certification.issuingOrg}
            credId={certification.credentialId}
            icon={certificate}
            month={new Date(certification.issueDate).toLocaleString("default", {
              month: "short",
            })}
            year={new Date(certification.issueDate).getFullYear()}
            url={certification.credentialUrl}
          />
        ))}
    </StyledContainer>
  );
};

export default Certifications;
