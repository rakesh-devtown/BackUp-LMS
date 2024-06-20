import { Col, Row } from "antd";
import styled from "styled-components";

export const DotStyle = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    /* color: black; */
    width: 8px;
    height: 8px;
  }
`;

export const StyledPreviousDoubtCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  line-height: normal;
  flex-wrap: wrap;
  .title {
    color: #1d2026;
    font-size: 20px;
    font-weight: 500;
  }
  .time {
    color: #474747;
    font-size: 14px;
    font-weight: 400;
  }
  .resolved-box {
    color: #008022;
    font-family: "DM Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    align-items: center;
    justify-content: space-between;
    width: ${(props) => (props.width >= 768 ? null : "100%")};
    i {
      display: flex;
      align-items: center;
      svg {
        height: 24px;
        width: 24px;
      }
    }
    .last-child {
      margin-right: 23px;
    }
  }
`;

export const StyledAskDoubt = styled.div`
  /* display: flex; */
`;
export const InnerBox = styled(Col)`
  display: flex;
  flex-direction: column;
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  border-right: ${(props) =>
    props.borderRight ? "0.5px solid #ABB6D2" : null};
`;

export const Title = styled.div`
  display: flex;
  gap: 16px;
  color: #294169;
  font-size: 16px;
  font-weight: 500;
  padding: 16px 20px;
  border-bottom: 0.75px solid #abb6d2;
  background: var(--Color-White-100, #fff);
`;

export const Doubt = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #232323;
    font-size: 16px;
    font-weight: 400;
    padding: 12px 8px;
    margin-right: 20px;
    cursor: pointer;
    &:hover,
    .selected {
      margin-right: 5px;
      color: #0859de;
    }
  }
  p {
    width: ${(props) => (props.width >= 768 ? "180px" : null)};
    /* width: 180px; */
  }
  hr {
    margin: 2px 0;
  }
`;
