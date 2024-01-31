import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../Auth/RouteProtection/auth";
import {
  ArrowDownOutlined,
  ArrowLeftOutlined,
  BackwardOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import img from "../../assets/images/ICON.svg";
import {
  BackButtonOuterContainer,
  MagicLinkBoldText,
  MagicLinkContainer,
  MagicLinkDescription,
  MagicLinkForm,
  MagicLinkFormInnerContainer,
  MagicLinkLogo,
  MagicLinkLogoHeading,
  MagicLinkLogoOuterContainer,
  MagicLinkSubmitButtonContainer,
} from "../../styles/magicLink.styles";
import { StyledButton } from "../../styles/SessionLimit.styles";
function GenerateMagicLink() {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
  });
  //submit the form data
  function handleOnChange(e) {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value) {
      auth.generateMagicLink(value);
    }
  };
  return (
    <>
      <MagicLinkContainer>
        <BackButtonOuterContainer>
          <StyledButton
            onClick={() => {
              navigate("/auth");
            }}
          >
            <ArrowLeftOutlined />
            Back
          </StyledButton>
          <MagicLinkLogoOuterContainer>
            <MagicLinkLogo src={img} alt="Workflow" />
            <MagicLinkLogoHeading>Login With Magic Link</MagicLinkLogoHeading>
          </MagicLinkLogoOuterContainer>
          <MagicLinkDescription>
            Simplify your login process: Receive a magical link via email, click
            to log in, and easily access your account securely—{" "}
            <MagicLinkBoldText>no passwords required</MagicLinkBoldText>
          </MagicLinkDescription>
          {/* form for submission */}
          <MagicLinkForm onSubmit={handleSubmit}>
            <MagicLinkFormInnerContainer>
              <div>
                <Input
                  onChange={handleOnChange}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email address"
                />
              </div>
            </MagicLinkFormInnerContainer>
            <MagicLinkSubmitButtonContainer>
              <Button style={{width:"100%"}} type="primary" onClick={handleSubmit}>
                Send Magic Link
              </Button>
            </MagicLinkSubmitButtonContainer>
          </MagicLinkForm>
        </BackButtonOuterContainer>
      </MagicLinkContainer>
    </>
  );
}

export default GenerateMagicLink;
