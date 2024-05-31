import * as React from "react";
import styled from "styled-components";

export default function CourseLearningContent() {
  return (
    <Div>
      <Div2>What you will learn in this course</Div2>
      <Div3>
        <Div4>
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4520e9ed9d787a9e4ccdb4fc7e4eb3a24c6c3abb821253ea4b26c9c8831c8cb8?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          <Div5>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices.
          </Div5>
        </Div4>
        <Div6>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4520e9ed9d787a9e4ccdb4fc7e4eb3a24c6c3abb821253ea4b26c9c8831c8cb8?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          <Div7>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices.
          </Div7>
        </Div6>
      </Div3>
      <Div8>
        <Div9>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4520e9ed9d787a9e4ccdb4fc7e4eb3a24c6c3abb821253ea4b26c9c8831c8cb8?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          <Div10>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices.
          </Div10>
        </Div9>
        <Div11>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4520e9ed9d787a9e4ccdb4fc7e4eb3a24c6c3abb821253ea4b26c9c8831c8cb8?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          <Div12>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices.
          </Div12>
        </Div11>
      </Div8>
      <Div13>
        <Div14>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4520e9ed9d787a9e4ccdb4fc7e4eb3a24c6c3abb821253ea4b26c9c8831c8cb8?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          <Div15>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices.
          </Div15>
        </Div14>
        <Div16>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4520e9ed9d787a9e4ccdb4fc7e4eb3a24c6c3abb821253ea4b26c9c8831c8cb8?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          <Div17>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices.
          </Div17>
        </Div16>
      </Div13>
    </Div>
  );
}

const Div = styled.div`
  align-self: stretch;
  background-color: rgba(225, 247, 227, 0.4);
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: var(--Gray-700, #4e5566);
  font-weight: 400;
  letter-spacing: -0.14px;
  line-height: 27px;
  padding: 40px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div2 = styled.div`
  color: var(--Gray-900, #1d2026);
  letter-spacing: -0.24px;
  font: 600 24px/133% Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-direction: column;
  }
`;

const Div4 = styled.div`
  display: flex;
  gap: 8px;
  flex: 1;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
  align-self: start;
`;

const Div5 = styled.div`
  font-family: Inter, sans-serif;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div6 = styled.div`
  display: flex;
  gap: 8px;
  flex: 1;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div7 = styled.div`
  font-family: Inter, sans-serif;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div8 = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-direction: column;

  }
`;

const Div9 = styled.div`
  display: flex;
  gap: 8px;
  flex: 1;
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
  gap: 8px;
  flex: 1;
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
  margin-top: 20px;
  width: 100%;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-direction: column;

  }
`;

const Div14 = styled.div`
  display: flex;
  gap: 8px;
  flex: 1;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div15 = styled.div`
  font-family: Inter, sans-serif;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div16 = styled.div`
  display: flex;
  gap: 8px;
  flex: 1;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div17 = styled.div`
  font-family: Inter, sans-serif;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;


