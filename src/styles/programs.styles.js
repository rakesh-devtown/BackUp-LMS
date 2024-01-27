import styled from 'styled-components';
import { Tabs as AntTabs, Col, Row } from 'antd'; // replace with your actual import path
import { Title } from './SessionLimit.styles';

const StyledTabs = styled(AntTabs)`
  padding: 10px 0px;
  display: flex; // 'flow' is not a valid value for display, assuming you meant 'flex'
  flex-direction: column;
  gap: 20px;
`;

const StyledRow = styled(Row)`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
`;


const StyledCol = styled(Col)`
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: ${props => props.width < 700 ? 'min(95%, 420px)' : props.width < 1024 ? '45%' : props.width < 1440 ? '33%' :  props.width < 1800 ? "25%" :"20%" };
`;
const StyledProgramsDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 10px;
`;
const ProgramsTitle = styled(Title)`
  padding: 10px 0px;
`;


export { StyledTabs , StyledRow, StyledCol, StyledProgramsDiv
        , ProgramsTitle
};