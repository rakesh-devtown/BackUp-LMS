import React from "react";
import BootCampCard from "../Cards/BootCampCard";
import BootCampCardLeft from "../Cards/BootcampCardLeft";
import useWindowSize from "../../hooks/useWindowSize";

function ExploreBootCamps() {
  const { width } = useWindowSize();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        flexDirection: width < 900 ? "column" : "column",
        backgroundColor: width > 900 ? "#1F2A41" : "inherit",
        width: "100%",
        color: width > 900 ? "white" : "black",
        borderRadius: "16px",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: width < 900 ? "start" : "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "500",

          }}
        >Explore our</h1>
        <h1>Free Upcoming Bootcamp</h1>
      </div>
      {


        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: width < 900 ? "start" : "center",
            flexDirection: width < 900 ? "column" : "row",
            gap: "30px",
            width: "100%",
            padding: width < 900 ? "20px 0px" : "20px",

          }}
        >
          <BootCampCard />
          {
            width > 900 && <BootCampCardLeft />
          }

        </div>

      }
    </div>
  );
}

export default ExploreBootCamps;
