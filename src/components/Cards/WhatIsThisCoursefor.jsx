import * as React from "react";
import styled from "styled-components";

export default function WhatIsThisCourseFor() {
  return (
    <Div>
      <Div2>Who this course is for:</Div2>
      <Div3>
        <Img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/debd8f9b952b3eb97a39bb12795a16c795b89a366eabc79acd63f03b6ab471f8?apiKey=3253b8c03e174b5d8b62115417961652&"
        />
        <Div4>
          This course is for those who want to launch a Freelance Web Design
          career.
        </Div4>
      </Div3>
      <Div5>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/debd8f9b952b3eb97a39bb12795a16c795b89a366eabc79acd63f03b6ab471f8?apiKey=3253b8c03e174b5d8b62115417961652&"
        />
        <Div6>Praesent eget consequat elit. Duis a pretium purus.</Div6>
      </Div5>
      <Div7>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/debd8f9b952b3eb97a39bb12795a16c795b89a366eabc79acd63f03b6ab471f8?apiKey=3253b8c03e174b5d8b62115417961652&"
        />
        <Div8>
          Sed sagittis suscipit condimentum pellentesque vulputate feugiat
          libero nec accumsan.
        </Div8>
      </Div7>
      <Div9>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/debd8f9b952b3eb97a39bb12795a16c795b89a366eabc79acd63f03b6ab471f8?apiKey=3253b8c03e174b5d8b62115417961652&"
        />
        <Div10>
          Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam
          vel, lacinia quis ex.
        </Div10>
      </Div9>
      <Div11>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/debd8f9b952b3eb97a39bb12795a16c795b89a366eabc79acd63f03b6ab471f8?apiKey=3253b8c03e174b5d8b62115417961652&"
        />
        <Div12>
          Those who are looking to reboot their work life and try a new
          profession that is fun, rewarding and highly in-demand.
        </Div12>
      </Div11>
      <Div13>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/debd8f9b952b3eb97a39bb12795a16c795b89a366eabc79acd63f03b6ab471f8?apiKey=3253b8c03e174b5d8b62115417961652&"
        />
        <Div14>
          Nunc auctor consequat lorem, in posuere enim hendrerit sed.
        </Div14>
      </Div13>
      <Div15>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/debd8f9b952b3eb97a39bb12795a16c795b89a366eabc79acd63f03b6ab471f8?apiKey=3253b8c03e174b5d8b62115417961652&"
        />
        <Div16>
          Duis ornare enim ullamcorper congue consectetur suspendisse interdum
          tristique est sed molestie.
        </Div16>
      </Div15>
    </Div>
  );
}

const Div = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: var(--Gray-700, #4e5566);
  font-weight: 400;
  letter-spacing: -0.14px;
  line-height: 157%;

  margin-top: 20px;
`;

const Div2 = styled.div`
  color: var(--Gray-900, #1d2026);
  letter-spacing: -0.24px;
  width: 100%;
  font: 600 24px/133% Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
  display: flex;
  margin-top: 20px;
  padding-right: 20px;
  gap: 8px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
`;

const Div4 = styled.div`
  font-family: Inter, sans-serif;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div5 = styled.div`
  display: flex;
  margin-top: 12px;
  padding-right: 20px;
  gap: 8px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div6 = styled.div`
  font-family: Inter, sans-serif;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div7 = styled.div`
  display: flex;
  margin-top: 12px;
  padding-right: 20px;
  gap: 8px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div8 = styled.div`
  font-family: Inter, sans-serif;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div9 = styled.div`
  display: flex;
  margin-top: 12px;
  padding-right: 20px;
  gap: 8px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div10 = styled.div`
  font-family: Inter, sans-serif;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div11 = styled.div`
  display: flex;
  margin-top: 12px;
  padding-right: 20px;
  gap: 8px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div12 = styled.div`
  font-family: Inter, sans-serif;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div13 = styled.div`
  display: flex;
  margin-top: 12px;
  padding-right: 20px;
  gap: 8px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div14 = styled.div`
  font-family: Inter, sans-serif;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div15 = styled.div`
  display: flex;
  margin-top: 12px;
  padding-right: 20px;
  gap: 8px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div16 = styled.div`
  font-family: Inter, sans-serif;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;


