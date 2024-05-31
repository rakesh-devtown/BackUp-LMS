import React from "react";
import useWindowSize from "../hooks/useWindowSize";

function PageContentLayout({ children }) {
  const { width } = useWindowSize();

  return (
    <div
      style={{
        // marginTop: width < 900 ? "20px" : "120px",
        width: "100%",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          padding: "20px",
          borderRadius: width < 900 ? "10px" : "20px",
          position: "relative",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default PageContentLayout;
