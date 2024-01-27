import styled from "styled-components";

const EducationContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`;

const EducationRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
`;

const EducationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const EducationText = styled.p`
  font-size: ${(props) => props.fontSize || "1em"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  color: ${(props) => props.color || "black"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
`;

const EducationModalContainer = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
`;

const EducationDivider = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 8px;
  background-color: #e5e3e3;
`;

export {
  EducationContainer,
  EducationRow,
  EducationInfo,
  EducationText,
  EducationModalContainer,
    EducationDivider,
};
