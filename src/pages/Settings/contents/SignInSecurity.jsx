import { useState } from "react";
import styled from "styled-components";
import Field from "./Field";
import profileLogo from "../../../assets/images/profile_logo.svg"
import { StyledSettingsContent } from "../../../styles/settings.styles";
import MainModalBox from "../../../components/Modals/ModalsSecurityPage";
import useAuthStore from "../../../store/authStore";


const SignInAndSecurity = () => {

    // const [changeEmailModal, setChangeEmailModal] = useState(false)
    // const [changePhoneModal, setChangePhoneModal] = useState(false)
    // const [changePsdModal, setChangePsdModal] = useState(false)
    // const [deviceModal, setDeviceModal] = useState(false)

    const user = useAuthStore((state) => state.user);

    //mock data
    const profileDetails = {
        name: "Rakesh Magar",
        email: "thapa@gmail.com",
        phone: "7002175147",
    }

    return (
        <StyledSettingsContent fontSize="20px">
            <div>
                <img src={profileLogo} alt="icon" />
                <h3>Sign in & Security</h3>
            </div>
            <Fields>
                <Field keyNumber={1} title={"My Name"} value={user?.name} change={true} />
                <Field keyNumber={2} title={"Email Address"} value={user?.email} />
                <Field keyNumber={3} title={"Phone Number"} value={user?.mobileNumber} change={true} />
                <Field keyNumber={4} title={"Change Password"} change={true} />
                <Field keyNumber={5} title={"Device Logged"} view={true} />
            </Fields>


            {/* manually wrting code for each fields..................... */}

            {/* <StyledField>
                <FieldName>Email Address</FieldName>
                <FlexBox>
                    <p className="value text-sm">{profileDetails.email}</p>
                    <div className="text-red" onClick={() => setEdit(true)} ><i ><HiOutlinePencil /></i> <p>Change</p>
                    </div>
                </FlexBox>
            </StyledField>

            <StyledField>
                <FieldName>Phone Number</FieldName>
                <FlexBox>
                    <p className="value text-sm">{profileDetails.phone}</p>
                    <div className="text-red" onClick={() => setEdit(true)} ><i ><HiOutlinePencil /></i> <p>Change</p></div>
                </FlexBox>
            </StyledField>

            <StyledField>
                <FieldName>Chnage Password</FieldName>
                <FlexBox>
                    <div className="text-red" onClick={() => setEdit(true)} ><i ><HiOutlinePencil /></i> <p>Change</p></div>
                </FlexBox>
            </StyledField>

            <StyledField>
                <FieldName>Devices Logged</FieldName>
                <FlexBox>
                    <ModalEmailChange />
                    <p className="text-red text-sm">View</p>
                </FlexBox>
            </StyledField> */}

        </StyledSettingsContent>
    )
}

const Fields = styled.div`
    display: flex;
    /* gap: 24px; */
    flex-direction: column;
    margin: 24px 0;
`

export default SignInAndSecurity;