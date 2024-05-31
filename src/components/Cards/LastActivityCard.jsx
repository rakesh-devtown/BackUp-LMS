import { CheckOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button } from "antd";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";

const LastActivityCard = ({ leftPadding }) => {
  const { width } = useWindowSize();

  return (
    <StyledBox width={width} leftPadding={leftPadding}>
      <div className="content">
        <div className="content-top">
          <p>Last activity on week 1</p>
        </div>
        <div className="content-bottom">
          <FlexBox>
            <i>
              <CheckOutlined style={{ color: "green" }} />
            </i>
            <div className="details">
              <p>Lecture 1 : Introduction to Data Science</p>
              <p>
                End date : <span>16 August, 2024 </span>, 11:50 pm
              </p>
            </div>
          </FlexBox>
          <Link to={"/video"}>
            <Button type="primary" size="large" danger>
              Resume Learning
            </Button>
          </Link>
        </div>
      </div>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  padding-left: ${(props) =>
    props.width >= 768 && props.leftPadding ? "70px" : 0};
  width: 100%;
  .content-top {
    color: white;
    font-size: 16px;
    font-weight: 400;
    padding: 16px 20px !important;
    border-radius: 8px 8px 0px 0px;
    border-bottom: 0.5px solid #abb6d2;
    background: var(--secondaryColor);
  }
  .content-bottom {
    display: flex;
    padding: 16px;
    gap: 10px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: 1px solid #d2e0ff;
    background: var(--Color-White-100, #fff);
    align-items: ${(props) => (props.width >= 768 ? "center" : "flex-start")};
    flex-direction: ${(props) => (props.width >= 768 ? "row" : "column")};
    i {
      padding: 5px;
    }
    button {
      font-family: "DM Sans";
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: #474747;
    flex-grow: 1;
    p:first-child {
      font-size: 16px;
      font-weight: 500;
    }
    p:nth-child(2) {
      font-size: 14px;
      font-weight: 400;
      span {
        font-weight: 500;
      }
    }
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 16px;
  align-items: center;
`;

export default LastActivityCard;
