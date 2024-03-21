import * as React from "react";
import styled from "styled-components";

export default function BootCampCard() {
  return (
    <Div>
      <Div2>
        <Div3>Mentor & Co - Founder</Div3>
        <Div4>Python & Artificial Intelligence</Div4>
        <Img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/047e7c04e545c9d0842bfe5cbe385af3d600f2a33ae39d020b10b938bb8cb6b8?apiKey=3253b8c03e174b5d8b62115417961652&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/047e7c04e545c9d0842bfe5cbe385af3d600f2a33ae39d020b10b938bb8cb6b8?apiKey=3253b8c03e174b5d8b62115417961652&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/047e7c04e545c9d0842bfe5cbe385af3d600f2a33ae39d020b10b938bb8cb6b8?apiKey=3253b8c03e174b5d8b62115417961652&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/047e7c04e545c9d0842bfe5cbe385af3d600f2a33ae39d020b10b938bb8cb6b8?apiKey=3253b8c03e174b5d8b62115417961652&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/047e7c04e545c9d0842bfe5cbe385af3d600f2a33ae39d020b10b938bb8cb6b8?apiKey=3253b8c03e174b5d8b62115417961652&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/047e7c04e545c9d0842bfe5cbe385af3d600f2a33ae39d020b10b938bb8cb6b8?apiKey=3253b8c03e174b5d8b62115417961652&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/047e7c04e545c9d0842bfe5cbe385af3d600f2a33ae39d020b10b938bb8cb6b8?apiKey=3253b8c03e174b5d8b62115417961652&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/047e7c04e545c9d0842bfe5cbe385af3d600f2a33ae39d020b10b938bb8cb6b8?apiKey=3253b8c03e174b5d8b62115417961652&"
        />
      </Div2>
     
      <Div5>
        <Div6>
          Instructor <br />
          <span >Shaurya Sinha</span>
        </Div6>
        <Div7>
          <Img2
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/042b7670da7b8daa96e2d80fb20e687712262cb2a22f63da38c13ca1e7ed12de?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          <Div8>Connect</Div8>
        </Div7>
      </Div5>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 15.031px;
  box-shadow: 0px 0px 10.4px 0px rgba(31, 42, 65, 0.25);
  border-color: rgba(54, 58, 66, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #1f2a41;
  max-width: 383px;
  flex-direction: column;
`;

const Div2 = styled.div`
  border-radius: 10.839px;
  background-color: #151d30;
  display: flex;
  flex-direction: column;
  padding: 38px 0 0 17px;
`;

const Div3 = styled.div`
  color: #a74ded;
  font: 400 11px/150% Metropolis, sans-serif;
`;

const Div4 = styled.div`
  color: var(--Color-White-100, #fff);
  letter-spacing: -0.34px;
  margin-top: 16px;
  font: 600 23px/30px Metropolis, sans-serif;
`;

const Img = styled.img`
  aspect-ratio: 2.13;
  object-fit: auto;
  object-position: center;
  width: 100%;
  margin-top: 18px;
`;

const Div5 = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 16px;
  gap: 15px;
  padding: 8px 1px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const Div6 = styled.div`
  color: var(--Color-White-100, #fff);
  font: 700 16px Poppins, sans-serif;
`;

const Div7 = styled.div`
  border-radius: 7.678px;
  border-style: solid;
  border-width: 1px;
  display: flex;
  gap: 10px;
  font-size: 12px;
  color: #0077b5;
  font-weight: 400;
  white-space: nowrap;
  margin: auto 0;
  padding: 8px;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 26px;
`;

const Div8 = styled.div`
  font-family: Poppins, sans-serif;
  margin: auto 0;
`;


