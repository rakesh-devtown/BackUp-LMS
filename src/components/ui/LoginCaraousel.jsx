import React, { useEffect } from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import Shourya from "../../assets/images/Shaurya Sinha-B&W.png";
import Ashish from "../../assets/images/Ashish Modi-B&W.png";
const OuterDiv = styled.div`
  z-index: 60;
`;
const InnerDiv = styled.div`
  height: 700px;
  color: #fff;
  text-align: center;
  position: relative;
  z-index: 60;
`;

const ContentDiv = styled.div`
  position: absolute;
  bottom: 10%;
  left: 11%;
  z-index: 100;
`;

const Heading1 = styled.h1``;

const Heading4 = styled.h4``;

const data = [
  {
    title: "Welcome to DevTown",
    description: "Dive into a World of Seamless Learning With DevTown!",
  },
  {
    title: "Welcome to DevTown",
    description: "Dive into a World of Seamless Learning With DevTown!",
  },
  {
    title: "Welcome to DevTown",
    description: "Dives into a World of Seamless Learning With DevTown!",
  },
];


const LoginCarousel = () => {
  const [image, setImage] = React.useState(Shourya);
  useEffect(() => {
    const mainClass = document.querySelector(".main");
    mainClass.classList.forEach((e) => {
      console.log(e);

      if (e === "sign-up-mode") {
        setImage(Ashish);
      } else {
        setImage(Shourya);
      }
    })


  }, [image])
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        background:
          "radial-gradient(circle, rgba(55,70,116,1) 50%, rgba(0,0,0,1) 100%)",
        zIndex: -100,
      }}
    >
      <img
        src={image}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
        alt=""
      />
      <Carousel autoplay autoplaySpeed={2000} style={{ height: "100%" }} >
        {data.map((e, i) => (
          <OuterDiv key={i}>
            <InnerDiv>
              <ContentDiv>
                <Heading1>{e.title}</Heading1>
                <Heading4> {e.description} </Heading4>
              </ContentDiv>
            </InnerDiv>
          </OuterDiv>
        ))}
      </Carousel>
    </div>
  );
};
export default LoginCarousel;
