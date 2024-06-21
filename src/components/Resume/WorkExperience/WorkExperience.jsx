import { Fragment, useState } from "react"
import { PlusOutlined } from "@ant-design/icons"
import { Button, Space } from "antd"
import styled from "styled-components"
import { GoDotFill } from "react-icons/go"
import { DotStyle, StyledContainer, StyledHeader } from "../../../styles/myResume.styles"
import logo from "../../../assets/images/devtownLogoWithBg.png"
import WorkPosition from "./WorkPosition";
import ResumeModals from "../../Modals/ResumeModals"
import useResumeStore from "../../../store/resumeStore"


const WorkExperience = () => {

    const [showModal, setShowModal] = useState(false);
    const experience = useResumeStore(state => state.experience)
    const handleShowModal = () => setShowModal(!showModal)


    return (
        <StyledContainer>
            {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"experience"} />}
            <StyledHeader>
                <h4>Work Experience</h4>
                <Button type="text" size="large" icon={<PlusOutlined />} style={{ color: "#0859DE" }} onClick={handleShowModal} >Add</Button>
            </StyledHeader>
            <Space size={10} direction="vertical">
                {
                  experience &&  experience.map((item, index) => {
                        return (
                            <Fragment key={index}>
                            <Company>
                                <img src={logo} alt="logo" height={65} width={65} />
                                <Space size={2} direction="vertical">
                                    <h5>{item?.companyName}</h5>
                                    <Space size={6} align="start">
                                        <p>Full - Time</p>
                                        <DotStyle><GoDotFill /></DotStyle>
                                        <p>
                                            <span>{new Date(item?.startDate).toLocaleString('default', { month: 'short' }) + ' ' + new Date(item?.startDate).getFullYear()}</span>
                                            <span> - </span>
                                            <span>{item?.endDate ? new Date(item?.endDate).toLocaleString('default', { month: 'short' }) + ' ' + new Date(item?.endDate).getFullYear() : "Present"}</span>
                                        </p>
                                    </Space>
                                    <Space size={[6, 0]} align="start" wrap>
                                        {/* <p>Bengaluru, Karnataka, India </p>
                                        <DotStyle><GoDotFill /></DotStyle> */}
                                        <p>On - Site</p>
                                    </Space>
                                </Space>
                            </Company>
                            <WorkPosition />
                            <WorkPosition />
                            </Fragment>
                        )
                    })
                }

            </Space>


        </StyledContainer>
    )
}


const Company = styled.div`
padding: 16px;
display: flex;
gap: 13px;
justify-content: flex-start;
`

export default WorkExperience;