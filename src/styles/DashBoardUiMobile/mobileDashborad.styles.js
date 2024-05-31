import styled from "styled-components";

export const MobileDashBoardMainText = styled.h1`
     text-align: center;
  font: 700 49px/66px Urbanist, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
    line-height: 60px;
  }
`

export const HeroDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: column;
  color: var(--Color-White-100, #fff);
  font-weight: 400;
  padding: 40px 32px 0;

`;
export const UnLockText = styled.div`
    text-align: center;
  margin-top: 5px;
  font: 16px Urbanist, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
export const FounderImage  = styled.img`
    position: absolute;

`;

export const ContactDiv  = styled.div`
  border-radius: 12px;
  box-shadow: 0px 4.187px 19.888px 0px rgba(0, 19, 58, 0.25);
  background-color: white;
  
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #848484;
  padding: 31px 31px 0;
  z-index: 20;


`;

export const OurOffering  = styled.h1`
 color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke: 1px #6422CD;
  font-size: 90px;
`;


export const NavItem = styled.div`
  padding: 10px;
  font-weight: 700;
  color: white;
`;

