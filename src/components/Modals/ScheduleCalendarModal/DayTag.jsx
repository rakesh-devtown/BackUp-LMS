import React from "react";
import styled from "styled-components";

const DayTag = () => {
  const tagArray = [
    {
      tag: "No Class",
      color: "#C8C8C8",
    },
    {
      tag: "Present",
      color: "#3FB34F",
    },
    {
      tag: "Absent",
      color: "#DE0823",
    },
    {
      tag: "Upcoming Class",
      color: "#0D3371",
    },
  ];
  return (
    <TagContainer>
      {tagArray.map((ele, ind) => (
        <TagDiv key={ind}>
          <CircleDiv color={ele.color} />
          <p>{ele.tag}</p>
        </TagDiv>
      ))}
    </TagContainer>
  );
};

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  align-self: stretch;
`;

const TagDiv = styled.div`
  display: flex;
  padding: 1.115px 3.344px 1.115px 4px;
  align-items: center;
  border-radius: 41.799px;
  border: 0.5px solid #d2c9c9;
  background: var(--Color-White-100, #fff);
  /* column-gap: 5.5px; */
  p {
    color: #474747;
    text-align: center;
    font-family: "DM Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 5px;
  }
`;

const CircleDiv = styled.div`
  display: flex;
  width: 15px;
  height: 15px;
  padding: 5.573px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5.573px;
  border-radius: 74.681px;
  background: ${(props) => props.color};
`;

export default DayTag;
