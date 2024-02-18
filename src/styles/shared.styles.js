import styled from 'styled-components';
import { Breadcrumb, Layout, Menu, Modal, theme } from 'antd';
import Search from 'antd/es/input/Search';
import { CloseOutlined } from '@ant-design/icons';
const { Header, Content, Sider } = Layout;

export const FullScreenContent = styled(Content)`
height: 100%;
overflow: auto;
`
export const AboutMeSectionDivider = styled.div`
  width: 95%;
  height: 1px;
  margin-left: 6px;
  background-color: #E8E8E8;
`;

const PartialPresenceContainer = styled.div`
  max-width: 80%;
  color: #A076E0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: auto;
  position: absolute;
`;

const Skill = styled.div`
  background-color: ${props => props.color};
  padding: 8px;
  margin: 3px;
  border-radius: 4px;
`;



const CourseSearch = styled(Search)`
  width: 600px;
  font-size: 30px;
  margin-left: ${props => props.collapsed ? '0px' : '58px'};
  transition: all 0.2s ease;
`;

export const ProgramsBackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 6px 15px;
  border: 1px solid #012353;
  border-radius: 4px;
  display: inline-flex;
  gap: 5px;
  color: black;
  font-size: 10px;
  font-weight: 600;
  line-height: 1.4;
  font-family: 'Manrope', sans-serif;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledModal = styled(Modal)`
  position: relative;
`;

const StyledCloseIcon = styled(CloseOutlined)`
  position: absolute;
  font-weight: 900;
  top: -45px;
  right: -32px;
  color: white;
`;

const HaddingColored = styled.h2`
  color: #081735;
`;

export { PartialPresenceContainer ,
  Skill ,
  CourseSearch, 
  StyledModal,
  StyledCloseIcon,
  HaddingColored,
};