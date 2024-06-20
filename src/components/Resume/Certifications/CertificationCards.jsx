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

const CertificationCard = ({ icon }) => {
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
        <img src={icon} alt="logo" />
      </div>
      <CardInnerVariant width={width}>
        <Space size={2} direction="vertical">
          <h5>Google UX Design Professional Certification</h5>
          <Space size={6} align="start">
            <p>Coursera</p>
            <DotStyle>
              <GoDotFill />
            </DotStyle>
            <p>Jan 2024</p>
          </Space>
          <p>Credential Id 4s65d4f54sdf545s4f543s54f64f</p>
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
            <Button
              icon={<UploadOutlined />}
              type="primary"
              iconPosition="end"
              shape="round"
              size="large"
            >
              Show Credential
            </Button>
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
