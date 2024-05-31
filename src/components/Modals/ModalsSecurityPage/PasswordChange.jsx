import { useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { StyledInput, StyledLabel, StyledParagraph, StyledTitle, StyledModalContent } from '../../../styles/settings.styles';
import useWindowSize from '../../../hooks/useWindowSize';
import OTPverify from '../../Forms/OTPverification';
import ResetPassword from '../../Forms/ResetPassword';
import SuccessBox from '../../Forms/Success';



const PasswordChange = ({ handleCancel }) => {

    const [email, setEmail] = useState("")
    const [step, setStep] = useState(1)
    const { width } = useWindowSize()

    const handleNext = () => setStep(step + 1)
    const handleBack = () => setStep(step - 1)
    const handleStep1 = () => {
        if (email !== "") handleNext()
    }
    const successMessage = "Password successfully updated!"
    const btnText = "Back to Profile"

    return (
        <StyledModalContent width={width}>
            {step === 1 &&
                <>
                    <StyledTitle>Reset <br /> Password</StyledTitle>
                    <StyledParagraph>We are here to assist you</StyledParagraph>
                    <div>
                        <StyledLabel htmlFor="email">Email address</StyledLabel>
                        <StyledInput placeholder='mailaddress@example.com' name='email' value={email} id='email' prefix={<MailOutlined style={{ color: "rgba(0,0,0,.45)" }} />} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <Button type='primary' size='large' onClick={handleStep1} > Continue </Button>
                </>
            }
            {
                step === 2 && <OTPverify handleBack={handleBack} handleNext={handleNext} />
            }
            {
                step === 3 && <ResetPassword handleBack={handleBack} handleNext={handleNext} />
            }
            {
                step === 4 && <SuccessBox handleNext={handleCancel} successMessage={successMessage} btnText={btnText} />
            }
        </StyledModalContent>
    )
}

export default PasswordChange;
