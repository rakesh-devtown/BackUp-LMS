import { Col, Form } from "antd";
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
  }
  div:hover,
  .selected {
    margin-right: 5px;
    color: #0859de;
  }
  p {
    width: ${(props) => (props.width >= 768 ? "180px" : null)};
    /* width: 180px; */
  }
  hr {
    margin: 2px 0;
  }
`;


// input issue component css

export const CustomForm = styled(Form)`
  position: relative;
  padding: 0 16px;
  .ant-form-item {
    margin-bottom: 8px;
  }
  .ant-form-ite {
    position: relative;
    .ant-form-item-label {
      position: absolute;
      color: #121826;
      top: -15px;
      z-index: 5;
      background: white;
      left: 15px;
      font-weight: 700;
      padding: 0;
      label {
        color: var(--Color-Brand-Brand-Blue, #0859de) !important;
        font-family: "DM Sans";
        font-size: 24px !important;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    textarea {
      padding: 18px 19px;
      color: #6c727f;
      font-family: "DM Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .minimum-words {
    float: right;
    margin-right: 10px;
    color: #6c727f;
    text-align: right;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const BottomPart = styled.div`
  font-family: "DM Sans";
  color: #6c727f;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    .ant-space-item {
      i {
        color: green;
        display: flex;
        align-items: center;
        svg {
          height: 22px;
          width: 22px;
        }
      }
      p {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
`;