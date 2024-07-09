import { PhoneOutlined } from "@ant-design/icons";
import { Button, Input, Typography } from "antd";
import {
  StyledInput,
  StyledLabel,
  StyledParagraph,
  StyledTitle,
  StyledModalContent,
} from "../../../styles/settings.styles";
import useWindowSize from "../../../hooks/useWindowSize";
import useAuthStore from "../../../store/authStore";
import useResumeStore from "../../../store/resumeStore";
import { useState } from "react";
import useMeStore from "../../../store/meStore";

const PhoneChange = ({ handleCancel }) => {
  const { changePhone } = useMeStore();
  const [myPhone, setMyPhone] = useState("");
  const user = useAuthStore((state) => state.user);
  const { width } = useWindowSize();

  const handleSave = async () => {
    const response = await changePhone(user.email, myPhone);
    console.log(response);
    if (response) {
      window.location.reload();
    }
  };

  return (
    <StyledModalContent width={width}>
      <StyledTitle level={2}>
        Change <br /> Phone Number
      </StyledTitle>
      <StyledParagraph>We are here to assist you</StyledParagraph>
      <div>
        <StyledLabel htmlFor="current_phone">Phone Number</StyledLabel>
        <StyledInput
          placeholder="9630128046"
          name="current_phone"
          id="current_phone"
          value={myPhone}
          maxLength={10}
          onChange={(e) => setMyPhone(e.target.value)}
          prefix={
            <PhoneOutlined rotate={90} style={{ color: "rgba(0,0,0,.45)" }} />
          }
        />
      </div>
      <Button type="primary" size="large" onClick={handleSave}>
        {" "}
        Save{" "}
      </Button>
    </StyledModalContent>
  );
};

export default PhoneChange;
