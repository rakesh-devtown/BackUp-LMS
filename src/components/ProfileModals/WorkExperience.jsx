import React from "react";
import NewModal from "./NewModal";
import WorkModal from "./WorkModal";
import { LinkOutlined, LinkedinFilled } from "@ant-design/icons";
import {
  WorkBottomSpace,
  WorkCompany,
  WorkContainer,
  WorkDescription,
  WorkExperienceDivider,
  WorkExperienceSeparator,
  WorkModalContainer,
  WorkPeriod,
  WorkPosition,
  WorkPositionContainer,
  WorkRightContainer,
  WorkRowContainer,
} from "../../styles/ProfileComponents/work.styles";

function WorkExperience({ workex, index, len, about }) {
  const s_date = new Date(workex?.start_date);
  const e_date = new Date(workex?.end_date);
  const options = { month: "long", year: "numeric" };
  const s_monthAndYear = s_date.toLocaleString("en-US", options);
  const e_monthAndYear = e_date.toLocaleString("en-US", options);
  return (
    <>
      {index === len - 1 ? (
        <>
          <WorkContainer>
            <WorkCompany>{workex?.company}</WorkCompany>
            <WorkModalContainer>
              <NewModal
                about={about}
                text="Edit"
                mainSub="Edit Work Experience"
              >
                <WorkModal type="Edit" workex={workex} />
              </NewModal>
            </WorkModalContainer>
            <WorkRightContainer />
          </WorkContainer>
          <WorkRowContainer>
            <WorkPositionContainer>
              <WorkPosition>{workex?.position}</WorkPosition>
              <div>
                <a href={workex?.certificate} target="_blank">
                  <LinkOutlined size={"1.3em"} />
                </a>
              </div>
            </WorkPositionContainer>

            <WorkExperienceSeparator>.</WorkExperienceSeparator>
            <WorkPeriod>
              {s_monthAndYear} -
              {workex?.currentJob ? "Present" : <> {e_monthAndYear}</>}
            </WorkPeriod>
          </WorkRowContainer>
          <WorkDescription>{workex?.description}</WorkDescription>
          <WorkBottomSpace />
        </>
      ) : (
        <>
          <WorkContainer>
            <WorkCompany>{workex?.company}</WorkCompany>
            <WorkModalContainer>
              <NewModal
                about={about}
                text="Edit"
                mainSub="Edit Work Experience"
              >
                <WorkModal type="Edit" workex={workex} />
              </NewModal>
            </WorkModalContainer>
            <WorkRightContainer />
          </WorkContainer>
          <WorkRowContainer>
            <WorkPositionContainer>
              <WorkPosition>{workex?.position}</WorkPosition>
              <div>
                <a href={workex?.certificate} target="_blank">
                  <LinkOutlined size={"1.3em"} />
                </a>
              </div>
            </WorkPositionContainer>

            <WorkExperienceSeparator>.</WorkExperienceSeparator>
            <WorkPeriod>
              {s_monthAndYear} -
              {workex?.currentJob ? "Present" : <> {e_monthAndYear}</>}
            </WorkPeriod>
          </WorkRowContainer>
          <WorkDescription>{workex?.description}</WorkDescription>
        </>
      )}
      <WorkExperienceDivider />
    </>
  );
}

export default WorkExperience;
