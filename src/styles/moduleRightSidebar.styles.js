import styled from "styled-components";

export const StyledTopicNode = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #3f4b5e;
  i {
    display: grid;
    place-items: center;
  }
  .hide,
  .play {
    font-weight: 300;
  }
`;

export const FlexBoxCenter = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : 0)};
`;
