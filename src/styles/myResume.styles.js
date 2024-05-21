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
`

export const StyledContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    font-family: "DM Sans";
    font-style: normal;
   h4{
       color: #384D6D;
       font-size: 20px;
       font-weight: 500;
       line-height: 25px;
       letter-spacing: 0.1px;
   }
   h5{
       color: #1A2C47;
       font-size: 20px;
       font-weight: 700;
       line-height: 25px; 
       letter-spacing: 0.1px;
   }
   p{
       font-size: 16px;
       font-weight: 400;
       color: #61738E;
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