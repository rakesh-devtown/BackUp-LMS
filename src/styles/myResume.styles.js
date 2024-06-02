import { Button, Form } from "antd";
import styled from "styled-components";


export const DotStyle = styled.i`
    svg{
    color: #61738E;
    width: 6px;
    height: 6px;
}
`
export const Title = styled.h5`
        color: #384D6D;
        font-size: 20px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0.1px;
`

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    button{
        font-family: 'DM Sans';
        font-weight: 500;
    }
`

export const StyledContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    font-style: normal;
    h4{
        font-family: "DM Sans";
        color: #384D6D;
        font-size: 20px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0.1px;
    }
    h5{
       font-family: "DM Sans";
       color: #1A2C47;
       font-size: 20px;
       font-weight: 700;
       line-height: 25px; 
       letter-spacing: 0.1px;
    }
    p{
       font-family: "DM Sans";
       font-size: 16px;
       font-weight: 400;
       color: #61738E;
   }
   .edit-btn{
    font-family: 'DM Sans';
    font-weight: 500;
   }
`

export const InnerContainer = styled.div`
    max-height: 400px;
    overflow-y: auto;
    scrollbar-width: none;
    display: flex;
    flex-direction: column;
    padding: 21px 4px;
    margin: 24px 0 12px 0;
    gap: 20px;
    border-top: 0.75px solid #E8E8E8;
    border-bottom: 0.75px solid #E8E8E8;
   
    .ant-form-item-row{
        position: relative;
        .ant-form-item-label{
            position: absolute;
            color: #121826;
            top: -15px;
            z-index: 5;
            background: white;
            left: 15px;
            font-weight: 700;
            padding: 0;
        }
        .ant-input-number{
            width: 100%;
        }
    input, textarea{
        padding: 18px 19px;
        color: #6C727F;
        height: auto;
    }
}
`

// *form related css*****************
export const StyledForm = styled(Form)`
    font-family: "DM Sans";
    font-style: normal;
    line-height: normal;
    font-size: 16px;
    .ant-form-item{
        margin: 0;
        flex-grow: 1;
    }
    label,input{
        font-family: 'DM Sans';
    }
`

export const StyledDate = styled.div`
    h5{
        margin-bottom: 16px;
    }
    .ant-select-selector{
        height: 60px !important;
    }
    .ant-form-item-control-input{
        margin-bottom: 20px;
    }
    
`

export const SaveBtn = styled(Button)`
width: ${props => props.width >= 768 ? "250px" : "100%"}
`

export const UpdateDelete = styled.div`
    display: flex;
    gap: 16px;
    width: 100%;
    margin-bottom: 24px;
    button{
        /* flex-grow: 1; */
        flex-grow: ${props => props.width >= 768 ? null : 1};
        width: ${props => props.width >= 768 ? "250px" : "100%"};
    }

`


//card related css.....................
export const CardContainer = styled.div`
padding: 8px 40px;
display: flex;
flex-direction: ${props => props.width >= 768 ? 'row' : 'column'} ;
gap: ${props => props.width >= 768 ? "32px" : "8px"};
align-items: ${props => props.width >= 768 ? 'center' : 'flex-start'};
`
export const CardInner = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    gap: ${props => props.width >= 768 ? '30px' : '8px'};
    flex-direction: ${props => props.width >= 768 ? 'row' : 'column'} ;
    align-items: ${props => props.width >= 768 ? 'center' : 'flex-start'};
`