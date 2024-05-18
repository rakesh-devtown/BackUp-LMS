import styled from "styled-components";

const MainTopic = ({ topicName }) => {
    return (
        <StyledHeader>
            <p>{topicName}</p>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
padding: 24px 25px;
justify-content: center;
align-items: center;
align-self: stretch;
background:  var(--secondaryColor);
color: var(--Color-White-100, #FFF);
p{
    font-family: "DM Sans";
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 200px;
}
`

export default MainTopic;