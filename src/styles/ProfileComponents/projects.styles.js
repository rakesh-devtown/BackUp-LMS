import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectInfo = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const ProjectText = styled.p`
  font-size: ${(props) => props.fontSize || "1em"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  color: ${(props) => props.color || "black"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
`;

const ProjectLinks = styled.div`
  padding-left: 4px;
  display: flex;
`;

const ProjectModalContainer = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
`;

const ProjectDescription = styled.p`
  font-size: 0.875em;
  color: #808080;
`;

const ProjectDivider = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 8px;
  background-color: #e5e3e3;
`;

export {
  ProjectContainer,
  ProjectInfo,
  ProjectText,
  ProjectLinks,
  ProjectModalContainer,
  ProjectDescription,
  ProjectDivider,
};
