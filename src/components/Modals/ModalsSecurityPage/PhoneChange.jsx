import { PhoneOutlined } from '@ant-design/icons';
import { Button, Input, Typography } from 'antd';
import { StyledInput, StyledLabel, StyledParagraph, StyledTitle, StyledModalContent } from '../../../styles/settings.styles';
import useWindowSize from '../../../hooks/useWindowSize';

const PhoneChange = ({ handleCancel }) => {

    const { width } = useWindowSize();
    const handleSave = () => handleCancel();

    return (
        <StyledModalContent width={width}>
            <StyledTitle level={2}>Change <br /> Phone Number</StyledTitle>
            <StyledParagraph>We are here to assist you</StyledParagraph>
            <div>
                <StyledLabel htmlFor="current_phone">Phone Number</StyledLabel>
                <StyledInput placeholder='mailaddress@example.com' name='current_phone' id='current_phone' prefix={<PhoneOutlined rotate={90} style={{ color: "rgba(0,0,0,.45)" }} />} />
            </div>
            <Button type='primary' size='large' onClick={handleSave}> Save </Button>
        </StyledModalContent>
    )
}

export default PhoneChange;
