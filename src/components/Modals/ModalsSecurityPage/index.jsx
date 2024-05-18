import { useState } from 'react';
import { Modal } from 'antd';
import EmailChange from './EmailChange';
import PhoneChange from './PhoneChange';
import PasswordChange from './PasswordChange';
import DeviceLogged from './DeviceLogged';
import CloseModal from '../../Buttons/CloseModal';
import useWindowSize from '../../../hooks/useWindowSize';
import styled from 'styled-components';
import NameChange from './NameChnage';


const MainModalBox = ({ handleCancel, keyNumber }) => {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const { width } = useWindowSize();

    // handling async operation on submit
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            handleCancel();
            setConfirmLoading(false);
            console.log("Success")
        }, 2000);
    };

    return (
        <StyledModal
            propWidth={width}
            // maskClosable={false}
            open={true}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            centered={true}
            okText={"Continue"}
            cancelButtonProps={{ visible: false }}
            width={width >= 1200 ? "1016px" : (width >= 768 ? "600px" : "450px")}
            closeIcon={<CloseModal />}
            footer={null}
        >
            {/* rendering modals content based on option clicked */}

            {keyNumber === 1 && <NameChange handleCancel={handleCancel} />}
            {keyNumber === 2 && <EmailChange handleCancel={handleCancel} />}
            {keyNumber === 3 && <PhoneChange handleCancel={handleCancel} />}
            {keyNumber === 4 && <PasswordChange handleCancel={handleCancel} />}
            {keyNumber === 5 && <DeviceLogged handleCancel={handleCancel} />}
        </StyledModal >
    );
};

const StyledModal = styled(Modal)`
    
    .ant-modal-content{
        padding: ${props => props.propWidth >= 768 ? "40px" : "20px"};
    }
  .ant-modal-close {
    top: -60px;
    left: 50%;
  }
`
export default MainModalBox;