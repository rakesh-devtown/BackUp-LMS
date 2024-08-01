import useWindowSize from "../../hooks/useWindowSize";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const WatchBeforeNextLive = () => {
  const { width } = useWindowSize();
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("clicked");
    // navigate("/video");
  };

  return (
    <StyledDiv width={width} onClick={handleClick}>
      <div className="box">
        <div className="box-top">
          <h5>Module 1: Testing Title</h5>
        </div>
        <div className="box-bottom">
          <p>Day 3: Testing Topic</p>
        </div>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 16px 16px;
  /* border-bottom: 0.75px solid #5578d1; */
  cursor: pointer;
  .box {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  h5 {
    font-family: "DM Sans";
    color: #474747;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .box-bottom {
    p {
      color: #2b528e;
      font-family: "DM Sans";
      font-size: 16px;
      font-weight: 400;
    }
  }
`;

export default WatchBeforeNextLive;
