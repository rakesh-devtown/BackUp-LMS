import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { serviceGetWithCustomResponse } from "../../utils/api";
import { setHeader } from "../../utils/header";
import { Button, notification } from "antd";
import useLoadingStore from "../../store/loadingStore";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import axios from "axios";
import { ButtonContainerCertificate, Container, DocumentContainer, LoadingBox, LoadingContainer, NoteContainer, StyledButtonDownLoad } from "../../styles/Certificates/downloadCertificates.styles";
import { ButtonContainer } from "../../styles/SessionLimit.styles";
function DownloadCertificate() {
  const { certId } = useParams();
  const [pdfBlob, setPdfBlob] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  // const setLoading = useLoadingStore((state) => state.setLoading);
  const [loading, setLoading] = useState(true);
  const getCertificates = async () => {
    try {
      
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      serviceGetWithCustomResponse(
        `student/student-api/v1/certificate/${certId}`,
        axios.defaults.headers.common,

        {
          responseType: "arraybuffer",
        }
      ).then((data) => {
        const pdfBlob = new Blob([data], { type: "application/pdf" });
        setPdfBlob(pdfBlob);
        const pdfUrl = window.URL.createObjectURL(pdfBlob);
        setPdfUrl(pdfUrl);
        setLoading(false);
      });
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.message,
      });

      // toast.error("Error fetching certificates");
      setLoading(false);
    }
  };

  const downloadCertificates = async () => {
    try {
      const downloadLink = document.createElement("a");
      downloadLink.href = window.URL.createObjectURL(pdfBlob);
      downloadLink.download = `${certId}.pdf`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(downloadLink.href);
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.message,
      });

      // toast.error("Error fetching certificates");
    }   
  };

  
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    getCertificates();
  }, []);

  return loading ? (
    <LoadingContainer>
      <LoadingBox>Loading...</LoadingBox>
    </LoadingContainer>
  ) : pdfUrl ? (
  <Container>
      <ButtonContainerCertificate>
      <StyledButtonDownLoad onClick={downloadCertificates}>Download</StyledButtonDownLoad>
    </ButtonContainerCertificate>
    <DocumentContainer>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </DocumentContainer>
      <style>
        {`.react-pdf__Page__canvas {
    margin: 0 auto;
    width: 100% !important;
    height: auto !important;}`}
      </style>
    </Container>
  ) : (
    <NoteContainer>
  Note: Only the certificate owner has access to view and download the certificate.
</NoteContainer>
  );
}

export default DownloadCertificate;
