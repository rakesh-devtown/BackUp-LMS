import * as React from "react";
import styled from "styled-components";

export default function BootCampCardLeft() {
  return (
    <Div>
      <Div2>
        <span >Learn JavaScript & React.JS</span>
        <span > from A to Z</span>
      </Div2>
      <Div3>
        &quot;Master the Foundations: A Week-Long Dive into JavaScript &
        React.JS&quot;
      </Div3>
      <Div4>
        <Div5>
          <Div6>Enrollment end on </Div6>
          <Div7>07th Jan 2024</Div7>
        </Div5>
        <Div8>
          <Div9>Course starts on</Div9>
          <Div10>08th Jan 2024</Div10>
        </Div8>
      </Div4>
      <Div11>
        <Div12>
          <Div13>Duration</Div13>
          <Div14>7 Days</Div14>
        </Div12>
        <Div15>
          <Div16>Course Fee</Div16>
          <Div17>Free </Div17>
        </Div15>
      </Div11>
      <Div18>
        <Div19>Register Now</Div19>
        <Div20>More Bootcamps</Div20>
      </Div18>
    </Div>
  );
}

const Div = styled.div`
  max-width: 430px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: var(--Color-White-100, #fff);
`;

const Div2 = styled.div`
  color: var(--Color-Brand-Brand-Blue, #0859de);
  width: 100%;
  font: 400 36px DM Sans, sans-serif;
`;

const Div3 = styled.div`
  color: #e3e3e3;
  font-family: DM Sans, sans-serif;
  font-weight: 400;
  margin-top: 11px;
  width: 100%;
`;

const Div4 = styled.div`
  display: flex;
  margin-top: 34px;
  gap: 20px;
  justify-content: space-between;
`;

const Div5 = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const Div6 = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 300;
`;

const Div7 = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 500;
`;

const Div8 = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const Div9 = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 300;
`;

const Div10 = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 500;
`;

const Div11 = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
`;

const Div12 = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Div13 = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 300;
`;

const Div14 = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 500;
`;

const Div15 = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Div16 = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 300;
`;

const Div17 = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 500;
`;

const Div18 = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 34px;
  gap: 18px;
  font-weight: 400;
`;

const Div19 = styled.div`
  font-family: DM Sans, sans-serif;
  justify-content: center;
  border-radius: 88.179px;
  box-shadow: 0px 17.814px 88.179px 0px rgba(8, 89, 222, 0.47);
  background-color: var(--Color-Brand-Brand-Blue, #0859de);
  padding: 18px 38px;
`;

const Div20 = styled.div`
  font-family: DM Sans, sans-serif;
  justify-content: center;
  border-radius: 88.179px;
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 1px;
  padding: 18px 23px;
`;


