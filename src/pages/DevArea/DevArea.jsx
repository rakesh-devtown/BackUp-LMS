import React, { useState } from "react";
import DevSideBar from "../../components/Dev/DevSideBar";
import { Outlet } from "react-router-dom";

function DevArea() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div style={{ display: "flex", backgroundColor: "rgb(30,30,30)" }}>
      <DevSideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div
        style={{
          // width: isSidebarOpen ? "83.33%" : "97%",
          height: "100vh",
          paddingTop: "4px",
          width: "98%",   
         
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default DevArea;
