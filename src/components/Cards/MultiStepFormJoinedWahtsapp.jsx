import * as React from "react";
import styled from "styled-components";
import useLayoutUiStore from "../../store/layoutUI";

export default function MultiStepFormJoinedWhatsapp() {
  const currentMultiStepFormPage = useLayoutUiStore((state) => state.currentMultiStepFormPage);

  const setCurrentMultiStepFormPage = useLayoutUiStore((state) => state.setMultiStepFormPage); return (
    <Div>
      <Div2>
        <Img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/470fd520f15111e53005c447c828c52e77fd55f81cb89b647c9ff557a138d91e?apiKey=3253b8c03e174b5d8b62115417961652&"
        />
        <Div3>
          Join Our WhatsApp Groups for Exclusive Community Resources and
          Support!
        </Div3>
      </Div2>
      <Div4>
        <Div5>
          <Img2
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1e6dc16daf3f6ea368fee85ca75de2092035e356b997472300b88234f828977?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          <Div6>Bootcamp Updates</Div6>
        </Div5>
        <Div7>
          <Img3
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1e6dc16daf3f6ea368fee85ca75de2092035e356b997472300b88234f828977?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          <Div8>Daily Class Link</Div8>
        </Div7>
        <Div9>
          <Img4
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1e6dc16daf3f6ea368fee85ca75de2092035e356b997472300b88234f828977?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          <Div10>Notes</Div10>
        </Div9>
      </Div4>
      <Div11>
        <Div12>
          <Img5
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1e6dc16daf3f6ea368fee85ca75de2092035e356b997472300b88234f828977?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          <Div13>Community Support</Div13>
        </Div12>
        <Div14>
          <Img6
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1e6dc16daf3f6ea368fee85ca75de2092035e356b997472300b88234f828977?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          <Div15>Exclusive Updates</Div15>
        </Div14>
      </Div11>
      <Div16>
        <Div17

        >Joined Our WhatsApp Groups!</Div17>
        <Div18

          onClick={() => {
            setCurrentMultiStepFormPage(currentMultiStepFormPage + 1);

          }}
        >Next</Div18>
      </Div16>
    </Div>
  );
}

const Div = styled.div`
  justify-content: center;
  align-items: start;
  align-self: stretch;
  border-radius: 8px;
  border-color: rgba(30, 109, 232, 1);
  border-style: solid;
  border-width: 1px;
  display: flex;
  max-width: 957px;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  padding: 15px 25px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div2 = styled.div`
  align-self: stretch;
  display: flex;
  gap: 12px;
  color: #27b53d;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Img = styled.img`
  aspect-ratio: 0.98;
  object-fit: auto;
  object-position: center;
  width: 49px;
`;

const Div3 = styled.div`
  font-family: DM Sans, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div4 = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
  font-size: 16px;
  color: #2a2a2a;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div5 = styled.div`
  display: flex;
  gap: 15px;
  flex: 1;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 16px;
  fill: #0080ff;
  margin: auto 0;
`;

const Div6 = styled.div`
  font-family: DM Sans, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div7 = styled.div`
  display: flex;
  gap: 15px;
  flex: 1;
`;

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 16px;
  fill: #0080ff;
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
  white-space: nowrap;
  flex: 1;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img4 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 16px;
  fill: #0080ff;
  margin: auto 0;
`;

const Div10 = styled.div`
  font-family: DM Sans, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div11 = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
  font-size: 16px;
  color: #2a2a2a;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div12 = styled.div`
  display: flex;
  gap: 15px;
  flex: 1;
  flex-grow: 1;
  flex-basis: auto;
`;

const Img5 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 16px;
  fill: #0080ff;
  margin: auto 0;
`;

const Div13 = styled.div`
  font-family: DM Sans, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div14 = styled.div`
  display: flex;
  gap: 15px;
  flex: 1;
  flex-grow: 1;
  flex-basis: auto;
`;

const Img6 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 16px;
  fill: #0080ff;
  margin: auto 0;
`;

const Div15 = styled.div`
  font-family: DM Sans, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div16 = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div17 = styled.div`
  font-family: DM Sans, sans-serif;
  justify-content: center;
  border-radius: 7px;
  background-color: #d0fce0;
  color: #4ade80;
  flex-grow: 1;
  width: fit-content;
  padding: 15px 60px;
  @media (max-width: 991px) {
    padding: 20px 20px;
  }
`;

const Div18 = styled.div`
  font-family: DM Sans, sans-serif;
  justify-content: center;
  border-radius: 7px;
  background-color: #4ade80;
  color: var(--Color-White-100, #fff);
  white-space: nowrap;
  padding: 15px 48px;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 20px 20px;
  }
`;


