import * as React from "react";
import styled from "styled-components";

export default function CourseRequirements() {
  return (
    <Div>
      <Div2>Course requirements</Div2>
      <Div3>Nunc auctor consequat lorem, in posuere enim hendrerit sed.</Div3>
      <Div4>
        Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero
        nec accumsan.
      </Div4>
      <Div5>
        Duis ornare enim ullamcorper congue consectetur suspendisse interdum
        tristique est sed molestie.
      </Div5>
      <Div6>
        Those who are looking to reboot their work life and try a new profession
        that is fun, rewarding and highly in-demand.
      </Div6>
      <Div7>Praesent eget consequat elit. Duis a pretium purus.</Div7>
      <Div8>
        Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel,
        lacinia quis ex.
      </Div8>
      <Div9>
        This course is for those who want to launch a Freelance Web Design
        career.
      </Div9>
    </Div>
  );
}

const Div = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: var(--Gray-700, #4e5566);
  font-weight: 400;
  letter-spacing: -0.14px;
  line-height: 157%;
  margin-top: 20px;
`;

const Div2 = styled.div`
  color: var(--Gray-900, #1d2026);
  text-align: start;
  letter-spacing: -0.24px;
  width: 100%;
  font: 600 24px/133% Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
  font-family: Inter, sans-serif;
  margin-top: 20px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div4 = styled.div`
  font-family: Inter, sans-serif;
  margin-top: 12px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div5 = styled.div`
  font-family: Inter, sans-serif;
  margin-top: 12px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div6 = styled.div`
  font-family: Inter, sans-serif;
  margin-top: 12px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div7 = styled.div`
  font-family: Inter, sans-serif;
  margin-top: 12px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div8 = styled.div`
  font-family: Inter, sans-serif;
  margin-top: 12px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div9 = styled.div`
  font-family: Inter, sans-serif;
  margin-top: 12px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;


