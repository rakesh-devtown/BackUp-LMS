import React from 'react'
import NewModal from './NewModal';
import EducationModal from './EducationalModal';

function Education({ educ, index, len, about }) {
    const s_date = new Date(educ?.start_date); //format the date
    const e_date = new Date(educ?.end_date);
    const options = { month: "long", year: "numeric" };
    const s_monthAndYear = s_date.toLocaleString("en-US", options);
    const e_monthAndYear = e_date.toLocaleString("en-US", options);

  return (
   <>
  {index === len - 1 ? (
    <>
      <div style={{ backgroundColor: "white", display: "flex", flexDirection: "row", marginTop: "12px" }}></div>
      <div style={{ display: "flex", flexDirection: "row", gap: "12px", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <p style={{ fontSize: "1em", fontWeight: "500" }}>{educ?.collegeName}</p>

          <p style={{ fontSize: "2em", marginBottom: "12px", fontWeight: "bold", color: "#808080" }}>.</p>
          <p style={{ fontSize: "0.75em", fontWeight: "500", color: "#808080" }}>
            {s_monthAndYear} - {e_monthAndYear}
          </p>
        </div>
        <div style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          <NewModal text="Edit" about={about} mainSub="Edit Education">
            <EducationModal type="Edit" educ={educ} />
          </NewModal>
        </div>
      </div>
      <p style={{ fontSize: "1em", color: "#808080", marginBottom: "28px" }}>
        Grade: CGPA {educ?.marks}
      </p>
    </>
  ) : (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: "12px", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <p style={{ fontSize: "1em", fontWeight: "500" }}>{educ?.collegeName}</p>

          <p style={{ fontSize: "2em", marginBottom: "12px", fontWeight: "bold", color: "#808080" }}>.</p>
          <p style={{ fontSize: "0.75em", fontWeight: "500", color: "#808080" }}>
            {s_monthAndYear} - {e_monthAndYear}
          </p>
        </div>
        <div style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          <NewModal text="Edit" about={about} mainSub="Edit Education">
            <EducationModal type="Edit" educ={educ} />
          </NewModal>
        </div>
      </div>
      <p style={{ fontSize: "1em", color: "#808080", marginBottom: "28px" }}>
        Grade: CGPA {educ?.marks}
      </p>
    </>
  )}
  <div style={{ width: "100%", height: "2px", marginTop: "8px", backgroundColor: "#E5E3E3" }}></div>
</>
  )
}

export default Education