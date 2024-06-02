import styled from 'styled-components'
import profilePic from '../../assets/images/profilePic.jpg'
import { ArrowUpOutlined, QuestionCircleOutlined, SettingOutlined } from '@ant-design/icons'
import { MdLogout } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import useLoadingStore from '../../store/loadingStore';
const ProfilePopover = () => {
    const { logout } = useAuthStore();
    const user = useAuthStore((state) => state.user);
    const loading = useLoadingStore((state) => state.loading);
    const setLoading = useLoadingStore((state) => state.setLoading);

    const logoutHandler=()=>{
        try{
            setLoading(true);
            logout();
        }catch(err){

        }finally{
            setLoading(false);
        }
    }
    return (
        <StyledProfileOption>
            <ProfileLink to={"/profile"} >
                <img src={user?.profileImage || profilePic} alt="" width={37} height={37} />
                <div className='box1'>
                    <div>
                        <p className='name'>{user?.name}</p>
                        <p className='email'>{user?.email}</p>
                    </div>
                    <i><ArrowUpOutlined rotate={45} style={{ color: "white", fontSize: "1.5rem" }} /></i>
                </div>

            </ProfileLink>
            <Option>
                <Link to={'/settings'}>
                    <i><SettingOutlined /></i>
                    <p>Settings & Privacy</p>
                </Link>
                {/* <Link>
                    <i><QuestionCircleOutlined /></i>
                    <p>Help</p>
                </Link> */}
                <Link onClick={logoutHandler} className='logout'>
                    <i><MdLogout /></i>
                    <p>Logout</p>
                </Link>
            </Option>
        </StyledProfileOption>
    )
}

const StyledProfileOption = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
font-family: "DM Sans";

`

const ProfileLink = styled(Link)`
    display: flex;
    gap: 8px;
    padding: 16px;
    align-items: center;
    justify-content: flex-start;
    border-radius: 13px;
    width: 100%;
    cursor: pointer;
    &:hover{
        background: var(--Color-Brand-Brand-Blue, #0859DE);
        .name,.email{
            color: white;
        }
    }
    .box1{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-grow: 1;
    }
    .name{
        color: #1A2C47;
        font-size: 20px;
        font-weight: 700;
        line-height: 25px; 
        letter-spacing: 0.1px;
    }
    .email{
        color: #61738E;
        font-size: 14px;
        font-weight: 400;
        line-height: 19.6px; 
        letter-spacing: 0.1px;
    }
`
const Option = styled.div`
    flex-grow: 1;
    display: flex;
    width: 100%;
    flex-direction: column;
    a{
        display: flex;
        padding: 8px 24px;
        gap: 16px;
        justify-content: flex-start;
        align-items: center;
        color: #384D6D;
        font-size: 20px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0.1px;
        &:hover{
            color:#0859DE;
            cursor: pointer;
        }
    }
    .logout:hover{
        color:#E22D4C;
    }
`
export default ProfilePopover;