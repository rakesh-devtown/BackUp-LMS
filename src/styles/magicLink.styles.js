import styled from "styled-components";

const MagicLinkContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  max-width: 36rem;
  margin: 0 auto;
`;

const BackButtonOuterContainer = styled.div`
  max-width: 20rem;
  background-color: white;
  padding: 2.5rem;
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
  font-weight: bold;
`;
const MagicLinkForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;


const MagicLinkFormInnerContainer = styled.div`
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
`;


const MagicLinkSubmitButtonContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
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
  MagicLinkSubmitButtonContainer

};
