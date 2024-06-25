import { useState } from "react";
import { Button, notification } from "antd";
import { Title, InnerContainer } from "../../../styles/myResume.styles";
import Skill from "./Skill";
import useResumeStore from "../../../store/resumeStore";
import { useEffect } from "react";

const AddSkills = ({ handleCancel, value }) => {
  // const [userSkills, setUserSkills] = useState([]);
  const { updateSkills } = useResumeStore();
  const skills = useResumeStore((state) => state.skills);

  const handleSubmit = async (e) => {
    if (skills.length === 0) return notification.error({ message: "Please add some skills" });
    handleCancel();
  };

  // useEffect(() => {
  // if (skills.length > 0 && value) {
  // setUserSkills(skills.map((ele) => ele));
  // }
  // }, [value]);

  return (
    <>
      <Title>{!value ? "Add" : null} Skills</Title>
      <InnerContainer>
        <Skill skills={skills} />
      </InnerContainer>
      <Button type="primary" size="large" onClick={handleSubmit}>
        Save
      </Button>
    </>
  );
};

export default AddSkills;
