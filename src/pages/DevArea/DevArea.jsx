import React, { useState } from "react";
import DevSideBar from "../../components/Dev/DevSideBar";
import { Outlet } from "react-router-dom";
import { DevAreaContainer, DevAreaOutlet } from "../../styles/dev.styles";

function DevArea() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
    <DevAreaContainer>
      <DevSideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        />

      <DevAreaOutlet isSidebarOpen={isSidebarOpen}>
        <Outlet />
      </DevAreaOutlet>
    </DevAreaContainer>
        </>
  );
}

export default DevArea;
