import { Button } from 'antd';
import styled from 'styled-components';

const CareerPathContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  width: 100%; 
  flex-direction: row;
`;

const CareerPathText = styled.div`
  color: #232323;
  font-size: 20px;
  font-weight: 500;
  white-space: normal;
  overflow: auto;
  display: flex; 
  flex-wrap: wrap; 
`;

const CareerPathItem = styled.span`

color: blue;
white-space: normal;
  overflow: auto;
  margin-left: 2px;
    margin-right: 2px;
`;
const CarrerPathInfo = styled.div` 
    display: flex;
    align-items: start;
    justify-content: start;
    font-size: 24px;

     color: #232323;
  font-size: 20px;
  font-weight: 500;
  white-space: normal;
  overflow: auto;
  display: flex; 
  flex-wrap: wrap; 
`;
const CarrerPathBackButton = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const CarrerPathActionButton = styled(Button)`
  background: none;
  border: none;
  color: var(--Color-Brand-Brand-Blue, #0859de);
  cursor: pointer;
  font-size:20px;
`;

const LevelsOuterContainer = styled.div`
display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #0e1426;
  margin-top: 16px;
  padding: 14px; 
    max-width: 296px;
  `;
const CarrerPathContainer = styled.main`
  display: flex;
  max-width: 500px;
  flex-direction: column;
  align-items: start; 
  justify-content: start;
`;

export   {
    CareerPathContainer,
    CareerPathText,
    CareerPathItem, 
    CarrerPathInfo, 
    CarrerPathBackButton,
    CarrerPathActionButton ,
    LevelsOuterContainer, 
    CarrerPathContainer

} 
