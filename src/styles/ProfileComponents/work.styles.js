import styled from "styled-components";

const WorkContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`;

const WorkCompany = styled.p`
  font-size: 0.9em;
  font-weight: 600;
  margin-top: 4px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const WorkModalContainer = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
`;

const WorkRightContainer = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  float: right;
`;

const WorkRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

const WorkPositionContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const WorkPosition = styled.p`
  font-size: 0.8em;
  font-weight: 600;
`;

const WorkPeriod = styled.p`
  font-size: 0.75em;
  font-weight: 500;
  color: #808080;
`;

const WorkDescription = styled.p`
  font-size: 0.875em;
  color: #808080;
  margin-top: 8px;
`;

const WorkBottomSpace = styled.div`
  margin-top: 20px;
`;
const WorkExperienceDivider = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 8px;
  background-color: #e5e3e3;
`;
const WorkExperienceSeparator = styled.p`
  font-size: 2em;
  margin-bottom: 20px;
  font-weight: 900;
`;

export {
  WorkContainer,
  WorkCompany,
  WorkModalContainer,
  WorkRightContainer,
  WorkRowContainer,
  WorkPositionContainer,
  WorkPosition,
  WorkPeriod,
  WorkDescription,
  WorkBottomSpace,
    WorkExperienceDivider,
    WorkExperienceSeparator
};
