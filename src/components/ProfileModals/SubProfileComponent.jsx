import React from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Projects from "./Projects";
import Certificate from "./Certificate";
import Skills from "./Skills";

function SubProfileComponent({ text, educ, proj, workex, cert, about, skill }) {
  return <>
  {(text === "Work Experience" ||
    text === "Education" ||
    text === "Projects" ||
    text === "Certificates") ? (
    <div style={{ paddingLeft: "16px", paddingRight: "24px" }}>
      {text === "Work Experience" ? (
        <>
          {workex?.experience?.map((element, index) => (
            <WorkExperience
              about={about}
              key={index}
              index={index}
              workex={element}
              len={workex?.experience?.length}
            />
          ))}
        </>
      ) : text === "Education" ? (
        <>
          {educ?.education?.map((element, index) => (
            <Education
              about={about}
              key={index}
              index={index}
              educ={element}
              len={educ?.education?.length}
            />
          ))}
        </>
      ) : text === "Projects" ? (
        <>
          {proj?.projects?.map((element, index) => (
            <Projects
              about={about}
              key={index}
              index={index}
              proj={element}
              len={proj?.projects?.length}
            />
          ))}
        </>
      ) : (
        <>
          {cert?.certificate?.map((element, index) => (
            <Certificate
              about={about}
              key={index}
              index={index}
              cert={element}
              len={cert?.certificate?.length}
            />
          ))}
        </>
      )}
    </div>
  ) : (
    <div style={{
      display :"flex", 
      flexWrap: "wrap",
      justifyContent  : "center",
      alignItems : "center",
    }}>
      {skill?.map((skills) => (
        <Skills key={skills} text={skills} total_skill={skill} />
      ))}
    </div>
  )}
</>
}

export default SubProfileComponent;
