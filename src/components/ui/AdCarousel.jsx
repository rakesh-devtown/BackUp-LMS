import React from "react";
import { Carousel } from "antd";
import { BlueText, StyledButton } from "../../styles/LoginPage.styles";
import { ArrowRightOutlined } from "@ant-design/icons";
import CPP from "../../assets/images/s.png";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const AdCarousel = () => (
  <Carousel autoplay>
    <div>

    <div
      style={{
    
       
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",  
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <div>
          <p>Register for 7 Day Free</p>
        </div>
        <div>
          <BlueText 
            style={{
                fontSize: "24px",
                lineHeight: "30px",
            }}
          >Intro to C++ and Date Structures and Algorithms</BlueText>
        </div>
        <div>
          <StyledButton
            style={{
                fontSize: "12px",
                padding: "8px 16px",
            }}
          >
            With Free Amazon Certifications <ArrowRightOutlined />
          </StyledButton>
        </div>
      </div>
      <div>
        <img height={149} width={149} src={CPP} alt="C++" />
      </div>
    </div>
    </div>

  </Carousel>
);
export default AdCarousel;
