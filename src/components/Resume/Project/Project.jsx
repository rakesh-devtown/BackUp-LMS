import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { StyledContainer, StyledHeader } from "../../../styles/myResume.styles";
import ResumeModals from "../../Modals/ResumeModals";
import { useState } from "react";
import useResumeStore from "../../../store/resumeStore";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const [showModal, setShowModal] = useState(false);
  const project = useResumeStore((state) => state.projects);

  const handleShowModal = () => setShowModal(!showModal);

  return (
    <StyledContainer>
      {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"project"} />}
      <StyledHeader>
        <h4>Project</h4>
        <Button
          type="text"
          size="large"
          icon={<PlusOutlined />}
          style={{ color: "#0859DE" }}
          onClick={handleShowModal}
        />
      </StyledHeader>
      {project &&
        project.map((proj, index) => (
          <ProjectCard
            key={index}
            item={proj}
            name={proj.name}
            githubLink={proj.githubLink}
            hostedLink={proj.hostedLink}
            description={proj.description}
            issueMonth={new Date(proj.issueDate).toLocaleString("default", { month: "short" })}
            issueYear={new Date(proj.issueDate).getFullYear()}
          />
        ))}
    </StyledContainer>
  );
};

export default Project;
