import { Link } from "react-router-dom";
import styled from "styled-components";

const MagicLinkContainer = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  
  margin: 0 auto;

`;

const BackButtonOuterContainer = styled.div`
  max-width: 457px;
  background-color: white;
  padding: 5rem 1rem;
  border-radius: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const MagicLinkLogoOuterContainer = styled.div`
  text-align: center;

`;

const MagicLinkLogo = styled.img`
  margin: 0 auto;
  height: 3rem;
  width: auto;
`;

const MagicLinkLogoHeading = styled.h2`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 1.875rem;
  font-weight: 800;
  color: #1a202c;
`;
const MagicLinkDescription = styled.p`
  text-align: center;
  font-size: 1rem;
  
`;
const MagicLinkBoldText = styled.span`
  font-weight: 700;
`;
const MagicLinkForm = styled.form`
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;


const MagicLinkFormInnerContainer = styled.div`
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
`;


const MagicLinkSubmitButtonContainer = styled.div`
  display: flex;

  width: 100%;
`;
const VerifyMagicLinkContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(to right, #5C258D, #4389A2);
  color: white;
`;

const VerifyMagicLinkText = styled.div`
  font-size: 1.875rem;
  margin: 1rem 0;
`;

const VerifyMagicLinkButton = styled(Link)`
  padding: 1rem 2rem;
  background-color: whitesmoke;
  color: black;
  border-radius: 0.5rem;
`;
export {
  MagicLinkContainer,
  MagicLinkLogoOuterContainer,
  BackButtonOuterContainer,
  MagicLinkLogo,
  MagicLinkLogoHeading,
  MagicLinkDescription,
  MagicLinkBoldText,
  MagicLinkForm,
  MagicLinkFormInnerContainer,
  MagicLinkSubmitButtonContainer ,
  VerifyMagicLinkContainer,
  VerifyMagicLinkText,
  VerifyMagicLinkButton


};
