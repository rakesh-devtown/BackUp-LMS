import { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import styled from "styled-components";
import MainModalBox from "../../../components/Modals/ModalsSecurityPage";
import useWindowSize from "../../../hooks/useWindowSize";


const Field = ({ title, value, change, view, keyNumber, openModal }) => {

    const [showModal, setShowModal] = useState(false)
    const { width } = useWindowSize();

    const handleCancel = () => {
        setShowModal(false)
    }

    return (
        <>
            {/* opening modals on click */}
            {(showModal && keyNumber) && <MainModalBox handleCancel={handleCancel} keyNumber={keyNumber} />}

            <StyledField width={width}>
                <FieldName>{title}</FieldName>
                <FlexBox width={width}>
                    {value && <p className="value text-sm">{value}</p>}
                    {change &&
                        <div className="text-red change" onClick={() => setShowModal(true)} ><i ><HiOutlinePencil /></i> <p>Change</p></div>
                    }

                    {view && <p className="text-red text-sm" onClick={() => setShowModal(true)}>View</p>}

                </FlexBox>
            </StyledField>
        </>
    )
}

const FieldName = styled.p`
    font-size: 20px;
    font-weight: 500;
    line-height: 25px; /* 125% */
    letter-spacing: 0.1px;
`

const StyledField = styled.div`
    font-family: "DM Sans";
    display: flex;
    justify-content: space-between;
    gap: 16px;
    
    //making responsive for mobile device
    margin:${props => props.width >= 768 ? "0 0 24px 0" : "24px 0"};
    &:first-child{
        margin-top: 0;
    }
    &:last-child{
        margin: ${props => props.width >= 768 ? 0 : "24px 0 0 0"};
    }

    .text-sm{
        font-size: 16px;
    }
    .text-red{
        color: #E22D4C;
        font-weight: 500;
        cursor: pointer;
    }
    .change{
        display: flex;
        gap: 4px;
        &::before{
            content: "";
            border-right:1px solid #C7CBCF;
            position: relative;
            right: 2px;
        }
    }
    
    /* changing flex-direction for first 2 div for responsive */
    &:first-child,&:nth-child(2), &:nth-child(3){
        flex-direction: ${(props) => props.width >= 768 ? 'row' : 'column'};
    }
`

const FlexBox = styled.div`
    display: flex;
    gap: 10px;
    font-size: 16px;
    justify-content: space-between;
    .save{
        color: green;
        cursor: pointer;
    }
    .cancel{
        color: red;
        cursor: pointer;
    }

`

export default Field;