import React from 'react'
import NewModal from './NewModal';
import CertificateModal from './CertificateModal';
import { LinkOutlined } from '@ant-design/icons';

function Certificate({ cert, index, len, about }) {
    const s_date = new Date(cert?.start_date);
    const e_date = new Date(cert?.end_date);
    const options = { month: "long", year: "numeric" };
    const s_monthAndYear = s_date.toLocaleString("en-US", options);
    const e_monthAndYear = e_date.toLocaleString("en-US", options);
  return (
    <>
  {index === len - 1 ? (
    <>
      <div style={{ backgroundColor: "white", display: "flex", flexDirection: "row", marginTop: "12px" }}>
        <p style={{ fontSize: "1.25em", fontWeight: "500", marginTop: "4px", width: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {cert?.title}
        </p>
        <div style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          <NewModal about={about} text="Edit" mainSub="Edit Certificate">
            <CertificateModal type="Edit" cert={cert} />
          </NewModal>
        </div>
        <div style={{ paddingTop: "8px", paddingBottom: "8px", float: "right" }}></div>
      </div>
      <div style={{ backgroundColor: "white", display: "flex", flexDirection: "row", alignItems: "center" }}>
        <p style={{ fontSize: "1em", fontWeight: "500" }}>{cert?.organization}</p>
        <div style={{ paddingLeft: "4px", width: "5%" }}>
          <a href={cert?.url} target="_blank" rel="noreferrer">
            <LinkOutlined size={"1.3em"} />
          </a>
        </div>
        <p style={{ fontSize: "2em", marginBottom: "12px", fontWeight: "bold", color: "#808080", marginRight: "12px" }}>.</p>
        <p style={{ fontSize: "0.75em", fontWeight: "500", color: "#808080" }}>
          {s_monthAndYear} - {e_monthAndYear}
        </p>
      </div>
      <p style={{ fontSize: "0.875em" }}>{cert?.description}</p>
      <div style={{ width: "100%", height: "2px", marginTop: "8px", backgroundColor: "#E5E3E3" }}></div>
    </>
  ) : (
    <>
      <div style={{ backgroundColor: "white", display: "flex", flexDirection: "row", marginTop: "12px" }}>
        <p style={{ fontSize: "1.25em", fontWeight: "500", marginTop: "4px", width: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {cert?.title}
        </p>
        <div style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          <NewModal about={about} text="Edit" mainSub="Edit Certificate">
            <CertificateModal type="Edit" cert={cert} />
          </NewModal>
        </div>
        <div style={{ paddingTop: "8px", paddingBottom: "8px", float: "right" }}></div>
      </div>
      <div style={{ backgroundColor: "white", display: "flex", flexDirection: "row", alignItems: "center" }}>
        <p style={{ fontSize: "1em", fontWeight: "500" }}>{cert?.organization}</p>
        <div style={{ paddingLeft: "4px", width: "5%" }}>
          <a href={cert?.url} target="_blank">
            <LinkOutlined size={"1.3em"} />
          </a>
        </div>
        <p style={{ fontSize: "2em", marginBottom: "12px", fontWeight: "bold", color: "#808080", marginRight: "12px" }}>.</p>
        <p style={{ fontSize: "0.75em", fontWeight: "500", color: "#808080" }}>
          {s_monthAndYear} - {e_monthAndYear}
        </p>
      </div>
      <p style={{ fontSize: "0.875em" }}>{cert?.description}</p>
      <div style={{ marginTop: "20px" }}></div>
    </>
  )}
</>
  )
}

export default Certificate