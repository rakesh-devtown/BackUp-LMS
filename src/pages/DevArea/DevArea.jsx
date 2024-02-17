import React, { useState } from "react";
import DevSideBar from "../../components/Dev/DevSideBar";
import { Outlet } from "react-router-dom";
import { DevAreaContainer, DevAreaOutlet } from "../../styles/dev.styles";
import useWindowSize from "../../hooks/useWindowSixe";

function DevArea() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {width} = useWindowSize();
  
  return (
    <>
    <DevAreaContainer>
      <DevSideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        />

      <DevAreaOutlet width={width} isSidebarOpen={isSidebarOpen}>
        <Outlet />
      </DevAreaOutlet>
    </DevAreaContainer>
        </>
  );
}

export default DevArea;
