import React from "react";
import { BlueText, Container, StyledButton } from "../../styles/LoginPage.styles";

function CarrersPathHero() {
  return (
    <Container>
        <div
        
        style={{
            display:"flex", 
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",

        }}
        >
            
        <p>Answer 4 simple questions</p>
        <BlueText
            style={{
            fontSize: "22px",
            marginTop: "10px",
            marginBottom: "10px",
            }}
        >
            Discover your path
        </BlueText>
        <p>
            to a Sucessful Tech Carrer!
        </p>

        <StyledButton
        style={{
            paddingLeft:"10px",
            paddingRight:"10px",
        }}
        >
            Create Free Personalized Carrer Path!
        </StyledButton>
        <p>
            Go to Dashboard 
        </p>
        </div>
    </Container>
  );
}

export default CarrersPathHero;
