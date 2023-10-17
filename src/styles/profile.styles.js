import styled from 'styled-components';
import { Typography } from "antd";
import {
  FormOutlined,
  GithubOutlined,
  LinkedinOutlined,
  EditOutlined,
  PlusOutlined,
  LinkOutlined
} from "@ant-design/icons";

const { Title, Text } = Typography;

export const StyledProfileBox = styled.div`
  background-color: rgb(229, 227, 227);
  width: 80%;
  margin: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height:auto;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledTitle = styled(Title)`
  color: black;
`;

export const StyledDownloadText = styled(Text)`
  color: rgb(152, 101, 232);
  text-decoration: underline;
`;

export const StyledContentContainer = styled.div`
  background-color: white;
  width: 90%;
  margin: 16px auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  gap: 8px;

`;

export const StyledAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 16px;
`;
export const OnlyFlexM = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column; 
    justify-content:center;
    align-items:center;
  }
`;
export const OnlyFlex = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
`

export const OnlyFlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const OnlySpaceBetween = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OnlySpaceBetweenM = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: flex-start;
  }
`;

export const OnlyGap = styled.div`
  width: 100%;
  display: flex;
  gap:1rem;
  align-items: center;
`;

export const StyledContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap:1rem;
  flex-grow: 1; /* Allow content to grow and occupy available space */
  @media (max-width: 768px) {
    flex-direction: column; 
    justify-content:center;
    align-items:center;
  }
`;

export const StyledSectionSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(232, 232, 232);
  margin-top: 16px; /* Add margin to separate sections */
`;

export const StyledEditIcon = styled(FormOutlined)`
  font-size: 24px;
  color: rgb(129, 129, 129);
  cursor: pointer;
`;

export const StyledGenericText = styled(Title)`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const StyledLocation = styled(Text)`
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(129, 129, 129);
`;

export const StyledSubText = styled(Text)`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: rgb(129, 129, 129);
`;

export const StyledDot = styled(Text)`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: rgb(129, 129, 129);
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const StyledSubContent = styled(Text)`
  font-weight: 500;
`;

export const StyledInfo = styled(Text)`
  font-weight: 400;
  color:rgb(107 114 128);
`;

export const StyledHeading = styled(Text)`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledSkillsBg = styled.div`
 width: 100%;
  background-color: rgb(243, 236, 255);
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.5rem;
  @media (max-width: 768px) {
    flex-direction: column; 
    justify-content:center;
    align-items:center;
    background-color:#fff;
  }
`

export const StyledEachSkill = styled(Text)`
background-color: #fff;
  font-weight: 400;
  border: 1px transparent;
  border-radius: 0.375rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: rgb(124, 69, 213);
  padding: 0.375rem;
  text-align: center;

`