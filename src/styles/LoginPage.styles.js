
import styled from 'styled-components';
import Input from 'antd/es/input/Input';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export const StyledLogo=styled.img`
    width: auto;
    height: 3rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:auto;
    max-width: 100%;    
    vertical-align: middle;
    overflow-clip-margin: content-box;
    overflow: clip;
    display: flex;
    align-items: center;
    justify-content: center;


`
export const StyledLoginPage = styled.div`
            display: flex;
            overflow: hidden;
            margin:0;
            justify-content: space-between;
            align-items: center;
            height: 100vh; 
            @media (max-width: 1208px)
            {
              display: block;
            } 
`
export const StyledImg = styled.img`
           @media (max-width:1207px)
           {
         display: none;} 
`

export const StyledFormContainer = styled.div`
              background:linear-gradient(90deg, rgba(89,86,139,1) 0%, rgba(76,9,121,1) 8%, rgba(0,82,255,1) 100%);
              padding-left:  2rem;
              padding-right: 2rem;
              padding-bottom: 10rem;
              padding-top: 3rem;
              padding-bottom:3rem ;
              justify-content: center;
              align-items: center;
              height: 100vh;
              display: flex;
       
              @media (min-width:768px){
                width:50%;
              }
              @media (min-width: 640px) 
             {
                 padding-left: 1.5rem;
                 padding-right: 1.5rem;
            }
            @media (max-width:1207px)
           {
         width :100%;}
`

export const StyledLoginForm = styled.div`
                padding: 2.5rem;
                background-color:white;
                border-radius: 0.5rem;             
                max-width: 27rem;
                width:100%;
`
export const StyledHeading=styled.h1`
    margin-top: 1.5rem;
`
export const StyledDevTown = styled.h1`
 color: rgb(100 34 205);     
`
export const StyledP = styled.p`
                        margin-top: 1.5rem;
                       margin:0;
                       display:block;
                        margin-block-start:  1em;
                        margin-block-end:  1em;
                        margin-inline-start: 0px;
                        margin-inline-end: 0px;
                        text-align: left;
                        font-weight: 500;
                        font-size: 1rem;
                         line-height: 1.25rem;
` 
export const InputUsername = styled(Input)`
    height: 2.5rem ;   
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;    
    border-color: rgb(209 213 219);
    border-width: 1px;
    border-radius: 0.5rem;
    appearance: none;
    width: 100%;
    display: block;
    position: relative;
    margin:0;
   
`
export const StyledPassword = styled(Input.Password)`
    background-color: white;
    height: 2.5rem ;    
    font-size: .875rem;
    line-height: 1.25rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border-color: rgb(209 213 219);
    border-width: 1px;
    border-radius: 0.5rem;
    align-items: center;
    width: 100%;  
    position: relative; 
`
export const ForgotPassword = styled.p`
     color: rgb(99 102 241);
                     font-weight: 500;
                    font-size: .875rem;
                    line-height: 1.25rem;
                    text-align: right;
`
export const StyledButton = styled(Button)`
                    height:2.5em;  
                    width: 100%;
                    margin-top: 1rem;
                    margin-bottom: 1rem;
`
export const  CenteredButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 20px; 
`;


export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

export const LoginLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginLink = styled(Link)`
  border: 1px solid;
  border-color: #E3E4E7;
  padding: 3px;
  display: flex;
  margin: auto;
  border-radius: 5px;
`;