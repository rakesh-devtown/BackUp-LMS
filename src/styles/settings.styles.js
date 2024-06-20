import styled from "styled-components";
import Input from "antd/es/input/Input";

export const StyledSettingsContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border-radius: 18px;
  max-height: 100%;
  background: #fff;
  padding: 24px;
  color: #384d6d;
  /* font-size: ${(props) => props.fontSize || "16px"}; */
  /* width: 100% ; */
  & > div:first-child {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    gap: 10px;
  }
  h3 {
    font-size: 24px;
    color: #0859de;
  }
`;

export const StyledModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: ${(props) => (props.width >= 768 ? "500px" : "350px")};
  /* min-height: ${(props) => (props.width >= 1200 ? "470px" : "300px")}; */
  padding-bottom: 15px;
  margin: auto;
`;

export const StyledTitle = styled.h2`
  margin: 0;
  color: #081735;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const StyledParagraph = styled.p`
  color: #232323;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  span {
    color: #ff6464;
  }
`;

export const StyledLabel = styled.label`
  color: #081735;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Poppins;
  font-size: 16.391px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledInput = styled(Input)`
  color: #4a4a4a;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
