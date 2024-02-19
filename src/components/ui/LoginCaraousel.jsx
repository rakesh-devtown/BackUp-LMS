import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
const OuterDiv = styled.div``;

const InnerDiv = styled.div`
  height: 935px;
  color: #fff;
  text-align: center;
  background-color: blue;
  position: relative;
`;

const ContentDiv = styled.div`
  position: absolute;
  bottom: 10%;
  left: 20%;
`;

const Heading1 = styled.h1``;

const Heading4 = styled.h4``;


const data = [
  {
    title:"Welcome to DevTown",
    description:"Dive into a World of Seamless Learning With DevTown!",
  },
  {
    title:"Welcome to DevTown",
    description:"Dive into a World of Seamless Learning With DevTown!",
  },
  {
    title:"Welcome to DevTown",
    description:"Dive into a World of Seamless Learning With DevTown!",
  }
]

const LoginCarousel = ( ) => (
  <Carousel autoplay
  
    autoplaySpeed={2000}
  >
    {
      data.map((e, i ) => (

        <OuterDiv key={i}>
          <InnerDiv>
            <ContentDiv>
              <Heading1>{e.title}</Heading1>
              <Heading4> {e.description} </Heading4>
            </ContentDiv>
          </InnerDiv>
        </OuterDiv>
      ))
    }




  </Carousel>
);
export default LoginCarousel;