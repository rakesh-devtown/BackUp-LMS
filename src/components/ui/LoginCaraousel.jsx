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
    <StyledContainer
    >
      <LinearGradientContainer>
        <StyledImg
          src={image}
          alt="pic"
        />
      </LinearGradientContainer>
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
    </StyledContainer>
  );
};
export default LoginCarousel;

const StyledImg = styled.img`
          position: absolute;
          // objectFit: cover;
          z-index: 0;
          width: 80%;
          top: 20%;
          left: 10%;
`

const StyledContainer = styled.div`
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100%;
        background:
        radial-gradient(50% 50% at 50% 50%, #374674 0%, #000 100%);
        z-index: -100;
        border-radius: 24px;
        `

const LinearGradientContainer = styled.div`
&::after{
  content: '';
  position: absolute;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.03) 51%, rgb(0, 0, 0) 100%);
bottom: 0;
height: 100%;
width: 100%;
border-radius: 24px;
}
`