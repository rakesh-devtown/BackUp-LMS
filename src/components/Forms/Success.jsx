import { CheckCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { StyledButton } from "../../styles/LoginPage.styles";

const Container = styled.div`
 display: flex;
  justify-content: start;  
  height: 100%;
  position: relative;
  align-items: center;

`;

const Card = styled.div`
max-width: 500px;
  background-color: white;
  border-radius: 10px;
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  
`;

const SuccessBox = ({ handleNext, successMessage, btnText }) => {
    return (

        <>
            <Card>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "30px",
                    marginBottom: "30px",
                }}>
                    <CheckCircleOutlined style={{
                        color: "#52C41A",
                        fontSize: "100px",
                    }} />
                    <h1 style={{
                        fontSize: "24px",
                        fontWeight: "500",
                        textAlign: "center",
                        width: '286px'
                    }}>
                        {successMessage}
                    </h1>
                </div>
                <StyledButton
                    onClick={() => {
                        handleNext()
                    }}
                    style={{

                    }}
                >
                    {btnText}
                </StyledButton>
            </Card>
        </>
    )
}

export default SuccessBox;