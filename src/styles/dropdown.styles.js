import { Menu } from 'antd';
import styled from 'styled-components';

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  color: black;
  max-height: ${props => props.maxHeight}px;
  overflow-y: auto;
  width: 91.666667%;
`;
const DropDownMenu = styled(Menu)`
  width: 300px;
  height: 100%;
`;

export { DropDownContainer, DropDownMenu };