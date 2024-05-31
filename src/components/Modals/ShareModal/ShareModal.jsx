import { Modal } from 'antd'
import SocialMediaCard from '../../Cards/SocialMediaCard';

const ShareModal = ({ showShareModal, handleClose, title }) => {

    // custom styling for header
    const myTitleStyle = {
        color: "#0859DE",
        fontFamily: "DM Sans",
        fontSize: "18px",
        fontHeight: "500",
        lineHeight: "29px", /* 161.111% */
        width: "320px"
    }

    return (
        <>
            <Modal title={<h4 style={myTitleStyle}>{title}</h4>} open={showShareModal} onCancel={handleClose} footer={null} mask={true} centered={true} >

                <SocialMediaCard />
            </Modal >
        </>
    )
}

export default ShareModal;