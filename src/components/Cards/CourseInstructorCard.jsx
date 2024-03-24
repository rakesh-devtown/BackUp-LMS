import * as React from "react";
import styled from "styled-components";

export default function CourseInstructorCard() {
  return (
    <Div>
      <Div2>Course instructor</Div2>
      <Div3>
        <Img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/651f13fa7e76b804234ab4a8b81f7b54f29ac5ce84603cfc1f867658c2382d5b?apiKey=3253b8c03e174b5d8b62115417961652&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/651f13fa7e76b804234ab4a8b81f7b54f29ac5ce84603cfc1f867658c2382d5b?apiKey=3253b8c03e174b5d8b62115417961652&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/651f13fa7e76b804234ab4a8b81f7b54f29ac5ce84603cfc1f867658c2382d5b?apiKey=3253b8c03e174b5d8b62115417961652&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/651f13fa7e76b804234ab4a8b81f7b54f29ac5ce84603cfc1f867658c2382d5b?apiKey=3253b8c03e174b5d8b62115417961652&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/651f13fa7e76b804234ab4a8b81f7b54f29ac5ce84603cfc1f867658c2382d5b?apiKey=3253b8c03e174b5d8b62115417961652&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/651f13fa7e76b804234ab4a8b81f7b54f29ac5ce84603cfc1f867658c2382d5b?apiKey=3253b8c03e174b5d8b62115417961652&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/651f13fa7e76b804234ab4a8b81f7b54f29ac5ce84603cfc1f867658c2382d5b?apiKey=3253b8c03e174b5d8b62115417961652&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/651f13fa7e76b804234ab4a8b81f7b54f29ac5ce84603cfc1f867658c2382d5b?apiKey=3253b8c03e174b5d8b62115417961652&"
        />
        <Div4>
          <Div5>Shaurya Sinha</Div5>
          <Div6>Full Stack Web Developer and Co - Founder | DevTown</Div6>
          <Div7>
            <Div8>
              <Img2
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81d648f704950ba7c743f2a887061d6517fbf48426feac69ae944538c2453811?apiKey=3253b8c03e174b5d8b62115417961652&"
              />
              <Div9>
                <span >
                  4.9
                </span>
                <span> C</span>
                <span >
                  ourse rating
                </span>
              </Div9>
            </Div8>
            <Div10>
              <Img3
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/46feab0d0132e6ff37fb16c269e1ced8d1e27c946830c5e5f37e4bcb7c7ac1bf?apiKey=3253b8c03e174b5d8b62115417961652&"
              />
              <Div11>
                236,568
                <span >
                  {" "}
                  Students
                </span>
              </Div11>
            </Div10>
            <Div12>
              <Img4
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a1425a8bfcccaed868d7d967450178b3650b30c8fa9b0a73c0fc300babe86ba?apiKey=3253b8c03e174b5d8b62115417961652&"
              />
              <Div13>
                09
                <span>
                  {" "}
                  Courses
                </span>
              </Div13>
            </Div12>
          </Div7>
          <Div14>
            One day Vako had enough with the 9-to-5 grind, or more like 9-to-9
            in his case, and quit his job, or more like got himself fired from
            his own startup. He decided to work on his dream: be his own boss,
            travel the world, only do the work he enjoyed...
          </Div14>
          <Div15>
            <Img5
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/edb975763144df06e6a5c17921e9e46c7fbe6c32081e427a43fda23360bc7bd1?apiKey=3253b8c03e174b5d8b62115417961652&"
            />
            <Div16>Connect</Div16>
          </Div15>
        </Div4>
      </Div3>
    </Div>
  );
}

const Div = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
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
  border-radius: 20px;
  border-color: rgba(233, 234, 240, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Color-White-100, #fff);
  display: flex;
  margin-top: 20px;
  gap: 20px;
  font-size: 14px;
  font-weight: 400;
  padding: 32px;
  @media (max-width: 991px) {
    flex-direction: column;
    padding: 20px 20px;
  }
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 136px;
  border-radius: 50%;
  align-self: start;
  max-width: 100%;
`;

const Div4 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div5 = styled.div`
  color: var(--Gray-900, #1d2026);
  font: 600 20px/130% Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div6 = styled.div`
  color: var(--Gray-600, #6e7485);
  font-family: Inter, sans-serif;
  line-height: 157%;
  letter-spacing: -0.14px;
  margin-top: 6px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div7 = styled.div`
  align-self: start;
  display: flex;
  margin-top: 16px;
  gap: 20px;
  color: var(--Gray-700, #4e5566);
  font-weight: 500;
  letter-spacing: -0.14px;
  line-height: 22px;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div8 = styled.div`
  justify-content: center;
  display: flex;
  gap: 6px;
  font-weight: 600;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
  align-self: start;
`;

const Div9 = styled.div`
  font-family: Inter, sans-serif;
`;

const Div10 = styled.div`
  justify-content: center;
  display: flex;
  gap: 6px;
`;

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
  align-self: start;
`;

const Div11 = styled.div`
  font-family: Inter, sans-serif;
`;

const Div12 = styled.div`
  justify-content: center;
  display: flex;
  gap: 6px;
`;

const Img4 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
  align-self: start;
`;

const Div13 = styled.div`
  font-family: Inter, sans-serif;
`;

const Div14 = styled.div`
  color: var(--Gray-600, #6e7485);
  font-family: Inter, sans-serif;
  line-height: 22px;
  letter-spacing: -0.14px;
  margin-top: 21px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div15 = styled.div`
  border-radius: 7.678px;
  border-color: rgba(0, 119, 181, 1);
  border-style: solid;
  border-width: 1px;
  align-self: start;
  display: flex;
  margin-top: 19px;
  gap: 10px;
  font-size: 12px;
  color: #0077b5;
  white-space: nowrap;
  padding: 8px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img5 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 26px;
`;

const Div16 = styled.div`
  font-family: Poppins, sans-serif;
  margin: auto 0;
`;


