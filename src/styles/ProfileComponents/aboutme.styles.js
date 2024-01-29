import { CloseCircleFilled } from '@ant-design/icons';
import styled from 'styled-components';

const AboutMeGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;
const AboutMeInnerContainer = styled.div`
  margin-top: 1.25rem;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 9;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #FFFFFF;
  margin-bottom: 2rem;
`;
const ProfileNameContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.width > 550 ? 'row' : 'column'};
  align-items: center;
  gap: 4px;
  padding: 8px;
`;
const AboutMeImage = styled.img`
  height: 112px;
  width: 112px;
  border-radius: 50%;
  border: 4px solid white;
`;
const AboutMeAddress = styled.p`
  font-size: 1em;
  margin-top: 1px;
  font-weight: bold;
  color: #818181;
`;

const AboutMeNameHeading = styled.h2`
  color: #323232;
  font-size: 2em;
  font-weight: bold;
  margin-right: 2px;
`;

const AboutMeOuterContainer = styled.div`
  padding: 16px;
  margin-top: 24px;
`;
const AboutMeContactContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AboutMeContactText = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
`;
const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.width > 1100 ? "row" : "column"};
  gap: 24px;
  width: 100%;
  margin-top: 16px;
`;

const AboutMeSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AboutMeText = styled.p`
  font-size: 1em;
  font-weight: bold;
  color: #928e8e;
`;

const AboutMeEmail = styled.span`
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AboutMePhone = styled.span`
  font-weight: 700;
`;

const AboutMeUploadContainer = styled.div`
  border: 1px solid #D1D5DB;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutMeUploadLabel = styled.label`
  cursor: pointer;
  border-color: #D1D5DB;
  border-width: 1px;
  color: #374151;
  padding: 8px 16px;
  font-weight: 500;
  border-radius: 19px;
`;
const AboutMeLinkContainer = styled.div`
  margin-top: 16px;
`;

const AboutMeLinkText = styled.p`
  font-size: 1.125rem;
  font-weight: bold;
  margin: 8px 0;
`;

const AboutMeLinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const AboutMeLink = styled.a`
  margin-right: 12px;
  margin-bottom: 12px;
  margin-top: 4px;
`;
const AboutModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px;
  border-radius: 16px;
  background-color: #122344;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CloseIcon = styled(CloseCircleFilled)`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  color: white;
  font-size: 24px;
`;

const AboutModalText = styled.p`
  font-size: 1.25rem;
  color: white;
  font-weight: bold;
  text-align: center;
  margin-top: ${props => props.marginTop || "0"};
`;

export { AboutMeGridContainer
, ProfileNameContainer ,
AboutMeImage ,
AboutMeInnerContainer ,
AboutMeNameHeading ,
AboutMeAddress ,
AboutMeOuterContainer,
AboutMeContactContainer,
AboutMeContactText,
AboutMeContainer,
AboutMeSubContainer,
AboutMeText,
AboutMeEmail,
AboutMePhone,
AboutMeUploadContainer,
AboutMeUploadLabel,
AboutMeLinkContainer,
AboutMeLinkText,
AboutMeLinkWrapper,
AboutMeLink,
AboutModalContainer,
CloseIcon,
AboutModalText



};