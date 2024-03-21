
import * as React from "react";
import styled from "styled-components";
import useLayoutUiStore from "../../store/layoutUI";

export default function MultiStepformRegisterCard() {
  const setMultiStepFormPage= useLayoutUiStore((state) => state.setMultiStepFormPage);
  return (
    <Div>
      <Div2>
        <Column>
          <Div3>
            <Img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/615ed54cda233193a4fb3e3db937163044da4288d442ae5422de8bf6c99154ca?apiKey=3253b8c03e174b5d8b62115417961652&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/615ed54cda233193a4fb3e3db937163044da4288d442ae5422de8bf6c99154ca?apiKey=3253b8c03e174b5d8b62115417961652&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/615ed54cda233193a4fb3e3db937163044da4288d442ae5422de8bf6c99154ca?apiKey=3253b8c03e174b5d8b62115417961652&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/615ed54cda233193a4fb3e3db937163044da4288d442ae5422de8bf6c99154ca?apiKey=3253b8c03e174b5d8b62115417961652&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/615ed54cda233193a4fb3e3db937163044da4288d442ae5422de8bf6c99154ca?apiKey=3253b8c03e174b5d8b62115417961652&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/615ed54cda233193a4fb3e3db937163044da4288d442ae5422de8bf6c99154ca?apiKey=3253b8c03e174b5d8b62115417961652&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/615ed54cda233193a4fb3e3db937163044da4288d442ae5422de8bf6c99154ca?apiKey=3253b8c03e174b5d8b62115417961652&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/615ed54cda233193a4fb3e3db937163044da4288d442ae5422de8bf6c99154ca?apiKey=3253b8c03e174b5d8b62115417961652&"
            />
          </Div3>
        </Column>
        <Column2>
          <Div4>
            <Div5>
              <span>
                Basic 7 days long
              </span>
              
              <span>
                C++ & Data structure and Algorithms
              </span>
            </Div5>
            <Div6>
              <Div7>
                <Img2
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb3193aa0a475f0702ebdc17867d235cd1a393b468000220ba6fa489cf36e436?apiKey=3253b8c03e174b5d8b62115417961652&"
                />
                <Div8>Lecture Notes | </Div8>
              </Div7>
              <Div9>
                <Img3
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e17d4daeac2e40dde09e0ea575bf27391dea6dee85652c5d5e04e79cb172aac7?apiKey=3253b8c03e174b5d8b62115417961652&"
                />
                <Div10>Lecture Notes | </Div10>
              </Div9>
              <Div11>Not Registred</Div11>
            </Div6>
            <Div12
              onClick={() => {
                setMultiStepFormPage(2);
              }}

            >Register Now</Div12>
          </Div4>
        </Column2>
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  align-content: center;
  align-self: stretch;
  flex-wrap: wrap;
  border-radius: 12px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--Color-White-100, #fff);
  max-width: 878px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Div2 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 44%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div3 = styled.div`
  justify-content: center;
  border-radius: 9px 0px 0px 9px;
  background: radial-gradient(50% 50% at 50% 50%, #516e9b 0%, #141c28 100%);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  @media (max-width: 991px) {
    margin-top: 30px;
  }
`;

const Img = styled.img`
  aspect-ratio: 1.75;
  object-fit: auto;
  object-position: center;
  width: 100%;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 56%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div4 = styled.div`
  padding-right: 32px;
  justify-content: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  font-weight: 600;
  margin: auto 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div5 = styled.div`
  color: #313131;
  font: 24px Source Sans Pro, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div6 = styled.div`
  align-content: center;
  flex-wrap: wrap;
  display: flex;
  margin-top: 20px;
  gap: 20px;
  font-size: 16px;
  color: #2a2a2a;
  font-weight: 400;
`;

const Div7 = styled.div`
  display: flex;
  gap: 15px;
`;

const Img2 = styled.img`
  aspect-ratio: 0.81;
  object-fit: auto;
  object-position: center;
  width: 13px;
  margin: auto 0;
`;

const Div8 = styled.div`
  font-family: DM Sans, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div9 = styled.div`
  display: flex;
  gap: 15px;
`;

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 15px;
  margin: auto 0;
`;

const Div10 = styled.div`
  font-family: DM Sans, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div11 = styled.div`
  font-family: DM Sans, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div12 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background-color: #e22d4c;
  margin-top: 20px;
  color: var(--Color-White-100, #fff);
  padding: 15px 60px;
  font: 18px Source Sans Pro, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 20px 20px;
  }
`;


