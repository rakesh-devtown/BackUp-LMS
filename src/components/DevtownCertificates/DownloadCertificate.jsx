import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { serviceGetWithCustomResponse } from "../../utils/api";
import { setHeader } from "../../utils/header";
import { Button, notification } from "antd";
import useLoadingStore from "../../store/loadingStore";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
function DownloadCertificate() {
  const { certId } = useParams();
  console.log(certId)
  const [pdfBlob, setPdfBlob] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  console.log(pdfUrl)
  // const setLoading = useLoadingStore((state) => state.setLoading);
  const [loading, setLoading] = useState(true);
  const getCertificates = async () => {
    try {
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      serviceGetWithCustomResponse(
        `student/student-api/v1/certificate/${certId}`,

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
      console.log(error);
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
      downloadLink.href = URL.createObjectURL(pdfBlob);
      downloadLink.download = `${certId}.pdf`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(downloadLink.href);
    } catch (error) {
      console.log(error);
      notification.error({
        message: "Error",
        description: error.message,
      });

      // toast.error("Error fetching certificates");
    }   
  };
  console.log(pdfUrl)
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    getCertificates();
  }, []);

  return loading ? (
    <div className="flex justify-center items-center h-screen animate-pulse ">
      <div className="mr-2 h-[595px] w-[841px] overflow-hidden relative bg-gray-200 shadow-[0px_0px_15px_5px_#9d9696">
        Loading...
      </div>
    </div>
  ) : pdfUrl ? (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center mt-10 mb-10">
        <Button
          onClick={() => downloadCertificates()}
          className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Download { pdfUrl}
        </Button>
      </div>
      <div className=" w-full">
        <Document file={pdfUrl} >
          <Page pageNumber={1} />
        </Document>
      </div>
      <style>
        {`.react-pdf__Page__canvas {
    margin: 0 auto;
    width: 100% !important;
    height: auto !important;}`}
      </style>
    </div>
  ) : (
    <div className="flex justify-center text-red-400 text-2xl font-medium">
      Note: Only the certificate owner has access to view and download the
      certificate.
    </div>
  );
}

export default DownloadCertificate;
