import { useState } from "react";
import { Divider, Modal } from "antd";
import styled from "styled-components";
import profileLogo from "../../../assets/images/profile_logo.svg"
import { StyledSettingsContent } from "../../../styles/settings.styles";
import useWindowSize from "../../../hooks/useWindowSize";
import CloseModal from "../../../components/Buttons/CloseModal";

const DataPrivacy = () => {

    const [confirmDeleteModal, setConfirmDeleteModal] = useState(false)

    const toggleModal = () => setConfirmDeleteModal(!confirmDeleteModal)
    const handleDelete = () => {
        //code to delete data
        console.log("delted");
        toggleModal()
    }

    const { width } = useWindowSize()

    return (
        <StyledSettingsContent>
            <div>
                <img src={profileLogo} alt="icon" />
                <h3>Data Privacy</h3>
            </div>
            <StyledScrollable>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum tempora sapiente debitis est, sed repellat distinctio excepturi perspiciatis vel maiores illum ipsum non esse ratione blanditiis eligendi quas autem eos harum quo, atque optio? Tempora culpa a fuga facilis labore, accusamus dolor magni ea quam odio beatae deleniti, iusto dicta assumenda asperiores amet quasi repellat illo. Perferendis cupiditate eum itaque excepturi ipsam, pariatur quidem laudantium, culpa, ullam neque repudiandae id nobis assumenda dignissimos? Suscipit earum similique explicabo perferendis beatae ab sed est nam cum animi, repudiandae totam quidem blanditiis optio in amet quisquam aliquid exercitationem illum asperiores quaerat natus non aspernatur! Dolor officiis dolores temporibus eaque velit beatae, eius, fugiat modi dignissimos sint iure voluptas dolore! Velit soluta veritatis nulla maiores fugiat ea voluptates nisi, perferendis necessitatibus quam ipsam iusto dolorem libero accusamus quos. Veritatis, doloremqe quas reiciendis laboriosam, at ducimus magnam voluptatibus minima tempore? Inventore tenetur molestiae reiciendis.</p>
                <br />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sunt excepturi vitae sit voluptates facere repellat illo consecteturs velit veritatis earum quasi ducimus eligendi architecto molestiae est voluptas similique maiores adipisci ipsa, nesciunt quo ad aliquid quidem! Id veritatis libero blanditiis tempora dolore ipsum architecto.</p>
                <Divider />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae aliquid dolor saepe est ad nemo laboriosam sed excepturi ea et possimus eligendi sint eum architecto a incidunt voluptatibus unde, repellendus accusantium ipsa reiciendis ipsum voluptate ut veniam? Illum magnam officia suscipit quo possimus exercitationem aut rem ducimus quis odio tempore perferendis facilis, molestias fugit! Cum a dignissimos quisquam aperiam suscipit placeat! Magnam consequatur omnis rem facere repudiandae asperiores quia similique cum et incidunt iure tempore maiores dolore nihil exercitationem dolorem nulla unde recusandae assumenda delectus voluptatum, iste aliquid? Nobis veniam praesentium voluptas, voluptatum ducimus eum minus deserunt quia nostrum qui!</p>
                <Divider />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae aliquid dolor saepe est ad nemo laboriosam sed excepturi ea et possimus eligendi sint eum architecto a incidunt voluptatibus unde, repellendus accusantium ipsa reiciendis ipsum voluptate ut veniam? Illum magnam officia suscipit quo possimus exercitationem aut rem ducimus quis odio tempore perferendis facilis, molestias fugit! Cum a dignissimos quisquam aperiam suscipit placeat! Magnam consequatur omnis rem facere repudiandae asperiores quia similique cum et incidunt iure tempore maiores dolore nihil exercitationem dolorem nulla unde recusandae assumenda delectus voluptatum, iste aliquid? Nobis veniam praesentium voluptas, voluptatum ducimus eum minus deserunt quia nostrum qui!</p>
                <Divider />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae aliquid dolor saepe est ad nemo laboriosam sed excepturi ea et possimus eligendi sint eum architecto a incidunt voluptatibus unde, repellendus accusantium ipsa reiciendis ipsum voluptate ut veniam? Illum magnam officia suscipit quo possimus exercitationem aut rem ducimus quis odio tempore perferendis facilis, molestias fugit! Cum a dignissimos quisquam aperiam suscipit placeat! Magnam consequatur omnis rem facere repudiandae asperiores quia similique cum et incidunt iure tempore maiores dolore nihil exercitationem dolorem nulla unde recusandae assumenda delectus voluptatum, iste aliquid? Nobis veniam praesentium voluptas, voluptatum ducimus eum minus deserunt quia nostrum qui!</p>
            </StyledScrollable>
            <DeleteDataDiv width={width}>
                {/* <p>Delete all my data</p> */}
                <DeleteDataBtn width={width} onClick={toggleModal}>Delete Data</DeleteDataBtn>

                {/* modal for confirm deletion */}
                <StyledModal open={confirmDeleteModal} onCancel={toggleModal} footer={null} centered={true} className="confirm-delete-modal" closeIcon={<CloseModal />} >
                    <StyledConfirmDelete>
                        <p>Are you sure you want delete all your data?</p>
                        <button onClick={handleDelete}>Delete</button>
                    </StyledConfirmDelete>
                </StyledModal>

            </DeleteDataDiv>
        </StyledSettingsContent>
    )
}

const StyledScrollable = styled.div`
max-height: 70vh;
overflow-y: auto;
scroll-behavior: smooth;
margin-top: 36px;
`

const DeleteDataBtn = styled.button`
    background-color: #FFD0D0;
    color: #E22D4C;
    padding: ${props => props.width >= 768 ? "14px 45px" : "14px 100px"};
    border-radius: 13px;
    font-size: 16px;
    border: none;
    cursor: pointer;
`
const DeleteDataDiv = styled.div`
    /* display: flex; */
    /* gap: 16px; */
    /* align-items: center; */
    font-size: 20px;
    font-weight: 500;
    color: #384D6D;
    margin-top: 16px;
    /* justify-content: ${props => props.width >= 768 ? "space-between" : "center"}; */
    /* flex-direction: ${props => props.width >= 768 ? "row" : "column"}; */
    padding: ${props => props.width >= 768 ? "16px 24px" : "16px 0"};
    text-align: ${props => props.width >= 768 ? "end" : "center"};
`

const StyledConfirmDelete = styled.div`
display: flex;
padding: 40px;
justify-content: center;
flex-direction: column;
font-style: normal;
line-height: normal;
gap: 50px;
p{
    color: #323232;
    text-align: center;
    font-family: "DM Sans";
    font-size: 24px;
    font-weight: 500;
}
button{
    padding: 16.391px 50px;
    border-radius: 7.31px;
    background: #DE0844;
    box-shadow: 0px 7.31px 14.62px 0px rgba(143, 149, 178, 0.15);
    border: none;
    
    color: var(--Color-White-100, #FFF);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
}
`

const StyledModal = styled(Modal)`
.ant-modal-close {
    top: -60px;
    left: 50%;
  }
`

export default DataPrivacy;