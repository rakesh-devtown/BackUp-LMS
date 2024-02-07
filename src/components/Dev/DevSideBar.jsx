import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { serviceGet } from "../../utils/api";
import { setHeader } from "../../utils/header";
import { Button, notification } from "antd";
import DevTree from "./DevTree";
import { DevSideBarButton, DevSideBarButtonDownload, DevSideBarContainer, DevSideBarContent, DevSideBarExplorer, DevSideBarHeader, DevSideBarPadding, DevSideBarSVG } from "../../styles/dev.styles";
import useLoadingStore from "../../store/loadingStore";

function DevSideBar({ isSidebarOpen, setIsSidebarOpen }) {
  const [treeData, setTreeData] = useState([]);
  // const dispatch = useDispatch();
  const setLoading = useLoadingStore((state) => state.setLoading);
  const [searchParams] = useSearchParams();
  const dayId = searchParams.get("dayId");
  const batchId = searchParams.get("batchId");
  const navigate = useNavigate();
  const downloadRepo = async () => {
    try {
      setLoading(true);
      // dispatch(setLoadingTrue());
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const { data } = await serviceGet(
        `student/student-api/v1/day/url?id=${dayId}&batchId=${batchId}`
      );
      const { url } = data;
      window.open(url);
    } catch (error) {

      // toast.error("Something went wrong");
    } finally {
      setLoading(false);
      // dispatch(setLoadingFalse());
    }
  };

  const fetchData = async () => {
    try {
        setLoading(true);
      //   dispatch(setLoadingTrue());
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const { data, statusCode, message } = await serviceGet(
        `student/student-api/v1/day/tree?id=${dayId}&batchId=${batchId}`
      );
      if (statusCode === 404 || !data.tree) {
        // toast.error(message);
        navigate("/programs");
      }
      setTreeData(data.tree);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
        setLoading(false);
      //   dispatch(setLoadingFalse());
    }
  };
  useEffect(() => {
    if (dayId && batchId) fetchData();
    else navigate("/programs");
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
  <DevSideBarHeader>
  <DevSideBarButton onClick={toggleSidebar}>
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
        </DevSideBarButton>
        {isSidebarOpen && (
          <>
            <DevSideBarExplorer>Explorer</DevSideBarExplorer>
            <DevSideBarPadding>
            <DevSideBarButtonDownload onClick={downloadRepo}>
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
              </DevSideBarButtonDownload>
            </DevSideBarPadding>
          </>
        )}
      </DevSideBarHeader>
      {!isSidebarOpen && (
       <DevSideBarPadding>            <DevSideBarButtonDownload onClick={downloadRepo}>
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
          </DevSideBarButtonDownload>
        </DevSideBarPadding>
      )}
     <DevSideBarContent isSidebarOpen={isSidebarOpen}>
    {/* Content */}
    <DevTree treeData={treeData} />
  </DevSideBarContent>
    </div>

  );
}

export default DevSideBar;
