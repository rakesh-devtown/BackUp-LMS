import * as React from "react";
import styled from "styled-components";

export default function CourseCertification() {
  return (
    <Div>
      <Div2>Certification</Div2>
      <Div3>
        <Div4>
          <Div5>
            <Column>
              <Div6>
                <Img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5851e3e6d11f765616e202c5051fdcb44510142100402b3ef704924c056aca3b?apiKey=3253b8c03e174b5d8b62115417961652&"
                />
                <Div7>Certificate of Internship Completion</Div7>
                <Div8>
                  Earn our Certificate of Internship Completion by excelling in
                  your internship! Complete tasks, submit a detailed report, and
                  attend an exit interview to showcase your achievements. This
                  certificate recognizes your dedication and growth during the
                  internship—a testament to your professional journey.
                  Congratulations on this achievement!
                </Div8>
                <Div9>View My Certificate</Div9>
              </Div6>
            </Column>
            <Column2>
              <Img2
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/92b0656b5b64874c4b8d51408c336bc93527c754361d712fbd4e30c91a240619?apiKey=3253b8c03e174b5d8b62115417961652&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/92b0656b5b64874c4b8d51408c336bc93527c754361d712fbd4e30c91a240619?apiKey=3253b8c03e174b5d8b62115417961652&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92b0656b5b64874c4b8d51408c336bc93527c754361d712fbd4e30c91a240619?apiKey=3253b8c03e174b5d8b62115417961652&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/92b0656b5b64874c4b8d51408c336bc93527c754361d712fbd4e30c91a240619?apiKey=3253b8c03e174b5d8b62115417961652&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/92b0656b5b64874c4b8d51408c336bc93527c754361d712fbd4e30c91a240619?apiKey=3253b8c03e174b5d8b62115417961652&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92b0656b5b64874c4b8d51408c336bc93527c754361d712fbd4e30c91a240619?apiKey=3253b8c03e174b5d8b62115417961652&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/92b0656b5b64874c4b8d51408c336bc93527c754361d712fbd4e30c91a240619?apiKey=3253b8c03e174b5d8b62115417961652&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/92b0656b5b64874c4b8d51408c336bc93527c754361d712fbd4e30c91a240619?apiKey=3253b8c03e174b5d8b62115417961652&"
              />
            </Column2>
          </Div5>
        </Div4>
        <Img3
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4e19dd641d8b56f839359ff1372a6e3afa05088156f3a1967e21e54b2fc2707e?apiKey=3253b8c03e174b5d8b62115417961652&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e19dd641d8b56f839359ff1372a6e3afa05088156f3a1967e21e54b2fc2707e?apiKey=3253b8c03e174b5d8b62115417961652&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e19dd641d8b56f839359ff1372a6e3afa05088156f3a1967e21e54b2fc2707e?apiKey=3253b8c03e174b5d8b62115417961652&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e19dd641d8b56f839359ff1372a6e3afa05088156f3a1967e21e54b2fc2707e?apiKey=3253b8c03e174b5d8b62115417961652&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e19dd641d8b56f839359ff1372a6e3afa05088156f3a1967e21e54b2fc2707e?apiKey=3253b8c03e174b5d8b62115417961652&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e19dd641d8b56f839359ff1372a6e3afa05088156f3a1967e21e54b2fc2707e?apiKey=3253b8c03e174b5d8b62115417961652&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e19dd641d8b56f839359ff1372a6e3afa05088156f3a1967e21e54b2fc2707e?apiKey=3253b8c03e174b5d8b62115417961652&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e19dd641d8b56f839359ff1372a6e3afa05088156f3a1967e21e54b2fc2707e?apiKey=3253b8c03e174b5d8b62115417961652&"
        />
      </Div3>
    </Div>
  );
}

const Div = styled.div`
  justify-content: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
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
  background-color: #fff;
  display: flex;
  margin-top: 26px;
  width: 100%;
  flex-direction: column;
  padding: 26px 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div4 = styled.div`
  width: 100%;
  padding: 30px 40px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Div5 = styled.div`
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
  width: 66%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div6 = styled.div`
  display: flex;
  margin-top: 13px;
  flex-direction: column;
  color: #2c2c2c;
  font-weight: 400;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Img = styled.img`
  aspect-ratio: 4.76;
  object-fit: auto;
  object-position: center;
  width: 130px;
  max-width: 100%;
`;

const Div7 = styled.div`
  margin-top: 20px;
  font: 700 36px DM Sans, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div8 = styled.div`
  margin-top: 20px;
  font: 18px DM Sans, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div9 = styled.div`
  justify-content: center;
  border-radius: 7px;
  background-color: #045ed6;
  align-self: start;
  margin-top: 20px;
  color: var(--Color-White-100, #fff);
  padding: 16px 21px;
  font: 20px DM Sans, sans-serif;
  @media (max-width: 991px) {
    padding: 20px 20px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  
  width: 34%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 0.71;
  object-fit: auto;
  object-position: center;
  width: 100%;
  box-shadow: 0px 0px 13.637px 0px rgba(0, 0, 0, 0.25);
  flex-grow: 1;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Img3 = styled.img`
  aspect-ratio: 5.88;
  object-fit: auto;
  object-position: center;
  width: 100%;
  margin-top: 46px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`; 


