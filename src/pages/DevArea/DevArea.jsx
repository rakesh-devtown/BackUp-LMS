import React, { useState } from "react";
import DevSideBar from "../../components/Dev/DevSideBar";
import { Outlet } from "react-router-dom";
import { DevAreaContainer, DevAreaOutlet } from "../../styles/dev.styles";

function DevArea() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <DevAreaContainer>
      <DevSideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <DevAreaOutlet>
        <Outlet />
      </DevAreaOutlet>
    </DevAreaContainer>
  );
}

export default DevArea;
