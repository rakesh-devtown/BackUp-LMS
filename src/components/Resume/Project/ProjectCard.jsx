import { useState } from "react";
import { Button, ConfigProvider, Space } from "antd";
import { EditOutlined, SearchOutlined, UploadOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { GoDotFill } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import useWindowSize from "../../../hooks/useWindowSize";
import { CardContainer, CardInner, DotStyle } from "../../../styles/myResume.styles";
import ResumeModals from "../../Modals/ResumeModals";

const ProjectCard = ({ item, name, githubLink, hostedLink, description, issueMonth, issueYear }) => {
  const { width } = useWindowSize();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(!showModal);

  return (
    <CardContainer width={width}>
      {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"project"} value={item} />}
      <div>
        <ProjectIcon>
          <GrProjects />
        </ProjectIcon>
        {/* <img src={icon} alt="logo" /> */}
      </div>
      <CardInnerVariant width={width}>
        <Space size={2} direction="vertical">
          <h5>{name}</h5>

          <p className="desscription">{description}</p>
          <Space size={6} align="start">
            {/* <p className="bold">Skills : </p> */}
            {/* <p>Coursera</p> */}
            {/* <DotStyle>
              <GoDotFill />
            </DotStyle> */}
            <p>
              {issueMonth} {issueYear}
            </p>
          </Space>

          <a target="_blank" href={githubLink}>
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
              <Button icon={<UploadOutlined />} type="primary" iconPosition="end" shape="round" size="large">
                Show Project
              </Button>
            </ConfigProvider>
          </a>
        </Space>
        <Button
          type="text"
          danger
          icon={<EditOutlined />}
          size="large"
          className="edit-btn"
          onClick={handleShowModal}
        />
      </CardInnerVariant>
    </CardContainer>
  );
};

const CardInnerVariant = styled(CardInner)`
  .ant-space-item button {
    margin-top: 16px;
    border-color: #61738e;
  }
  .bold {
    font-weight: bold;
  }
  .description {
    margin-top: 3px;
  }
`;

const ProjectIcon = styled.i`
  color: #384d6d;
  svg {
    width: 37px;
    height: auto;
  }
`;

export default ProjectCard;
