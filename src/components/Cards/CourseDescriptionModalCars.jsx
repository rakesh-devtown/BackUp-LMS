import * as React from "react";
import styled from "styled-components";

export default function CourseDescriptionModalCard() {
  return (
    <Div>
      <Div2>Full Stack Web Development Industrial Training program</Div2>
      <Div3>
        <Div4>
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7174b6edd54b22c1d7454542ac9b09400fad0cb77fab48a040f57fa058e6c81e?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          <Div5>2Weeks</Div5>
        </Div4>
        <Div6>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce97080eb432b478f1827c8965f766eab0bc322d962b409cf1c993fa0b76b63d?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          <Div7>156 Students</Div7>
        </Div6>
        <Div8>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/43ec89b3c4f9c45b79ad57204197a85325fae0e0cfc2f0ebe75bc3a40e7ff969?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          <Div9>All levels</Div9>
        </Div8>
        <Div10>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d356207fdf9478c141a49360a31521e2511a7fa6cb866c8085b36e935e56aee8?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          <Div11>20 Lessons</Div11>
        </Div10>
        <Div12>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/181cd15c02a1ae54db78fc2ec75b5e44e02f67d5b9bccde20e8eb1cca1ea1964?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          <Div13>3 Quizzes</Div13>
        </Div12>
      </Div3>
      <Div14>
        <Div15>Go to Demo classroom</Div15> 
        
        <Div16>
          <Img6
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d044c5078b04c473845b455e02b69006a204e10918c4b48c9b77a2a681437415?apiKey=3253b8c03e174b5d8b62115417961652&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d044c5078b04c473845b455e02b69006a204e10918c4b48c9b77a2a681437415?apiKey=3253b8c03e174b5d8b62115417961652&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d044c5078b04c473845b455e02b69006a204e10918c4b48c9b77a2a681437415?apiKey=3253b8c03e174b5d8b62115417961652&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d044c5078b04c473845b455e02b69006a204e10918c4b48c9b77a2a681437415?apiKey=3253b8c03e174b5d8b62115417961652&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d044c5078b04c473845b455e02b69006a204e10918c4b48c9b77a2a681437415?apiKey=3253b8c03e174b5d8b62115417961652&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d044c5078b04c473845b455e02b69006a204e10918c4b48c9b77a2a681437415?apiKey=3253b8c03e174b5d8b62115417961652&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d044c5078b04c473845b455e02b69006a204e10918c4b48c9b77a2a681437415?apiKey=3253b8c03e174b5d8b62115417961652&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d044c5078b04c473845b455e02b69006a204e10918c4b48c9b77a2a681437415?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          Free Trail Version
        </Div16>
      </Div14>
      <Div18>
        <Div19>Course Contents</Div19>
        <Div20>0% Completed</Div20>
      </Div18>
      <Div21>
        <Div22 />
      </Div21>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  align-self: stretch;
  border-radius: 19px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.22);
  background-color: var(--Color-White-100, #fff);
  flex-direction: column;
  padding: 36px 22px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div2 = styled.div`
  color: #1d2026;
  font: 700 32px DM Sans, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
  align-content: flex-start;
  flex-wrap: wrap;
  display: flex;
  margin-top: 20px;
  padding-right: 80px;
  gap: 20px;
  font-size: 16px;
  color: #343434;
  font-weight: 400;
  line-height: 150%;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Div4 = styled.div`
  display: flex;
  gap: 8px;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 16px;
  margin: auto 0;
`;

const Div5 = styled.div`
  font-family: Jost, sans-serif;
`;

const Div6 = styled.div`
  display: flex;
  gap: 8px;
`;

const Div7 = styled.div`
  font-family: Jost, sans-serif;
`;

const Div8 = styled.div`
  display: flex;
  gap: 8px;
`;

const Div9 = styled.div`
  font-family: Jost, sans-serif;
`;

const Div10 = styled.div`
  display: flex;
  gap: 8px;
`;

const Div11 = styled.div`
  font-family: Jost, sans-serif;
`;

const Div12 = styled.div`
  display: flex;
  gap: 8px;
`;

const Div13 = styled.div`
  font-family: Jost, sans-serif;
`;

const Div14 = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: start;
  gap: 20px;
  font-size: 16px;
  color: var(--Color-White-100, #fff);
  text-transform: capitalize;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div15 = styled.div`
  font-family: Inter, sans-serif;
  justify-content: center;
  border-radius: 9px;
  background-color: #0859de;
  font-weight: 600;
  letter-spacing: -0.13px;
  line-height: 48px;
  padding: 0 24px;
  @media (max-width: 991px) {
    padding: 0 20px;
    width: 100%;
    text-align: center;
  }
`;

const Div16 = styled.div`
  disply: flex;
  flex-direction: column;
  font-family: Jost, sans-serif;
  position: relative;
  justify-content: center;
  overflow: hidden;
  aspect-ratio: 3.71;
  font-weight: 500;
  line-height: 150%;
  padding: 14px 35px;
  @media (max-width: 991px) {
    padding: 0 20px; 
    display: none;
  }
`;

const Img6 = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Div17 = styled.div`
  position: relative;
`;

const Div18 = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 14px;
  gap: 20px;
  color: #000;
  font-weight: 600;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div19 = styled.div`
  letter-spacing: -0.24px;
  font: 24px/133% Inter, sans-serif;
`;

const Div20 = styled.div`
  text-align: right;
  margin: auto 0;
  font: 16px/137.5% Inter, sans-serif;
`;

const Div21 = styled.div`
  background-color: #e9eaf0;
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div22 = styled.div`
  background-color: #1e6de8;
  width: 109px;
  height: 4px;
`;


