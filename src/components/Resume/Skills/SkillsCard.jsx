import { useState } from 'react';
import { CloseOutlined, PlusOutlined, EditOutlined } from "@ant-design/icons"
import { Button } from "antd"
import styled from "styled-components"
import useWindowSize from '../../../hooks/useWindowSize';
import { CardContainer, CardInner } from "../../../styles/myResume.styles";
import ResumeModals from '../../Modals/ResumeModals';

const SkillsCard = ({ skills }) => {

    const { width } = useWindowSize();
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(!showModal)

    return (
        <CardContainer width={width}>
            {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"skills"} value={["java", "css", "python"]} />}

            {
                skills?.length > 0 &&
                <CardInner width={width}>
                    <StyledSkill>
                        {skills.map((ele, ind) => (
                            <div key={ind}>
                                <p>{ele}</p>
                                {/* <CloseOutlined style={{ fontSize: "10px" }} onClick={() => handleRemove(ele)} /> */}
                            </div>
                        ))}
                    </StyledSkill>
                    <Button type="text" danger icon={<EditOutlined />} size="large" onClick={handleShowModal} className='edit-btn' >Edit</Button>
                </CardInner>

            }
        </CardContainer>
    )
}

const StyledSkill = styled.div`
display: flex;
gap: 10px;
padding: 10px 0 15px 0;
flex-wrap: wrap;
div{
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 2px 7px;
    border-radius: 10px;
    color: #384D6D;
    background-color: #f5deb37d;
}
`
const StyledButton = styled(Button)`
     width: fit-content;
     color: #0859DE;
     margin-top: 10px;
`


export default SkillsCard;