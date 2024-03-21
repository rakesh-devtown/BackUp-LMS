import {
  ArrowRightOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import * as React from "react";
import styled from "styled-components";

export default function LayoutAlumCard() {
  const [view, setView] = React.useState(false);
  return (
    <Div>
      <Div2>
        <Div3>
          <Div4>
            <Img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/19706be0bdbaac2ad3c72cd0cadb2108ab4024a1a10126983f6d3ecdecc18fcc?apiKey=3253b8c03e174b5d8b62115417961652&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/19706be0bdbaac2ad3c72cd0cadb2108ab4024a1a10126983f6d3ecdecc18fcc?apiKey=3253b8c03e174b5d8b62115417961652&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/19706be0bdbaac2ad3c72cd0cadb2108ab4024a1a10126983f6d3ecdecc18fcc?apiKey=3253b8c03e174b5d8b62115417961652&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/19706be0bdbaac2ad3c72cd0cadb2108ab4024a1a10126983f6d3ecdecc18fcc?apiKey=3253b8c03e174b5d8b62115417961652&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/19706be0bdbaac2ad3c72cd0cadb2108ab4024a1a10126983f6d3ecdecc18fcc?apiKey=3253b8c03e174b5d8b62115417961652&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/19706be0bdbaac2ad3c72cd0cadb2108ab4024a1a10126983f6d3ecdecc18fcc?apiKey=3253b8c03e174b5d8b62115417961652&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/19706be0bdbaac2ad3c72cd0cadb2108ab4024a1a10126983f6d3ecdecc18fcc?apiKey=3253b8c03e174b5d8b62115417961652&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/19706be0bdbaac2ad3c72cd0cadb2108ab4024a1a10126983f6d3ecdecc18fcc?apiKey=3253b8c03e174b5d8b62115417961652&"
            />
            <Div5>
              <Div6>Shaurya Sinha</Div6>
              <Div7>
                <Img2
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/672fef51c1c2d6a964234271bba592105c245a47182b554d029940f1854bc28f?apiKey=3253b8c03e174b5d8b62115417961652&"
                />
                <Div8>Senior Software Engineer</Div8>
              </Div7>
              <Div9>
                <Img3
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4a156215d412f00e95aa34d4ab2c6e5f245b7544d6adacb7ffe5d0638d6bcdd?apiKey=3253b8c03e174b5d8b62115417961652&"
                />
                <Div10>Bangalore</Div10>
              </Div9>
            </Div5>
          </Div4>
          <Div11>
            <Div12>
              <Div13>Pre DevTown</Div13>
              <Div14>Adobe</Div14>
            </Div12>
            <ArrowRightOutlined />
            <Div15>
              <Div16>Post DevTown</Div16>
              <Img5
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d59180e9e462dd0a5e094ee1b77cda3df94da2655f3ec40b743397990b086b4b?apiKey=3253b8c03e174b5d8b62115417961652&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d59180e9e462dd0a5e094ee1b77cda3df94da2655f3ec40b743397990b086b4b?apiKey=3253b8c03e174b5d8b62115417961652&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d59180e9e462dd0a5e094ee1b77cda3df94da2655f3ec40b743397990b086b4b?apiKey=3253b8c03e174b5d8b62115417961652&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d59180e9e462dd0a5e094ee1b77cda3df94da2655f3ec40b743397990b086b4b?apiKey=3253b8c03e174b5d8b62115417961652&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d59180e9e462dd0a5e094ee1b77cda3df94da2655f3ec40b743397990b086b4b?apiKey=3253b8c03e174b5d8b62115417961652&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d59180e9e462dd0a5e094ee1b77cda3df94da2655f3ec40b743397990b086b4b?apiKey=3253b8c03e174b5d8b62115417961652&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d59180e9e462dd0a5e094ee1b77cda3df94da2655f3ec40b743397990b086b4b?apiKey=3253b8c03e174b5d8b62115417961652&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d59180e9e462dd0a5e094ee1b77cda3df94da2655f3ec40b743397990b086b4b?apiKey=3253b8c03e174b5d8b62115417961652&"
              />
            </Div15>
          </Div11>
        </Div3>
        <Div17>
          <Div18 onClick={() => setView(!view)}>
            <Div19 onClick={() => setView(!view)}>
              <div onClick={() => setView(!view)}>View Review</div>
            </Div19>
            {view ? <UpOutlined /> : <DownOutlined />}
          </Div18>
        </Div17>
        <div
          style={{
            display: "flex",
            padding: "20px",
            backgroundColor: "#1e6de8",
            borderRadius: "0px 0px 8px 8px",
          }}
        ></div>
      </Div2>
      {view && (
        <Div20>
          I am thankful to satya sai, Mohit Sharma, Sahil B., Naman Bhalla,
          Anshuman Singh, Abhimanyu Saxena bhai from Scaler for the unparalleled
          guidance, knowledge and support that helped me take this leap. Their
          course structure is impeccable and has truly helped me widen the
          horizons of my knowledge. They have truly established that knowledge
          is not limited to four walls of a classroom...
        </Div20>
      )}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  max-width: 459px;
  padding-bottom: 32px;
  justify-content: start;
  border-radius: 8px;
  align-items: start;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const Div2 = styled.div`
  padding-top: 18px;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--Color-White-100, #fff);
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Div3 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  letter-spacing: 0.1px;
  padding: 0 22px;
`;

const Div4 = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: #61738e;
  font-weight: 400;
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 90px;
`;

const Div5 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  width: fit-content;
  margin: auto 0;
`;

const Div6 = styled.div`
  color: #1a2c47;
  font: 700 20px DM Sans, sans-serif;
`;

const Div7 = styled.div`
  display: flex;
  gap: 10px;
  line-height: 140%;
  padding: 2px 4px;
`;

const Img2 = styled.img`
  aspect-ratio: 1.23;
  object-fit: auto;
  object-position: center;
  width: 16px;
  margin: auto 0;
`;

const Div8 = styled.div`
  font-family: DM Sans, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div9 = styled.div`
  display: flex;
  gap: 12px;
  white-space: nowrap;
  line-height: 140%;
  padding: 2px 6px;
`;

const Img3 = styled.img`
  aspect-ratio: 0.8;
  object-fit: auto;
  object-position: center;
  width: 12px;
  margin: auto 0;
`;

const Div10 = styled.div`
  font-family: DM Sans, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div11 = styled.div`
  max-width: 1400px;
  align-items: center;
  display: flex;
  margin-top: 12px;
  gap: 20px;
  text-align: center;
  justify-content: space-between;
`;

const Div12 = styled.div`
  justify-content: center;
  align-self: stretch;
  display: flex;
  padding-bottom: 8px;
  flex-direction: column;
`;

const Div13 = styled.div`
  color: #61738e;
  font: 500 14px/20px DM Sans, sans-serif;
`;

const Div14 = styled.div`
  color: #000;
  align-self: center;
  margin-top: 12px;
  font: 400 16px/140% DM Sans, sans-serif;
`;

const Img4 = styled.img`
  aspect-ratio: 2.08;
  object-fit: auto;
  object-position: center;
  width: 29px;
  stroke-width: 1.5px;
  stroke: #bac6d8;
  border-color: rgba(186, 198, 216, 1);
  border-style: solid;
  border-width: 2px;
  align-self: stretch;
  margin: auto 0;
`;

const Div15 = styled.div`
  justify-content: center;
  align-self: stretch;
  display: flex;
  padding-bottom: 8px;
  flex-direction: column;
  font-size: 14px;
  color: #61738e;
  font-weight: 500;
  line-height: 140%;
  margin: auto 0;
`;

const Div16 = styled.div`
  font-family: DM Sans, sans-serif;
`;

const Img5 = styled.img`
  aspect-ratio: 3.03;
  object-fit: auto;
  object-position: center;
  width: 75px;
  align-self: center;
  margin-top: 17px;
`;

const Div17 = styled.div`
  justify-content: center;
  align-items: end;
  border-color: rgba(221, 221, 221, 1);
  border-style: solid;
  border-top-width: 1px;
  display: flex;
  margin-top: 12px;
  width: 100%;
  flex-direction: column;
  font-size: 16px;
  color: #006dd9;

  font-weight: 500;
  padding: 16px 60px;
`;

const Div18 = styled.div`
  justify-content: center;
  display: flex;
  gap: 17px;
  padding: 0 1px;
`;

const Div19 = styled.div`
  font-family: DM Sans, sans-serif;
`;

const Img6 = styled.img`
  aspect-ratio: 1.56;
  object-fit: auto;
  object-position: center;
  width: 14px;
  margin: auto 0;
`;

const TextDiv = styled.div`
  color: var(--Color-White-100, #fff);
  text-align: center;
  align-self: center;
  margin-top: 32px;
  font: 400 16px DM Sans, sans-serif;
`;

const Div20 = styled.div`
  color: var(--Color-White-100, #fff);
  text-align: center;
  background-color: #1e6de8;
  position: absolute;
  bottom: -90px;
  z-index: 100;
  align-self: center;
  margin-top: 32px;
  border-radius: 0px 0px 8px 8px;
  font: 400 16px DM Sans, sans-serif;
  padding: 20px;
  transition: all 1s;

  @media screen and (max-width: 991px) {
    bottom: -150px;
  }
`;
