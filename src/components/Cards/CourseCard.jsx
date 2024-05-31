import * as React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function CourseCard() {
  const url = useLocation();
  console.log(url.pathname);
  return (
    <Div     >
      {!(url.pathname === "/lms") ? <Div2>Recent enrolled course</Div2> : null}
      <Div3>
        <Div4>
          <Img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0df338a6f59fa48fa1d568f65ca3160f6459da965496a878cd17db05d4ae9af4?apiKey=3253b8c03e174b5d8b62115417961652&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df338a6f59fa48fa1d568f65ca3160f6459da965496a878cd17db05d4ae9af4?apiKey=3253b8c03e174b5d8b62115417961652&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df338a6f59fa48fa1d568f65ca3160f6459da965496a878cd17db05d4ae9af4?apiKey=3253b8c03e174b5d8b62115417961652&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df338a6f59fa48fa1d568f65ca3160f6459da965496a878cd17db05d4ae9af4?apiKey=3253b8c03e174b5d8b62115417961652&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df338a6f59fa48fa1d568f65ca3160f6459da965496a878cd17db05d4ae9af4?apiKey=3253b8c03e174b5d8b62115417961652&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df338a6f59fa48fa1d568f65ca3160f6459da965496a878cd17db05d4ae9af4?apiKey=3253b8c03e174b5d8b62115417961652&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df338a6f59fa48fa1d568f65ca3160f6459da965496a878cd17db05d4ae9af4?apiKey=3253b8c03e174b5d8b62115417961652&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df338a6f59fa48fa1d568f65ca3160f6459da965496a878cd17db05d4ae9af4?apiKey=3253b8c03e174b5d8b62115417961652&"
          />
          <Div5>Full Stack Web Development</Div5>
        </Div4>

        {!(url.pathname === "/courses") && !(url.pathname === "/") ? (
          <>
            <Div6>
              <Div7>Course Contents</Div7>
              <Div8>28% Completed</Div8>
            </Div6>
            <Div9>
              <Div10 />
            </Div9>
            <Div11>Go to Demo classroom</Div11>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "20px",
              width: "100%",
            }}
          >
            <div
              style={{
                borderTop: "1px solid #1E6DE8",
                width: "100%",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                width: "100%",
                fontSize: "18px",
              }}
            >
              Indsutrail Training and Internsip Program
            </div>
          </div>
        )}
        <Div12 />
      </Div3>
    </Div>
  );
}

const Div = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  flex-direction: column;
  max-width: fit-content;
`;

const Div2 = styled.div`
  display: flex;
  align-items: start;
  border-radius: 8px;
  background-color: #e7f0ff;
  width: 100%;
  color: #2a2a2a;
  justify-content: center;
  padding: 15px;
  font: 400 22px DM Sans, sans-serif;
`;

const Div3 = styled.div`
  padding: 20px;
  padding-top: 65px;
  justify-content: flex-end;
  align-items: center;
  border-radius: 6px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.15);
  border-color: rgba(233, 234, 240, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Color-White-100, #fff);
  display: flex;
  margin-top: 0px;
  width: 100%;
  flex-direction: column;
`;

const Div4 = styled.div`
  display: flex;

  max-width: 100%;
  padding-right: 20px;
  gap: 20px;
  font-size: 28px;
  color: #171717;
  font-weight: 700;
  text-transform: capitalize;
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 70px;
  align-self: start;
`;

const Div5 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: DM Sans, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div6 = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 28px;

  max-width: 100%;
  padding-right: 20px;
  gap: 20px;
  color: #000;
  font-weight: 600;
`;

const Div7 = styled.div`
  letter-spacing: -0.24px;
  flex-grow: 1;
  flex-basis: auto;
  font: 24px/133% Inter, sans-serif;
`;

const Div8 = styled.div`
  text-align: right;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font: 16px/137.5% Inter, sans-serif;
`;

const Div9 = styled.div`
  background-color: #e9eaf0;
  display: flex;
  margin-top: 16px;
  width: 364px;
  max-width: 100%;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  @media (max-width: 900px) {
    max-width: 100%;
    width: 0px;
  }
`;

const Div10 = styled.div`
  background-color: #1e6de8;
  width: 37px;
  height: 4px;
`;

const Div11 = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 9px;
  background-color: #0859de;
  margin-top: 20px;
  width: 100%;
  max-width: 364px;
  color: var(--Color-White-100, #fff);
  text-transform: capitalize;
  letter-spacing: -0.13px;
  padding: 0 42px;
  font: 600 16px/48px Inter, sans-serif;
`;

const Div12 = styled.div`
  background-color: #1e6de8;
  align-self: stretch;
  min-height: 6px;
  margin-top: 18px;
  width: 100%;
`;
