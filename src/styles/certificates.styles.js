import { Link } from "react-router-dom";
import styled from "styled-components";

const CertificatesOuterContainer = styled.div`
  padding: 0 2rem;
`;
const CertificateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CertificateTitleContainer = styled.div`
  height: auto;
  background-color: white;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1.4rem;
`;

const CertificateTitle = styled.h4``;

const CertificateUpdateContainer = styled.div`
  margin-bottom: 0.5rem;
`;
const CertificateHero = styled.div`
  max-height: 12rem;
  overflow-y: auto;
  width: 100%;
`;

const CertificateHeroInner = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CertificateItem = styled.div`
  display: flex;
  width: 100%;
  background-color: #F7FAFC;
`;

const CertificateItemInner = styled.div`
  display: grid;
  border-style: solid;
  border-color: #E2E8F0;
  border-width: 0 0 1px 0;
  margin: 0 auto;
  width: 100%;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const CertificateDetails = styled.details`
  class-name: group;
`;

const CertificateSummary = styled.summary`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  list-style: none;
  width: 100%;
  padding: 0.5rem 0;
`;

const CertificateName = styled.span`
  font-size: 0.9em;
`;

const CertificateIcon = styled.span`
  class-name: transition-all group-open:rotate-180;
`;

const CertificateLinkContainer = styled.div`
  border-left: 4px solid #6B46C1;
  background-color: white;
  display: flex;
  align-items: center;
  transition: all 0.7s;
  :hover {
    background-color: #F7FAFC;
  }
`;

const CertificateLink = styled(Link)`
  width: 100%;
  font-size: 0.875rem;
  margin-left: 1rem;
`;
const CertificateViewContainer = styled.div`
  font-weight: 600;
  padding: 0.25rem 0;
`;
const CertificateUpdateModalContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export {
  CertificatesOuterContainer,
  CertificateHeader,
  CertificateTitleContainer,
  CertificateTitle,
  CertificateUpdateContainer,
    CertificateHero,
    CertificateHeroInner,
    CertificateItem,
    CertificateItemInner,
    CertificateDetails,
    CertificateSummary,
    CertificateName,
    CertificateIcon,
    CertificateLinkContainer,
        CertificateLink,
    CertificateViewContainer,
    CertificateUpdateModalContainer

};
