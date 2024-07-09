import { useState } from "react";
import { Button, notification } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
  StyledInput,
  StyledLabel,
  StyledParagraph,
  StyledTitle,
  StyledModalContent,
} from "../../styles/settings.styles";
import useWindowSize from "../../hooks/useWindowSize";
import useResumeStore from "../../store/resumeStore";
import useAuthStore from "../../store/authStore";
import useBatchStore from "../../store/batchStore";
import useMeStore from "../../store/meStore";

const CertificateNameChange = ({ handleCancel }) => {
  const [myName, setMyName] = useState("");
  const { width } = useWindowSize();
  const {nameChangeRequestForCertificate} = useBatchStore();
  const { changeName } = useMeStore();
  const user = useAuthStore((state) => state.user);

  const handleSave = async () => {
    if(String(myName).trim().length < 3){
      notification.error({
        message: "Name should be atleast 3 characters long",
      });
    }
    const name = myName.trim();
    await nameChangeRequestForCertificate(name);
    handleCancel();
  };

  return (
    <StyledModalContent width={width}>
      <StyledTitle level={2}>
        Change <br />
        Certificate Name
      </StyledTitle>
      <StyledParagraph>
        Note: <span>Please enter your name carefully, same name will be printed on your certificates and can't be edit in future.</span>
      </StyledParagraph>
      <form onSubmit={handleSave}>
        <StyledLabel htmlFor="myName">Name</StyledLabel>
        <StyledInput
          placeholder="You Name"
          name="myName"
          id="myName"
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
          value={myName}
          onChange={(e) => setMyName(e.target.value)}
          required
        />
        <Button type="primary" size="large" style={{ width: "100%", marginTop: "20px" }} onClick={handleSave}>
          {" "}
          Save{" "}
        </Button>
      </form>
    </StyledModalContent>
  );
};

export default CertificateNameChange;
