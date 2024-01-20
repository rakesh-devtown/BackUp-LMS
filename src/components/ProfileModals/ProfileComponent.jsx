import React from 'react'
import NewModal from './NewModal'
import EducationModal from './EducationalModal'
import WorkModal from './WorkModal'
import ProjectModal from './ProjectModal'
import CertificateModal from './CertificateModal'
import SkillModal from './SkillModal'
import SubProfileComponent from './SubProfileComponent'

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
  <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)" }}>
    <div style={{ width: "100%", paddingLeft: "16px", gridColumn: "1 / span 8" }}>
      <div style={{ borderRadius: "8px", backgroundColor: "white" }}>
        <div style={{ paddingLeft: "20px", paddingTop: "20px", backgroundColor: "white", display: "flex", flexDirection: "row" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "bold", width: "100%" }}>{text}</h2>
          <div style={{ float: "right" ,fontSize: "1.125em",   }}>
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
          </div>
        </div>
        <SubProfileComponent
          about={about}
          cert={certificate}
          educ={education}
          proj={project}
          workex={experience}
          text={text}
          skill={skill?.skill}
        />
      </div>
    </div>
  </div>
</>
  )
}

export default ProfileComponent