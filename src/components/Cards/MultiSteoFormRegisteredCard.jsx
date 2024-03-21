import * as React from "react";
import styled from "styled-components";
import useLayoutUiStore from "../../store/layoutUI";

export default function MultiStepFormRegisteredCard() {
    const currentMultiStepFormPage = useLayoutUiStore((state) => state.currentMultiStepFormPage);
    const setCurrentMultiStepFormPage = useLayoutUiStore((state) => state.setMultiStepFormPage);
  return (
    <Div>
     
      <Div5>
        <Div6>
          <Column>
            <Div7>
              <Img2
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/615ed54cda233193a4fb3e3db937163044da4288d442ae5422de8bf6c99154ca?apiKey=3253b8c03e174b5d8b62115417961652&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/615ed54cda233193a4fb3e3db937163044da4288d442ae5422de8bf6c99154ca?apiKey=3253b8c03e174b5d8b62115417961652&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/615ed54cda233193a4fb3e3db937163044da4288d442ae5422de8bf6c99154ca?apiKey=3253b8c03e174b5d8b62115417961652&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/615ed54cda233193a4fb3e3db937163044da4288d442ae5422de8bf6c99154ca?apiKey=3253b8c03e174b5d8b62115417961652&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/615ed54cda233193a4fb3e3db937163044da4288d442ae5422de8bf6c99154ca?apiKey=3253b8c03e174b5d8b62115417961652&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/615ed54cda233193a4fb3e3db937163044da4288d442ae5422de8bf6c99154ca?apiKey=3253b8c03e174b5d8b62115417961652&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/615ed54cda233193a4fb3e3db937163044da4288d442ae5422de8bf6c99154ca?apiKey=3253b8c03e174b5d8b62115417961652&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/615ed54cda233193a4fb3e3db937163044da4288d442ae5422de8bf6c99154ca?apiKey=3253b8c03e174b5d8b62115417961652&"
              />
            </Div7>
          </Column>
          <Column2>
            <Div8>
              <Div9>
                <span >
                  Basic 7 days long
                </span>
                 
                <span >
                  C++ & Data structure and Algorithms
                </span>
              </Div9>
              <Div10>
                <Div11>
                  <Img3
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/09e917d2132550118f4fda220db98a6d9b286e620d101dcbc541fe3b20e05f61?apiKey=3253b8c03e174b5d8b62115417961652&"
                  />
                  <Div12>Lecture Notes</Div12>
                </Div11>
                <Div13>
                  <Img4
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc0bbf6917461e70ebc31431b71a295650d89670a953e7f077c28199a3f62d96?apiKey=3253b8c03e174b5d8b62115417961652&"
                  />
                  <Div14>Lecture Notes</Div14>
                </Div13>
                <Div15>
                  <Img5
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ec40340c5ea02ac133a0d151309fa8dc251b8053a8fed088fe458430958d219?apiKey=3253b8c03e174b5d8b62115417961652&"
                  />
                  <Div16>Registred</Div16>
                </Div15>
              </Div10>
              <Div17>
                <Div18>Registred</Div18>
                <Div19
                    onClick={() => {
                        setCurrentMultiStepFormPage(currentMultiStepFormPage +1 );
                    }}
                >Next</Div19>
              </Div17>
            </Div8>
          </Column2>
        </Div6>
      </Div5>
    </Div>
  );
}

const Div = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Div2 = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div3 = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 64px;
  border-color: rgba(30, 169, 80, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #4ade80;
  display: flex;
  width: 35px;
  height: 35px;
  padding: 0 12px;
`;

const Img = styled.img`
  aspect-ratio: 1.22;
  object-fit: auto;
  object-position: center;
  width: 11px;
  fill: var(--Color-White-100, #fff);
`;

const Div4 = styled.div`
  color: #00772c;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font: 400 18px DM Sans, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div5 = styled.div`
  border-radius: 12px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--Color-White-100, #fff);
 
  width: 100%;
  max-width: 945px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div6 = styled.div`
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
  width: 41%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div7 = styled.div`
  justify-content: center;
  border-radius: 9px 0px 0px 9px;
  background-color: #9747ff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  @media (max-width: 991px) {
    margin-top: 30px;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 1.75;
  object-fit: auto;
  object-position: center;
  width: 100%;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 59%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div8 = styled.div`
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

const Div9 = styled.div`
  color: #313131;
  font: 24px Source Sans Pro, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div10 = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  padding-right: 80px;
  gap: 20px;
  font-size: 16px;
  color: #2a2a2a;
  font-weight: 400;
  @media (max-width: 991px) {
    
    padding-right: 20px;
  }
`;

const Div11 = styled.div`
  display: flex;
  gap: 15px;
`;

const Img3 = styled.img`
  aspect-ratio: 0.81;
  object-fit: auto;
  object-position: center;
  width: 13px;
  margin: auto 0;
`;

const Div12 = styled.div`
  font-family: DM Sans, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div13 = styled.div`
  display: flex;
  gap: 15px;
`;

const Img4 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 15px;
  margin: auto 0;
`;

const Div14 = styled.div`
  font-family: DM Sans, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div15 = styled.div`
  display: flex;
  gap: 15px;
  color: #1d925b;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img5 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 15px;
  margin: auto 0;
`;

const Div16 = styled.div`
  font-family: DM Sans, sans-serif;
`;

const Div17 = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  gap: 10px;
  font-size: 18px;
  white-space: nowrap;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    white-space: initial;

  }
`;

const Div18 = styled.div`
    display: flex;
  font-family: Source Sans Pro, sans-serif;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background-color: #d0fce0;
  color: #4ade80;
  flex-grow: 1;
  width: fit-content;
  padding: 15px 60px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 20px 20px;
  }
`;

const Div19 = styled.div`
  font-family: Source Sans Pro, sans-serif;
  justify-content: center;
  border-radius: 7px;
  background-color: #4ade80;
  color: var(--Color-White-100, #fff);
  padding: 15px 50px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 20px 20px;
  }
`;


