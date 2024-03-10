import styled from 'styled-components';
import { Button } from 'antd';
export const SessionLimitContainer = styled.div`
height: 100vh;
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
padding: 5rem;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 4px;
  left: 4px;
  padding: 6px 15px 6px 15px;
  border: 1px solid #012353;
  border-radius: 4px;
  display: inline-flex;
  gap: 10px;
  color: black;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  font-family: 'Manrope', sans-serif;
`;

export const CardContainer = styled.div`
 width: fit-content;
  height: fit-content;
  background-color: #fff;
  text-align: center;
  padding: 10px;
`;

export const Title = styled.h1`
   color: #012353;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 16px;
  text-align:left;
  font-family: 'Manrope', sans-serif;
`;

export const Description = styled.p`
  margin-bottom: 16px;
  color: #777;
  font-size: 1.25rem;
  font-weight: normal;
  font-family: 'Source Sans Pro', sans-serif;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: fit-content;
`;

export const Box=styled.div`
 height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  display: flex;
  position: relative;
  &:hover::after {
    content: 'Logout';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: red;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

`;
export const LoginTime=styled.p`
`;
export const ClearButton = styled.button`
   padding: 6px 6px;
   left:641px;
   top:219px;
  border: 1px solid #012353;
  border-radius: 4px;
  display: inline-flex;
  gap: 5px;
  color: black;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.25rem;
  font-family: 'Manrope', sans-serif;
  line-height: 2;
`;
export const ClearAllButton=styled.button`
 width: 100%;
  
  padding: 0.75rem 51px;
  left: 77px;
  top: 390px;
  background: linear-gradient(to bottom right, #6610f2, #3498db);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'DM Sans', sans-serif;
  line-height: 2rem;
  border: none;
  cursor: pointer;
`;

export const StyledButton = styled.button`
position: absolute;
top: 20px;
left: 20px;
padding: 10px 15px;
border: 1px solid #012353;
border-radius: 4px;
display: inline-flex;
gap: 5px;
color: black;
font-size: 10px;
font-weight: 600;
line-height: 1.4;
font-family: 'Manrope', sans-serif;
display: flex;
align-items: center;
cursor: pointer;
`;




export const StyledBoxSessionLimit = styled.div`
  border-radius: 10px;
  display: flex;
  
`;

export const StyledDivOss = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const StyledLoginTime = styled(LoginTime)`
  color: #595a5c;
`;

export const StyledOSDiv = styled.div`
  color: #595a5c;
`;

export const StyledClearButton = styled(Button)`
  margin-left: 10px;
  padding: 6px 15px;
  border: 1px solid #012353;
  border-radius: 4px;
  display: inline-flex;
  gap: 10px;
  color: black;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
`;
export const SessionLimitContainers = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;

`;

export const OsColor = styled.div`
  color: #595a5c;
`;