import { GithubFilled, LinkOutlined } from '@ant-design/icons';
import React from 'react'
import NewModal from './NewModal';
import ProjectModal from './ProjectModal';
import { ProjectContainer, ProjectDescription, ProjectDivider, ProjectInfo, ProjectLinks, ProjectModalContainer, ProjectText } from '../../styles/ProfileComponents/projects.styles';

function Projects ( { proj, index, len, about }  )   {
    const s_date = new Date(proj?.start_date);
    const e_date = new Date(proj?.end_date);
    const options = { month: "long", year: "numeric" };
    const s_monthAndYear = s_date.toLocaleString("en-US", options);
    const e_monthAndYear = e_date.toLocaleString("en-US", options);
  return (
    <>
  {index === len - 1 ? (
    <>
      <ProjectContainer>
  <ProjectInfo>
    <ProjectText fontSize="0.9em" fontWeight="600">{proj?.title}</ProjectText>
    <ProjectLinks>
      <a href={proj?.deployedLink} target="_blank">
        <LinkOutlined size={"1.3em"} />
      </a>
      <a href={proj?.githubLink} target="_blank">
        <GithubFilled size={"1.3em"} />
      </a>
    </ProjectLinks>
    <ProjectText fontSize="2em" marginBottom="20px" fontWeight="900">.</ProjectText>
    <ProjectText fontSize="0.75em" fontWeight="500" color="#808080">
      {s_monthAndYear} - {e_monthAndYear}
    </ProjectText>
  </ProjectInfo>
  <ProjectModalContainer>
    <NewModal about={about} text="Edit" mainSub="Edit Projects">
      <ProjectModal type="Edit" proj={proj} />
    </NewModal>
  </ProjectModalContainer>
</ProjectContainer>
<ProjectDescription>{proj?.description}</ProjectDescription>
<ProjectDivider />
    </>
  ) : (
    <>
      <>
      <ProjectContainer>
  <ProjectInfo>
    <ProjectText fontSize="0.9em" fontWeight="600">{proj?.title}</ProjectText>
    <ProjectLinks>
      <a href={proj?.deployedLink} target="_blank">
        <LinkOutlined size={"1.3em"} />
      </a>
      <a href={proj?.githubLink} target="_blank">
        <GithubFilled size={"1.3em"} />
      </a>
    </ProjectLinks>
    <ProjectText fontSize="2em" marginBottom="20px" fontWeight="900">.</ProjectText>
    <ProjectText fontSize="0.75em" fontWeight="500" color="#808080">
      {s_monthAndYear} - {e_monthAndYear}
    </ProjectText>
  </ProjectInfo>
  <ProjectModalContainer>
    <NewModal about={about} text="Edit" mainSub="Edit Projects">
      <ProjectModal type="Edit" proj={proj} />
    </NewModal>
  </ProjectModalContainer>
</ProjectContainer>
<ProjectDescription>{proj?.description}</ProjectDescription>
<ProjectDivider />
    </>
    </>
  )}
</>
  )
}

export default Projects