import { useState } from "react";
import { Button, ConfigProvider, Space } from "antd";
import {
  EditOutlined,
  SearchOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { GoDotFill } from "react-icons/go";
import useWindowSize from "../../../hooks/useWindowSize";
import {
  CardContainer,
  CardInner,
  DotStyle,
} from "../../../styles/myResume.styles";
import ResumeModals from "../../Modals/ResumeModals";
import { PiCertificateFill } from "react-icons/pi";

const CertificationCard = ({ icon , data, title, orgName, credId, month,year, url}) => {
  const { width } = useWindowSize();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(!showModal);

  return (
    <CardContainer width={width}>
      {showModal && (
        <ResumeModals
          handleCancel={handleShowModal}
          keyItem={"certification"}
          value={{}}
        />
      )}
      <div>
        <PiCertificateFill size={40} />
      </div>
      <CardInnerVariant width={width}>
        <Space size={2} direction="vertical">
          <h5>{title}</h5>
          <Space size={6} align="start">
            <p>{orgName}</p>
            <DotStyle>
              <GoDotFill />
            </DotStyle>
            <p>{month} {year}</p>
          </Space>
          <p>Credential Id {credId}</p>
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  colorPrimary: "white",
                  primaryColor: "#61738e",
                  colorPrimaryHover: "#1E6DE8",
                },
              },
            }}
          >
          <a href={url} target="_blank" rel="noreferrer">
            <Button
              icon={<UploadOutlined />}
              type="primary"
              iconPosition="end"
              shape="round"
              size="large"
            >
              
                Show Credential
            </Button>
            </a>
          </ConfigProvider>
        </Space>
        <Button
          type="text"
          danger
          icon={<EditOutlined />}
          size="large"
          className="edit-btn"
          onClick={handleShowModal}
        >
          Edit
        </Button>
      </CardInnerVariant>
    </CardContainer>
  );
};

const CardInnerVariant = styled(CardInner)`
  .ant-space-item button {
    margin-top: 16px;
    border-color: #61738e;
  }
`;

export default CertificationCard;
