import React from "react";
import NewModal from "./NewModal";
import CertificateModal from "./CertificateModal";
import { LinkOutlined } from "@ant-design/icons";
import useWindowSize from "../../hooks/useWindowSixe";
import {
  CertificateContainer,
  CertificateDescription,
  CertificateDot,
  CertificateModalOuterContainer,
  CertificateOrganization,
  CertificatePeriod,
  CertificateSeparator,
  CertificateTitle,
  LinkContainer,
  MarginContainer,
} from "../../styles/Certificates/certificates.styles";

function Certificate({ cert, index, len, about }) {
  const { width } = useWindowSize();
  const s_date = new Date(cert?.start_date);
  const e_date = new Date(cert?.end_date);
  const options = { month: "long", year: "numeric" };
  const s_monthAndYear = s_date.toLocaleString("en-US", options);
  const e_monthAndYear = e_date.toLocaleString("en-US", options);
  return (
    <>
      {index === len - 1 ? (
        <>
          <CertificateContainer>
            <CertificateTitle>{cert?.title}</CertificateTitle>
            <CertificateModalOuterContainer>
              <NewModal about={about} text="Edit" mainSub="Edit Certificate">
                <CertificateModal type="Edit" cert={cert} />
              </NewModal>
            </CertificateModalOuterContainer>
            <div
              style={{
                paddingTop: "8px",
                paddingBottom: "8px",
                float: "right",
              }}
            ></div>
          </CertificateContainer>
          <CertificateContainer>
            <CertificateOrganization>
              {cert?.organization}
            </CertificateOrganization>
            <LinkContainer>
              <a href={cert?.url} target="_blank" rel="noreferrer">
                <LinkOutlined size={"1.3em"} />
              </a>


            </LinkContainer>{" "}
              <CertificateDot>. </CertificateDot>
            {" "}
            <CertificatePeriod>
              {s_monthAndYear} - {e_monthAndYear}
            </CertificatePeriod>
          </CertificateContainer>
          <CertificateDescription>{cert?.description}</CertificateDescription>
          <CertificateSeparator></CertificateSeparator>
        </>
      ) : (
        <>
          <CertificateContainer>
            <CertificateTitle>{cert?.title}</CertificateTitle>

            <CertificateModalOuterContainer>
              <NewModal about={about} text="Edit" mainSub="Edit Certificate">
                <CertificateModal type="Edit" cert={cert} />
              </NewModal>
            </CertificateModalOuterContainer>
            {/* <div
              style={{
                paddingTop: "8px",
                paddingBottom: "8px",
                float: "right",
              }}
            ></div> */}
          </CertificateContainer>
          <CertificateContainer>
            <CertificateOrganization>
              {cert?.organization}
            </CertificateOrganization>
            <LinkContainer>
              <a href={cert?.url} target="_blank" rel="noreferrer">
                <LinkOutlined size={"1.3em"} />
              </a>
            </LinkContainer>
            {" "}
            <CertificateDot>. </CertificateDot> {""}
            <CertificatePeriod>
              {s_monthAndYear} - {e_monthAndYear}
            </CertificatePeriod>
          </CertificateContainer>
          <CertificateDescription>{cert?.description}</CertificateDescription>

          <MarginContainer />
        </>
      )}
    </>
  );
}

export default Certificate;
