import * as React from "react";
import styled from "styled-components";

export default function SideBarDashBoardCard() {
  return (
    <Div>
      <Img

        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6d2bc1cf9cc288d2eec0114d8e448f401f0a6a257535ce0776deeb2a582a16d?"
      />
      <Div2>
        <span
          style={{
            fontSize: "14px"
          }}
        >Start your </span>Free Demo Course
      </Div2>
      <Div3>Go to course page</Div3>
    </Div>
  );
}

const Div = styled.div`
  display:flex;
  justify-content: start;
  border-radius: 12px;
  background-color: #1e6de8;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px;

`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 111px;
  align-self: center;
  max-width: 100%;
`;

const Div2 = styled.div`
  color: #f5f5f5;
  margin-top: 8px;
  font-weight: 700;
  font-size: 20px;
  width: 100%;
  font-family: 'DM Sans', sans-serif;
  display: flex;
  justify-content: center;

  flex-direction:   column;
  
`;

const Div3 = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 7px;
  border-color: rgba(199, 227, 255, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Primary-Secondary, #f7f5ff);
  margin-top: 8px;
  color: #1e6de8;
  white-space: nowrap;
  text-align: center;
  padding: 10px 30px;
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  font-family: 'DM Sans', sans-serif;
`;