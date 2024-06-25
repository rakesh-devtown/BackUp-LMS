import React, { useEffect } from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import Shourya from "../../assets/images/Shaurya Sinha-B&W.png";
import Ashish from "../../assets/images/Ashish Modi-B&W.png";
const OuterDiv = styled.div`
  z-index: 60;
`;
const InnerDiv = styled.div`
  height: 600px;
  color: #fff;
  text-align: center;
  position: relative;
  z-index: 60;
`;

const ContentDiv = styled.div`
  position: absolute;
  bottom: 5%;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 100;
  padding: 0 20px;
`;

const Heading1 = styled.h1`
  color: var(--Color-White-100, #fff);
  text-align: center;
  font-family: Satoshi;
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: 0%;
`;

const Heading4 = styled.p`
color: var(--Color-White-100, #FFF);
text-align: center;
font-family: Satoshi;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;`;

const data = [
  {
    img: Shourya,
    title: "Welcome Back!",
    description: "Dive into your journey of discovery! Start exploring our vast resources and enrich your mind.",
  },
  {
    img: Ashish,
    title: "Welcome Back!",
    description:
      "Ready to broaden your horizons? Take the next step in your learning adventure and uncover new insights.",
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
    });
  }, [image]);
  return (
    <StyledContainer>
      {/* <LinearGradientContainer>
        <StyledImg src={image} alt="pic" />
        </LinearGradientContainer> */}
      <Carousel autoplay autoplaySpeed={2000}>
        {data.map((e, i) => (
          <OuterDiv key={i}>
            <InnerDiv>
              <ContentDiv>
                <NewStyledImg src={e.img} alt="pic" ind={i} />
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
  z-index: 0;
  width: 80%;
  top: 8%;
  left: 10%;
`;
const NewStyledImg = styled.img`
  position: absolute;
  z-index: -5;
  width: ${(props) => (props.ind == 0 ? "70%" : "60%")};
  bottom: -0px;
  left: ${(props) => (props.ind == 0 ? "15%" : "20%")};
`;

const StyledContainer = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  background: radial-gradient(50% 50% at 50% 50%, #374674 0%, #000 100%);
  z-index: -100;
  border-radius: 24px;
`;

const LinearGradientContainer = styled.div`
  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.03) 51%, rgb(0, 0, 0) 100%);
    bottom: 0;
    height: 100%;
    width: 100%;
    border-radius: 24px;
  }
`;
