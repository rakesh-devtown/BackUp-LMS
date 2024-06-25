import { Fragment, useState } from "react";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import styled from "styled-components";
import { GoDotFill } from "react-icons/go";
import { DotStyle, StyledContainer, StyledHeader } from "../../../styles/myResume.styles";
import logo from "../../../assets/images/devtownLogoWithBg.png";
import WorkPosition from "./WorkPosition";
import ResumeModals from "../../Modals/ResumeModals";
import useResumeStore from "../../../store/resumeStore";
import { HiBuildingOffice2 } from "react-icons/hi2";

const WorkExperience = () => {
  const [showModal, setShowModal] = useState(false);
  // const experience = useResumeStore((state) => state.experience);
  const { experience, deleteExperience } = useResumeStore();
  const handleShowModal = () => setShowModal(!showModal);
  const handleDelete = (id) => {
    deleteExperience(id);
  };

  return (
    <StyledContainer>
      {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"experience"} />}
      <StyledHeader>
        <h4>Work Experience</h4>
        <Button
          type="text"
          size="large"
          icon={<PlusOutlined />}
          style={{ color: "#0859DE" }}
          onClick={handleShowModal}
        />
      </StyledHeader>
      <Space size={10} direction="vertical">
        {experience &&
          experience.map((item, index) => {
            return (
              <Fragment key={index}>
                <Company>
                  <HiBuildingOffice2 size={50} />
                  <Space size={2} direction="vertical" style={{ flexGrow: "1" }}>
                    <FlexBox>
                      <h5>{item?.companyName}</h5>
                      <i className="delete-icon" onClick={() => handleDelete(item.id)}>
                        <DeleteOutlined />
                      </i>
                    </FlexBox>
                    <Space size={6} align="start">
                      <p>{item?.employmentType}</p>
                      <DotStyle>
                        <GoDotFill />
                      </DotStyle>
                      <p>
                        <span>
                          {new Date(item?.startDate).toLocaleString("default", { month: "short" }) +
                            " " +
                            new Date(item?.startDate).getFullYear()}
                        </span>
                        <span> - </span>
                        <span>
                          {item?.endDate
                            ? new Date(item?.endDate).toLocaleString("default", { month: "short" }) +
                              " " +
                              new Date(item?.endDate).getFullYear()
                            : "Present"}
                        </span>
                      </p>
                    </Space>
                    <Space size={[6, 0]} align="start" wrap>
                      {/* <p>Bengaluru, Karnataka, India </p>
                                        <DotStyle><GoDotFill /></DotStyle> */}
                      <p>{item?.locationType}</p>
                    </Space>
                  </Space>
                </Company>
                {item?.details && item?.details?.map((ele, ind) => <WorkPosition mockData={ele} />)}
              </Fragment>
            );
          })}
      </Space>
    </StyledContainer>
  );
};

const Company = styled.div`
  padding: 16px;
  display: flex;
  gap: 13px;
  justify-content: flex-start;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .delete-icon {
    color: red;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export default WorkExperience;
