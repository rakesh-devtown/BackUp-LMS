import styled from "styled-components";

const CertificateContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

const CertificateTitle = styled.p`
  font-size: 0.9em;
  font-weight: 600;
  margin-top: 4px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CertificateOrganization = styled.p`
  font-size: 0.8em;
  font-weight: 500;
`;

const CertificatePeriod = styled.p`
  font-size: 0.75em;
  font-weight: 500;
  color: #808080;
`;

const CertificateDescription = styled.p`
  font-size: 0.875em;
`;

const CertificateSeparator = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 8px;
  background-color: #E5E3E3;
`;

const CertificateDot = styled.p`
font-size: 2em;
margin-bottom: 20px;
font-weight: 900;
margin-left: ${props => props.width < 550 ? '8px' : '0px'};
`;

const OrganizationContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LinkContainer = styled.div`
  padding-left: 4px;
  width: 5%;
`;
const CertificateModalOuterContainer = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
`;
const MarginContainer = styled.div`
  margin-top: 20px;
`;

export {
  CertificateContainer,
  CertificateTitle,
  CertificateOrganization,
  CertificatePeriod,
  CertificateDescription,
  CertificateSeparator,
    CertificateDot,
    OrganizationContainer,
    LinkContainer ,
    CertificateModalOuterContainer ,
    MarginContainer
};
