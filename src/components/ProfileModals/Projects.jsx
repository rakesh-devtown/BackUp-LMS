import { GithubFilled, LinkOutlined } from '@ant-design/icons';
import React from 'react'
import NewModal from './NewModal';
import ProjectModal from './ProjectModal';

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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ backgroundColor: "white", display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
          <p style={{ fontSize: "0.9em", fontWeight: "600" }}>{proj?.title}</p>
          <div style={{ paddingLeft: "4px", display: "flex" }}>
            <a href={proj?.deployedLink} target="_blank">
              <LinkOutlined size={"1.3em"} />
            </a>
            <a href={proj?.githubLink} target="_blank">
              <GithubFilled size={"1.3em"} />
            </a>
          </div>
          <p style={{  fontSize: "2em",
                marginBottom: "20px",
                fontWeight: "900",}}>.</p>

          <p style={{ fontSize: "0.75em", fontWeight: "500", color: "#808080" }}>
            {s_monthAndYear} - {e_monthAndYear}
          </p>
        </div>

        <div style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          <NewModal about={about} text="Edit" mainSub="Edit Projects">
            <ProjectModal type="Edit" proj={proj} />
          </NewModal>
        </div>
      </div>
      <p style={{ fontSize: "0.875em", color: "#808080" }}>{proj?.description}</p>
      <div style={{ width: "100%", height: "2px", marginTop: "8px", backgroundColor: "#E5E3E3" }}></div>
    </>
  ) : (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ backgroundColor: "white", display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
          <p style={{ fontSize: "0.9em", fontWeight: "600" }}>{proj?.title}</p>
          <div style={{ paddingLeft: "4px", display: "flex" }}>
            <a href={proj?.deployedLink} target="_blank">
              <LinkOutlined size={"1.3em"} />
            </a>
            <a href={proj?.githubLink} target="_blank">
              <GithubFilled size={"1.3em"} />
            </a>
          </div>
          <p style={{  fontSize: "2em",
                marginBottom: "20px",
                fontWeight: "900", }}>.</p>

          <p style={{ fontSize: "0.75em", fontWeight: "500", color: "#808080" }}>
            {s_monthAndYear} - {e_monthAndYear}
          </p>
        </div>

        <div style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          <NewModal about={about} text="Edit" mainSub="Edit Projects">
            <ProjectModal type="Edit" proj={proj} />
          </NewModal>
        </div>
      </div>
      <p style={{ fontSize: "0.875em", color: "#808080" }}>{proj?.description}</p>
      <div style={{ width: "100%", height: "2px", marginTop: "8px", backgroundColor: "#E5E3E3" }}></div>
    </>
  )}
</>
  )
}

export default Projects