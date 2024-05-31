import React from "react";
import { BlueText } from "../styles/LoginPage.styles";
import StartLearningCards from "../components/ui/StartLearningsCards";
import useWindowSize from "../hooks/useWindowSize";
import PersonCarrerReadyCard from "../components/ui/PersonCarrerReadyCard";
import FirstThreeStep from "../components/ui/FirstThreeStep";
import MultiStepForm from "../components/LayoutComponents/MultiStepForm";
import LayoutAlumni from "./LayoutAlumni";
import ViewMore from "../components/ui/Buttons/ViewMore";
import ExploreBootCamps from "../components/LayoutComponents/ExploreBootCamps";
import LayoutFooter from "./LayoutFooter";

function MainLayoutHero() {
  const width = useWindowSize().width;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        flexDirection: "column",

        marginTop: "10px",
        padding: width < 900 ? "10px 20px" : "20px 40px",
        backgroundColor: "white",
        borderRadius: "16px",
        border: "1px solid #D9D9D9",

        width: width > 900 ? "100%" : "100%",
      }}
    >
      <div>
        <h2
          style={{
            display: "flex",
            gap: "10px",
            fontSize: "50px",
            fontWeight: "600",
          }}
        >
          Hey <BlueText
            style={{
              fontSize: "50px",
              fontWeight: "600",

            }}
          >Sujith</BlueText>
        </h2>

      </div>
      <div>
        <p

          style={{
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "23.44px",
            textAlign: "left",
          }}
        >
          Welcome to DevTown, your first step in creating impact.
        </p>
      </div>
      <StartLearningCards />
      <PersonCarrerReadyCard />
      <FirstThreeStep />
      <MultiStepForm />
      <LayoutAlumni />
      <ViewMore />
      <ExploreBootCamps />
      <LayoutFooter />



    </div>
  );
}

export default MainLayoutHero;
