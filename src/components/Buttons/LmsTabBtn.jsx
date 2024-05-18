import lock_icon from "../../assets/images/lock_icon.svg"
import styled from "styled-components";

const TabBtn = ({ text, lock }) => {
    return (
        <StyledTabBtn>
            <p>{text}</p>
            {lock && <img src={lock_icon} alt="icon" />}
        </StyledTabBtn>
    )
}

export default TabBtn;

const StyledTabBtn = styled.i`
    display: flex;
    align-items: center;
    gap: 8.154px;
    padding: 10px 45px;
    border-radius: 34.246px;
    p{
        padding-right: 2px ;
        font-size: 16.308px;
        font-weight: 700;
        line-height: 26.542px;
        letter-spacing: -0.326px;
        background: linear-gradient(90deg, #0A5BE0 0%, #4E9EFF 104.46%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    &:hover{
        background: linear-gradient(90deg, #0A5BE0 0%, #FF4E72 104.46%);
        p{
            color: white;
            -webkit-text-fill-color: unset;
        }
    }
`
