import { useEffect, useState } from 'react';
import { Layout, Menu, Row } from 'antd';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { LuBellRing } from "react-icons/lu";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { MdOutlineSecurity, MdLockOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import SignInAndSecurity from './contents/SignInSecurity';
import DataPrivacy from './contents/DataPrivacy';
import Notification from './contents/Notification';
import useWindowSize from '../../hooks/useWindowSize';


const Settings = () => {

    const { width } = useWindowSize();
    const [activeKey, setActiveKey] = useState("");
    const navigate = useNavigate();
    const items = [
        {
            key: "1",
            label: "Settings",
            type: "group",
        },
        {
            key: "2",
            label: "Sign in & Security",
            icon: <MdLockOutline size={20} />
        },
        // {
        //     key: "3",
        //     label: "Data Privacy",
        //     icon: <MdOutlineSecurity size={20}/>
        // },
        // {
        //     key: '4',
        //     label: "Notification",
        //     icon: <LuBellRing size={20}/>
        // },
    ]

    const myStyle = {
        width: width < 768 ?  "100%" : "300px",
        borderRadius: "18px",
        background: "#FFF",
        padding: "24px",
        color: "#384D6D",
        marginRight: width >= 768 ? "16px" : 0,
        fontSize: "20px",
        height: width < 768 ? "388px" : null,
        display: (activeKey && width < 768) ? "none" : "",
    }

    useEffect(() => {
        if (width >= 768) setActiveKey("2")
        else setActiveKey("")
    }, [width])

    return (
        <>
            <Helmet>
                <title>Settings</title>
                <meta name="settings" content="settings" />
                <link rel="canonical" href="https://www.learn.devtown.in/setting" />
            </Helmet>
            {/* <Layout> */}
            <MainContainer width={width}>

                {(width >= 768 || activeKey === "") &&
                    <GoBack onClick={() => navigate('/')} > <ArrowLeftOutlined /> Back To DashBoard</GoBack>}
                {(width < 768 && activeKey) && <GoBack onClick={() => setActiveKey("")}> <ArrowLeftOutlined /> Go Back</GoBack>}

                <Row>
                    <Menu items={items} selectedKeys={[activeKey]} onClick={(e) => setActiveKey(e.key)} style={myStyle} />

                    {/* rendering settings content based on key selected */}
                    {activeKey === "2" && <SignInAndSecurity />}
                    {activeKey === "3" && <DataPrivacy />}
                    {activeKey === "4" && <Notification />}
                </Row>

            </MainContainer>
            {/* </Layout> */}
        </>
    )
}

export const MainContainer = styled.div`
padding: ${props => props.width >= 768 ? "24px 24px 40px 24px" : "24px 12px 21px 12px"};
    /* padding: 124px 24px 40px 24px; */
<<<<<<< HEAD
    background: #DEEAFF;
=======
    /* background: #DEEAFF; */
>>>>>>> master
    min-height:  100%;
    font-family: DM Sans;
    .ant-row{
        flex-wrap: unset;
    }
    .ant-menu-item-group-title{
        color: #384D6D;
        font-family: "DM Sans";
        font-size: 36px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 16px;
    }
    .ant-menu-item{
        font-family: "DM Sans";
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.1px;
        background-color: #E6EBF3;
    }
    .ant-menu-item-active{
        color: #1677ff !important;
    }
    .ant-menu-item-selected{
        border-radius: 0 4px 4px 0;
        border-left: 1px solid blue;
        display: flex;
        align-items: center;
    }
`

const GoBack = styled.div`
    color:  #0859DE;
    font-size: 20px;
    margin-bottom: 24px;
    cursor: pointer;
    &:hover{
        font-weight: 600;
    }
`
//giving custom styling to tabs taken from ant design


export default Settings