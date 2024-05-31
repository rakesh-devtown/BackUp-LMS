import * as React from "react";
import styled from "styled-components";

export default function StartLearningCards() {
  return (
    <Div>
      <Div2>Start Learning</Div2>
      <Div3>
        <Div4>
          <Div5>Demo Course</Div5>
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/32e7c2cbb212e08a95a401d9723dc08eecbd44927092ee261a3df8d5431373b1?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
        </Div4>
        <Div6>
          <Div7>Free Bootcamps</Div7>
          <Img2
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6a8a12b1b19045cf7a978db2428aca6464cb6f3e53cfacf1b8cad22cab8972e?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
        </Div6>
        <Div8>
          <Div9>Job  Portal</Div9>
          <Img3
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4cbc2917667450951ac790639984f75537ed3cf3cc3f28a9d042c6ced01b9d6?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
        </Div8>
      </Div3>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-self: stretch;
    width: 100%;
  flex-direction: column;
  font-weight: 400;
  margin-top: 20px;
`;

const Div2 = styled.div`
  color: #2a2a2a;
  width: 100%;
  font: 22px DM Sans, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
  display: flex;
  margin-top: 15px;
  width: 100%;
  gap: 18px;
  font-size: 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div4 = styled.div`
  justify-content: space-between;
  border-radius: 6px;
  background: radial-gradient(
    304.6% 153.7% at 101.3% 119.32%,
    #93bcff 0%,
    rgba(201, 222, 255, 0.39) 29%,
    rgba(79, 146, 255, 0) 100%
  );
  box-shadow: 0px 0px 4px 0px rgba(167, 222, 255, 0.25);
  border-color: rgba(175, 205, 255, 1);
  border-style: solid;
  border-width: 0px;
  display: flex;
  gap: 20px;
  color: #1976d2;
  flex: 1;
  padding: 15px 22px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Div5 = styled.div`
  font-family: DM Sans, sans-serif;
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 32px;
  align-self: end;
  margin-top: 26px;
`;
const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 32px;
  align-self: end;
  margin-top: 26px;
`;


const Div6 = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 6px;
  background: radial-gradient(
    291.74% 156.52% at 101.3% 119.32%,
    #efad54 0%,
    #ffedd7 42.88%,
    #fffcf8 100%
  );
  box-shadow: 0px 0px 4px 0px rgba(246, 201, 142, 0.25);
  border-color: rgba(175, 205, 255, 1);
  border-style: solid;
  border-width: 0px;
  display: flex;
  gap: 20px;
  color: #c36f00;
  flex: 1;
  padding: 18px 21px 8px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Div7 = styled.div`
  font-family: DM Sans, sans-serif;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 32px;
  align-self: end;
  margin-top: 30px;
`;

const Div8 = styled.div`
  justify-content: space-between;
  border-radius: 6px;
  background: radial-gradient(
    299.09% 158.21% at 101.3% 119.32%,
    #8942d1 0%,
    rgba(188, 142, 234, 0.35) 38.86%,
    rgba(209, 167, 251, 0.11) 100%
  );
  box-shadow: 0px 0px 4px 0px rgba(191, 124, 251, 0.25);
  border-color: rgba(172, 167, 223, 1);
  border-style: solid;
  border-width: 0px;
  display: flex;
  gap: 20px;
  color: #6d2f9a;
  flex: 1;
  padding: 15px 22px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Div9 = styled.div`
  font-family: DM Sans, sans-serif;
`;


