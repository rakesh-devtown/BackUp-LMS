import React from 'react'
import NewModal from './NewModal';
import WorkModal from './WorkModal';
import { LinkOutlined, LinkedinFilled } from '@ant-design/icons';

function WorkExperience( { workex, index, len, about } ) {
    const s_date = new Date(workex?.start_date);
    const e_date = new Date(workex?.end_date);
    const options = { month: "long", year: "numeric" };
    const s_monthAndYear = s_date.toLocaleString("en-US", options);
    const e_monthAndYear = e_date.toLocaleString("en-US", options);
  return (
<>
  {index === len - 1 ? (
    <>
      <div style={{ backgroundColor: "white", display: "flex", flexDirection: "row", marginTop: "12px" }}>
        <p style={{ fontSize: "1.25em", fontWeight: "500", marginTop: "4px", width: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {workex?.company}
        </p>
        <div style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          <NewModal
            about={about}
            text="Edit"
            mainSub="Edit Work Experience"
          >
            <WorkModal type="Edit" workex={workex} />
          </NewModal>
        </div>
        <div style={{ paddingTop: "8px", paddingBottom: "8px", float: "right" }}></div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "12px", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <p style={{ fontSize: "1em", fontWeight: "500" }}>{workex?.position}</p>
          <div>
            <a href={workex?.certificate} target="_blank">
              <LinkOutlined size={"1.3em"} />
            </a>
          </div>
        </div>
        <p style={{ fontSize: "2em", marginBottom: "12px", fontWeight: "bold", color: "#808080" }}>.</p>
        <p style={{ fontSize: "0.75em", fontWeight: "500", color: "#808080" }}>
          {s_monthAndYear} -
          {workex?.currentJob ? "Present" : <> {e_monthAndYear}</>}
        </p>
      </div>

      <p style={{ fontSize: "0.875em", color: "#808080", marginTop: "8px" }}>{workex?.description}</p>
      <div style={{ marginTop: "20px" }}></div>
    </>
  ) : (
    <>
      <div style={{ backgroundColor: "white", display: "flex", flexDirection: "row", marginTop: "12px" }}>
        <p style={{ fontSize: "1.25em", fontWeight: "500", marginTop: "4px", width: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {workex?.company}
        </p>
        <div style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          <NewModal
            about={about}
            text="Edit"
            mainSub="Edit Work Experience"
          >
            <WorkModal type="Edit" workex={workex} />
          </NewModal>
        </div>
        <div style={{ paddingTop: "8px", paddingBottom: "8px", float: "right" }}></div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "12px", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <p style={{ fontSize: "1em", fontWeight: "500" }}>{workex?.position}</p>
          <div>
            <a href={workex?.certificate} target="_blank">
              <LinkedinFilled size={"1.3em"} />
            </a>
          </div>
        </div>
        <p style={{ fontSize: "2em", marginBottom: "12px", fontWeight: "bold", color: "#808080" }}>.</p>
        <p style={{ fontSize: "0.75em", fontWeight: "500", color: "#808080" }}>
          {s_monthAndYear} -
          {workex?.currentJob ? "Present" : <> {e_monthAndYear}</>}
        </p>
      </div>

      <p style={{ fontSize: "0.875em", color: "#808080", marginTop: "8px" }}>{workex?.description}</p>
    </>
  )}
  <div style={{ width: "100%", height: "2px", marginTop: "8px", backgroundColor: "#E5E3E3" }}></div>
</>
  )
}

export default WorkExperience