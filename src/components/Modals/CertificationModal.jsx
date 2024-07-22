import { useState } from "react";
import { Modal, Space, message } from "antd";
import styled from "styled-components";
import certificate1 from "../../assets/images/certificate1.jpg";
import logo from "../../assets/images/devtown-logo.svg";
import useWindowSize from "../../hooks/useWindowSize";
import { DownloadOutlined, SendOutlined } from "@ant-design/icons";
import ShareModal from "./ShareModal/ShareModal";
// import MainModalBox from "./ModalsSecurityPage";
import { SuccessMessage } from "../../styles/messagePopup.styles";
import CertificateNameChange from "./CertificateNameChange.jsx";
import useBatchStore from "../../store/batchStore.js";

const CertificateDownloadModal = ({ data }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { width } = useWindowSize();

  const certificateCanBeEdited = useBatchStore((state) => state.certificateCanBeEdited);
  const [messageApi, contextHolder] = message.useMessage();
  const [showShareModal, setShowShareModal] = useState(false);
  const [editCertificate, setEditCertificate] = useState(false);

  const handleClose = () => setShowShareModal(false);

  const shareModaltitle = "Share your certificates with friends and on social media!";

  const handleDownload = () => {
    //showing succcessful notification

    const pdfUrl = data?.pdfUrl;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdfUrl.split("/").pop(); // Extract the file name from the URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    messageApi.open({
      key: 1,
      content: <SuccessMessage>Certificate Downloaded Successfully</SuccessMessage>,
      duration: 2,
      className: "success-message",
    });
  };

  console.log("edited", certificateCanBeEdited)
  const handleEditCertificate = () => setEditCertificate(!editCertificate);

  return (
    <StyledCertificate>
      {/* succesful notification will be showed here */}
      {contextHolder}

      {/* open modal box to change name */}
      {/* {editCertificate && <MainModalBox keyNumber={1} handleCancel={handleEditCertificate} />} */}
      {editCertificate && (
        <StyledModal
          propWidth={width}
          // maskClosable={false}
          open={true}
          confirmLoading={confirmLoading}
          onCancel={handleEditCertificate}
          centered={true}
          okText={"Continue"}
          cancelButtonProps={{ visible: false }}
          width={width >= 768 ? "600px" : "450px"}
          footer={null}
        >
          <CertificateNameChange handleCancel={handleEditCertificate} />
        </StyledModal>
      )}

      {/* Social Media Modal for sharing */}
      <ShareModal handleClose={handleClose} showShareModal={showShareModal} title={shareModaltitle} data={data} />

      <FirstContainer>
        <Space direction="vertical" size={18}>
          <img src={data?.imageUrl} alt="certificate.jpg" width={width < 768 ? 326 : 400} />
          <p>
            This certificate affirms that <span>{data?.studentName}</span> has satisfactorily fulfilled the requirements
            outlined. This validation ensures its authenticity, having been duly verified and granted by Devtown.
          </p>
        </Space>
        <StyledButtons width={width}>
          {
            certificateCanBeEdited &&
            <button className="btn1" onClick={handleEditCertificate}>
              Edit Certificate
            </button>
          }
          <button className="btn2" onClick={handleDownload}>
            Download Certificate{" "}
            <i>
              <DownloadOutlined />
            </i>
          </button>
          <button className="btn3" onClick={() => setShowShareModal(true)}>
            Share{" "}
            <i>
              <SendOutlined />
            </i>
          </button>
        </StyledButtons>
      </FirstContainer>

      {/* for certificate receipient */}
      {
        <Space direction="vertical" size={26} align="center" className="space-antd">
          <h2>Certificate Recipient</h2>
          <h4>{String(data?.studentName).toUpperCase()}</h4>
          <p>Issued By</p>
          <img src={logo} alt="logo" />
        </Space>
      }
    </StyledCertificate>
  );
};

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: ${(props) => (props.propWidth >= 768 ? "40px" : "20px")};
  }
`;

const StyledCertificate = styled.section`
  display: flex;
  padding: 10px 20px;
  gap: 5px;
  color: #212529;
  font-family: "DM Sans";
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .space-antd {
    /* width: max-content; */
    /* padding: 0 13px; */

    h2 {
      color: #007bff;
      font-size: 28.738px;
      line-height: 34.62px; /* 120.471% */
    }
    h4 {
      /* color: #212529; */
      font-size: 21.638px;
      line-height: 25.965px; /* 120% */
    }

    p {
      font-size: 18.031px;
      line-height: 21.638px; /* 120% */
    }
  }
`;
const FirstContainer = styled.div`
  width: 550px;
  p {
    color: #212529;
    font-size: 18.031px;
    line-height: 27.047px;
    font-weight: 400;
    span {
      color: #007bff;
    }
  }
`;

//button css..
const StyledButtons = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: ${(props) => (props.width >= 768 ? "row" : "column")};
  margin-top: 25px;
  button {
    color: #1e6de8;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.18px;
    border-radius: 9px;
    background: #ddeaff;
    padding: 17px 23px;
    border: none;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      color: white;
      border-radius: 9px;
      background: #1e6de8;
    }
    i {
      margin-left: 12px;
    }
  }
`;

export default CertificateDownloadModal;
