import { MailOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { StyledInput, StyledLabel, StyledParagraph, StyledTitle, StyledModalContent } from '../../../styles/settings.styles';
import useWindowSize from '../../../hooks/useWindowSize';
import { useState } from 'react';



const EmailChange = () => {

    const [currentEmail, setCurrentEmail] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [step, setStep] = useState(1)

    const handleNext = () => setStep(step + 1)
    const handleBack = () => setStep(step - 1)
    const handleStep1 = () => {
        if ((currentEmail !== "") && (newEmail !== "")) handleNext()
    }
    const successMessage = "Email successfully updated!"
    const btnText = "Back to Profile"


    const { width } = useWindowSize()

    return (
        <StyledModalContent width={width}>
            <StyledTitle level={2}>Change <br /> Mail Address</StyledTitle>
            <StyledParagraph>Verify your mail address</StyledParagraph>
            <div>
                <StyledLabel htmlFor="current_email">Current email address</StyledLabel>
                <StyledInput placeholder='mailaddress@example.com' name='current_email' id='current_email' prefix={<MailOutlined style={{ color: "rgba(0,0,0,.45)" }} />} value={currentEmail} onChange={(e) => setCurrentEmail(e.target.value)} />
            </div>
            <div>
                <StyledLabel htmlFor="new_email">New email address</StyledLabel>
                <StyledInput placeholder='mailaddress@example.com' name='new_email' id='new_email' prefix={<MailOutlined style={{ color: "rgba(0,0,0,.45)" }} />} value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
            </div>

            <Button type='primary' size='large' > Continue </Button>
        </StyledModalContent>
    )
}

export default EmailChange;

