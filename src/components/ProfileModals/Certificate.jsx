import NewModal from "./NewModal";
import { LinkOutlined } from "@ant-design/icons";
import CertificateModal from "./CertificateModal";
import useWindowSize from "../../hooks/useWindowSize";
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
import { WorkExperienceSeparator } from "../../styles/ProfileComponents/work.styles";

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
            <WorkExperienceSeparator>.</WorkExperienceSeparator>
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
