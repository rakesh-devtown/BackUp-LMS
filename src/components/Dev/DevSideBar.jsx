import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { serviceGet } from "../../utils/api";
import { setHeader } from "../../utils/header";
import { Button } from "antd";
import DevTree from "./DevTree";

function DevSideBar({ isSidebarOpen, setIsSidebarOpen }) {
  const [treeData, setTreeData] = useState([]);
  // const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const dayId = searchParams.get("dayId");
  const batchId = searchParams.get("batchId");
  const navigate = useNavigate();
  const downloadRepo = async () => {
    try {
      // dispatch(setLoadingTrue());
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const { data } = await serviceGet(
        `student/student-api/v1/day/url?id=${dayId}&batchId=${batchId}`
      );
      const { url } = data;
      window.open(url);
    } catch (error) {
      console.log(error);
      // toast.error("Something went wrong");
    } finally {
      // dispatch(setLoadingFalse());
    }
  };

  const fetchData = async () => {
    try {
      //   dispatch(setLoadingTrue());
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const { data, statusCode, message } = await serviceGet(
        `student/student-api/v1/day/tree?id=${dayId}&batchId=${batchId}`
      );
      if (statusCode === 404 || !data.tree) {
        // toast.error(message);
        navigate("/");
      }
      setTreeData(data.tree);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      //   dispatch(setLoadingFalse());
    }
  };
  useEffect(() => {
    if (dayId && batchId) fetchData();
    else navigate("/");
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  console.log(isSidebarOpen)

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <button
          style={{
            color: "white",
            cursor: "pointer",
            backgroundColor: "transparent",
          }}
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "1.25rem",
              width: "1.25rem",
              opacity: 0.75,
              backgroundColor: "",
            }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
          </svg>
          {/* SVG code */}
        </button>
        {isSidebarOpen && (
          <>
            <div style={{ color: "white", fontWeight: "bold" , margin:"3px" }}>Explorer</div>
            <div style={{ paddingLeft: "8px", paddingRight: "8px" }}>
              <Button
                onClick={downloadRepo}
                style={{
                  text: "white",
                  background: "rgb(79,70,229)",
                  border: "none",
                }}
              >
                {/* SVG code */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"
                  />
                </svg>
              </Button>
            </div>
          </>
        )}
      </div>
      {!isSidebarOpen && (
        <div style={{ paddingLeft: "8px", paddingRight: "8px" }}>
          <Button
            onClick={downloadRepo}
            style={{
              text: "white",
              background: "rgb(79,70,229)",
              border: "none",
            }}
          >
            {/* SVG code */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"
              />
            </svg>
          </Button>
        </div>
      )}
      <div style={{ display: isSidebarOpen ? "block" : "none" }}>
        {/* Content */}
        <DevTree treeData={treeData} />
      </div>
    </div>
  );
}

export default DevSideBar;
