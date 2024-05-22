import { ArrowUpOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Modal, Progress, Space } from "antd";
import { useState } from "react";
import styled from "styled-components";
import CertificateDownloadModal from "../Modals/CertificationModal";
import useWindowSize from "../../hooks/useWindowSize";

const CourseCompletionCard = ({ data, completed }) => {

    const [showCertificate, setShowCertificate] = useState(false)
    const { width } = useWindowSize();

    const { title, description, icon, bgColor } = data
    const handleModal = () => setShowCertificate(!showCertificate)

    return (
        <>
            {/* open certificate modal for edit,download, and share */}
            <Modal
                open={showCertificate}
                onCancel={handleModal}
                footer={false}
                closeIcon={<Button shape="circle"><CloseOutlined /></Button>}
                centered={true}
                width={width > 1200 ? 1097 : (width >= 768 ? 700 : 397)}
            >
                <CertificateDownloadModal />
            </Modal>

            <StyledCard bgColor={bgColor}>
                <MainCard width={width}>
                    <Space size={29}>
                        <img src={icon} alt="icon" />
                        <h4>{title}</h4>
                    </Space>
                    <hr />
                    <div>
                        <p>{description}</p>
                    </div>
                </MainCard>

                {/* hidden element shown on hovered*/}
                <div className="hidden-card">

                    {completed ?
                        <>
                            <div className="completed" onClick={handleModal}>
                                <p>Course Completion</p>
                                <i><ArrowUpOutlined rotate={45} /></i>
                            </div>
                            <div className="completed" onClick={handleModal}>
                                <p>Project Completion</p>
                                <i><ArrowUpOutlined rotate={45} /></i>
                            </div>
                            <div className="completed">
                                <p>Training Completion</p>
                                <i><ArrowUpOutlined rotate={45} /></i>
                            </div>
                        </> :
                        <>
                            <div className="ongoing">
                                <p>Course Contents</p>
                                <p className="percentage-completion">15% Completed</p>
                            </div>
                            <Progress percent={15} showInfo={false} trailColor="white" strokeColor={bgColor} />
                        </>
                    }
                </div>

            </StyledCard>
        </>
    )
}

const StyledCard = styled.div`
  
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: "DM Sans";
    text-transform: capitalize;
    border-radius: 6.137px;
    box-shadow: 0px 0px 8.49px 0px rgba(151, 151, 151, 0.37);
    border-bottom-width: 7px;
    border-bottom-style: solid;
    border-color:${props => props.bgColor ? props.bgColor : "#E7B11F"} ;
    max-width: 800px;
    //styling for the hidden div
    .hidden-card{
        display: none;
        padding: 14px 0px;
        flex-direction: column;

        font-family: Inter;
        font-size: 14.4px;
        font-style: normal;
        font-weight: 600;
        line-height: 25.6px;
        letter-spacing: -0.144px;

        background-color: ${props => props.bgColor ? props.bgColor : "#E7B11F"};
        color: white;
        .completed,.ongoing{
            font-size: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 6px 16px;
            transition: all 0.3s;
        }
        .completed{
            cursor: pointer;
            /* &:hover{
                background-color: #808080a1;
            } */
        }
        i{
            display: grid;
            place-items: center;
            background-color: #ffffff55;
            border-radius: 50%;
            height: 30px;
            width: 30px;
        }
    }
    &:hover .hidden-card{
        display: flex;
    }
    .percentage-completion{
        font-size: 14px;
        font-weight: 400;
    }
    .ant-progress-bg{
        opacity: 50%;
    }
    .ant-progress{
        padding: 0 20px;
    }
`

const MainCard = styled.div`
    display: flex;
    justify-content: end;
    flex-direction: column;
    overflow-y: auto ;
    padding: ${props => props.width >= 768 ? " 0 16px 20px 16px" : "52px 16px 20px 16px"};
    height: ${props => props.width >= 768 ? "208px" : null};
.ant-space{
    overflow-y: auto;
}
    h4{
        max-height: 115px;
        color: #171717;
        font-size:22.912px;;
        font-weight: 700;
    }
    hr{
        height: 0.511px;
        color: #5C8DBC;
        margin: 11.46px;
    }
    p{
        color: var(--Neutral-Colors-800, #19213D);
        font-size: 14.729px;
        font-weight: 400;
        width: 300px;
    }
`


export default CourseCompletionCard;