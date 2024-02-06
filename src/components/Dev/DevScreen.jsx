import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { serviceGet } from "../../utils/api";
import { setHeader } from "../../utils/header";
import { notification } from "antd";
import { Editor } from "@monaco-editor/react";
import { getLanguageByExtension } from "../../utils/getLanguage";
import {
  DevScreenImage,
  DevScreenImageOuterContainer,
  DevScreenOuterContainer,
} from "../../styles/dev.styles";
import useLoadingStore from "../../store/loadingStore";

function DevScreen() {
  const [params] = useSearchParams();
  const name = params.get("name");
  const path = params.get("path");
  const type = params.get("type");
  const url = params.get("url");
  const extension = params.get("extension");
  const setLoading = useLoadingStore((state) => state.setLoading);
  const [content, setContent] = useState("Loading");
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch data from your API and update the treeData state
    const fetchData = async () => {
      try {
        // dispatch(setLoadingTrue());
        setLoading(true);

        setHeader("auth", `bearer ${localStorage.getItem("token")}`);
        const {
          data: { fileContent },
        } = await serviceGet(`student/student-api/v1/day/blob?url=${url}`);

        if (extension === "png" || extension === "jpeg") {
          setContent(fileContent);
        } else if (extension === "pdf") {
          let pdfWindow = window.open("");
          pdfWindow.document.write(
            "<html<head><title>" +
              "file" +
              "</title><style>body{margin: 0px;}</style></head>"
          );
          pdfWindow.document.write(
            "<body><embed width='100%' height='99%' src='data:application/pdf;base64, " +
              encodeURI(fileContent) +
              "#toolbar=0&navpanes=0&scrollbar=0'></embed></body></html>"
          );
          pdfWindow.document.close();

          setContent(`File not accessible on editor, access on new tab`);
        } else if (extension === "pptx" || extension === "docx") {
          let a = document.createElement("a");
          a.href = "data:application/octet-stream;base64," + fileContent;
          a.download = `${name}.${extension}`;
          a.click();
          setContent(
            `File not accessible on editor, the file has been downloaded on your system`
          );
        } else {
          setContent(atob(fileContent));
        }
      } catch (error) {
        notification.error({
          message: "Error",
          description: "Something went wrong",
        });
        // toast.error("Something Went Wrong");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
        // dispatch(setLoadingFalse());
      }
    };
    if (url)  { fetchData(); 
      
    } 
    else {
      // notification.error({
      //   message: "Error",
      //   description: "Something went wrong",
      // });
      // toast.error("Something Went Wrong");
      navigate("/programs");
    }
  }, [url]);
  return (
    <DevScreenOuterContainer>
      {extension === "png" || extension === "jpeg" ? (
        <DevScreenImageOuterContainer
         
        >
          <DevScreenImage
            src={`data:image/${extension};base64, ${content}`}
            alt="img"
          />
        </DevScreenImageOuterContainer>
      ) : (
        <Editor
          theme="vs-dark"
          height="97vh"
        
          language={getLanguageByExtension(extension)}
          defaultLanguage="javascript"
          options={{ readOnly: true }}
          value={content}
        />
      )}
    </DevScreenOuterContainer>
  );
}

export default DevScreen;
