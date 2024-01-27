import React from "react";
import NewModal from "./NewModal";
import EducationModal from "./EducationalModal";
import {
  EducationContainer,
  EducationDivider,
  EducationInfo,
  EducationModalContainer,
  EducationRow,
  EducationText,
} from "../../styles/ProfileComponents/education.styles";
import { Divider } from "antd";

function Education({ educ, index, len, about }) {
  const s_date = new Date(educ?.start_date); //format the date
  const e_date = new Date(educ?.end_date);
  const options = { month: "long", year: "numeric" };
  const s_monthAndYear = s_date.toLocaleString("en-US", options);
  const e_monthAndYear = e_date.toLocaleString("en-US", options);

  return (
    <>
      {index === len - 1 ? (
        // Usage
        <>
          <EducationContainer></EducationContainer>
          <EducationRow>
            <EducationInfo>
              <EducationText fontSize="0.9em" fontWeight="600">
                {educ?.collegeName}
              </EducationText>
              <EducationText
                fontSize="2em"
                marginBottom="20px"
                fontWeight="900"
              >
                .
              </EducationText>
              <EducationText fontSize="0.75em" fontWeight="500" color="#808080">
                {s_monthAndYear} - {e_monthAndYear}
              </EducationText>
            </EducationInfo>
            <EducationModalContainer>
              <NewModal text="Edit" about={about} mainSub="Edit Education">
                <EducationModal type="Edit" educ={educ} />
              </NewModal>
            </EducationModalContainer>
          </EducationRow>
          <EducationText fontSize="1em" color="#808080" marginBottom="28px">
            Grade: CGPA {educ?.marks}
          </EducationText>
        </>
      ) : (
        <>
          <EducationRow>
            <EducationInfo>
              <EducationText fontSize="0.9em" fontWeight="600">
                {educ?.collegeName}
              </EducationText>
              <EducationText
                fontSize="2em"
                marginBottom="20px"
                fontWeight="900"
              >
                .
              </EducationText>
              <EducationText fontSize="0.75em" fontWeight="500" color="#808080">
                {s_monthAndYear} - {e_monthAndYear}
              </EducationText>
            </EducationInfo>
            <EducationModalContainer>
              <NewModal text="Edit" about={about} mainSub="Edit Education">
                <EducationModal type="Edit" educ={educ} />
              </NewModal>
            </EducationModalContainer>
          </EducationRow>
          <EducationText fontSize="1em" color="#808080" marginBottom="28px">
            Grade: CGPA {educ?.marks}
          </EducationText>
        </>
      )}

      <EducationDivider />
    </>
  );
}

export default Education;
