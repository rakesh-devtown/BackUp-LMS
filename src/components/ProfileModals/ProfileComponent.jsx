import React from 'react'
import NewModal from './NewModal'
import EducationModal from './EducationalModal'
import WorkModal from './WorkModal'
import ProjectModal from './ProjectModal'
import CertificateModal from './CertificateModal'
import SkillModal from './SkillModal'
import SubProfileComponent from './SubProfileComponent'
import { ProfileCompoAction, ProfileCompoCard, ProfileCompoContainer, ProfileCompoHeader, ProfileCompoInnerContainer, ProfileCompoTitle } from '../../styles/profile.styles'

function ProfileComponent(

    {
        text,
        education,
        project,
        experience,
        certificate,
        about,
        skill,
      }
) {
  return (
    <>
  <ProfileCompoContainer>
  <ProfileCompoInnerContainer>
  <ProfileCompoCard>
  <ProfileCompoHeader>
  <ProfileCompoTitle>{text}</ProfileCompoTitle>
  <ProfileCompoAction>
            {text === "Education" ? (
              <NewModal about={about} text="Add" mainSub="Add Education">
                <EducationModal type="Add" />
              </NewModal>
            ) : text === "Work Experience" ? (
              <NewModal
                about={about}
                text="Add"
                mainSub="Add Work Experience"
              >
                <WorkModal type="Add" />
              </NewModal>
            ) : text === "Projects" ? (
              <NewModal about={about} text="Add" mainSub="Add Projects">
                <ProjectModal type="Add" />
              </NewModal>
            ) : text === "Certificates" ? (
              <NewModal about={about} text="Add" mainSub="Add Certificates">
                <CertificateModal type="Add" />
              </NewModal>
            ) : (
              <NewModal about={about} text="Add" mainSub="Add Skills">
                <SkillModal skill={skill?.skill} type="Add" />
              </NewModal>
            )}
          </ProfileCompoAction>
        </ProfileCompoHeader>
        <SubProfileComponent
          about={about}
          cert={certificate}
          educ={education}
          proj={project}
          workex={experience}
          text={text}
          skill={skill?.skill}
        />
      </ProfileCompoCard>
    </ProfileCompoInnerContainer>
  </ProfileCompoContainer>
</>
  )
}

export default ProfileComponent