import { useState } from 'react';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { StyledInput, StyledLabel, StyledParagraph, StyledTitle, StyledModalContent } from '../../../styles/settings.styles';
import useWindowSize from '../../../hooks/useWindowSize';



const NameChange = ({ handleCancel }) => {

    const [myName, setMyName] = useState("")
    const { width } = useWindowSize()

    const handleSave = () => handleCancel();


    return (
        <StyledModalContent width={width}>
            <StyledTitle level={2}>Change <br />Your Name</StyledTitle>
            <StyledParagraph>Note: <span>Please enter your name carefully, same name will be printed in your certificates.</span></StyledParagraph>
            <form onSubmit={handleSave}>
                <StyledLabel htmlFor="myName">Name</StyledLabel>
                <StyledInput placeholder='You Name' name='myName' id='myName' prefix={<UserOutlined style={{ color: "rgba(0,0,0,.45)" }} />} value={myName} onChange={(e) => setMyName(e.target.value)} required />
                <Button type='primary' size='large' style={{ width: "100%", marginTop: "20px" }} > Save </Button>
            </form>

        </StyledModalContent>
    )
}

export default NameChange;

