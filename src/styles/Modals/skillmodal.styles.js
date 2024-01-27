import { Button, Input } from "antd";
import styled from "styled-components";

const SkillModalParagraph = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  margin-left: 12px;
  margin-bottom: 20px;
`;

const SkillModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

const SkillModalInput = styled(Input)`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 8px 12px;
  width: 50%;
  margin-right: 12px;
  outline: none;
  box-shadow: none;
`;

const SkillModalSearchResult = styled.div`
  position: relative;
  z-index: 50;
  padding: 8px;
  width: 50%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 240px;
  overflow-y: auto;
`;

const SkillModalResultItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  background-color: transparent;
`;

const SkillModalAddButton = styled.div`
  border: 2px solid;
  background-color: white;
  border-color: #6422cd;
  gap: 8px;
  color: #6422cd;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 8px 20px;
  cursor: pointer;
`;
const SkillListContainer = styled.div`
  margin-bottom: 8px;
`;

const SkillListTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 40px;
  margin-left: 20px;
`;

const SkillListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 91.666667%;
  margin-left: 8px;
  margin-top: 4px;
`;

const SkillListItem = styled.div`
  background-color: #F3ECFE;
  display: flex;
  justify-content: center;
  padding: 8px 16px;
  margin-bottom: 20px;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: default;
`;

const SkillListText = styled.span`
  margin-right: 4px;
  color: #7030D1;
`;

const SkillListButton = styled.button`
  color: black;
  padding :0  ;
  background-color: transparent;
  border: none; 

`;

export {
  SkillModalParagraph,
  SkillModalContainer,
  SkillModalInput,
  SkillModalSearchResult,
  SkillModalResultItem,
  SkillModalAddButton,
    SkillListContainer,
    SkillListTitle,
    SkillListWrapper,
    SkillListItem,
    SkillListText,
    SkillListButton


};
