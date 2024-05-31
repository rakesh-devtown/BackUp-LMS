import styled from "styled-components";

const CertificateContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

const CertificateTitle = styled.p`
  font-size: 0.9em;
  font-weight: 600;
  margin-top: 10px;
  /* margin-bottom: ; */
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
const CertWarningContainer = styled.div`
  border: 2px dashed #EF4444;
  margin: 1rem;
  border-radius: 0.375rem;
  padding: 0.5rem;
  background-color: #FEF2F2;
  text-align: center;
  font-weight: 600;
`;

const CertFormContainer = styled.div`
  margin-bottom: 2.5rem;
  width: 100%;
  padding: 0 0.75rem;
  color: #747474;
`;

const CertFormTitle = styled.p`
  font-weight: 600;
  margin-top: 1.25rem;
  margin-left: 0.25rem;
  margin-bottom: 0.5rem;
`;

const CertFormTitleRequired = styled.span`
  color: #EF4444;
`;

const CertFormInput = styled.input`
  width: 100%;
`;

const CertFormButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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
  LinkContainer,
  CertificateModalOuterContainer,
  MarginContainer,
  CertWarningContainer,
  CertFormContainer,
  CertFormTitle,
  CertFormTitleRequired,
  CertFormInput,
  CertFormButtonContainer

};
