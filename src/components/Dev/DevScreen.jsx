import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { serviceGet } from "../../utils/api";
import { setHeader } from "../../utils/header";
import { notification } from "antd";
import { Editor } from "@monaco-editor/react";
import { getLanguageByExtension } from "../../utils/getLanguage";

function DevScreen() {
  const [params] = useSearchParams();
  const name = params.get("name");
  const path = params.get("path");
  const type = params.get("type");
  const url = params.get("url");
  const extension = params.get("extension");

  console.log(name, path, type, url);
  const [content, setContent] = useState("Loading");
  const navigate = useNavigate();
  
  useEffect(() => {
    // Fetch data from your API and update the treeData state
    const fetchData = async () => {
      try {
        // dispatch(setLoadingTrue());
        setHeader("auth", `bearer ${localStorage.getItem("token")}`);
        const {
          data: { fileContent },
        } = await serviceGet(`student/student-api/v1/day/blob?url=${url}`);
        console.log("fired once");

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
        // dispatch(setLoadingFalse());
      }
    };
    if (url) fetchData();
    else {
      notification.error({
        message: "Error",
        description: "Something went wrong",
      });
      // toast.error("Something Went Wrong");
      navigate("/");
    }
  }, [url]);
  return(
    <div style={{ overflow: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
    {
      extension==='png' || extension==='jpeg' ?
      <div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={`data:image/${extension};base64, ${content}`} alt="img" className='w-1/2 h-1/2' />
      </div>
      :
      <Editor theme='vs-dark'
      height="97vh"
      //change default language
       language={getLanguageByExtension(extension)}
       defaultLanguage="javascript"
       options={{readOnly: true}}
       value={content} />
      }
  </div>
  )
}

export default DevScreen;
