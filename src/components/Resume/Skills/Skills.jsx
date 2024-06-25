import { useEffect, useState } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { StyledContainer, StyledHeader } from "../../../styles/myResume.styles";
import ResumeModals from "../../Modals/ResumeModals";
import SkillsCard from "./SkillsCard";
import useResumeStore from "../../../store/resumeStore";

const Skills = () => {
  const [showModal, setShowModal] = useState(false);
  const skills = useResumeStore((state) => state.skills);
  const handleShowModal = () => setShowModal(!showModal);

  return (
    <StyledContainer>
      {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"skills"} />}
      <StyledHeader>
        <h4>Skills</h4>
        <Button
          type="text"
          size="large"
          icon={<PlusOutlined />}
          style={{ color: "#0859DE" }}
          onClick={handleShowModal}
        />
      </StyledHeader>
      <SkillsCard skills={skills} />
    </StyledContainer>
  );
};

export default Skills;
