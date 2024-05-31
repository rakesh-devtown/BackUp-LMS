import { Button, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useNavigate } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import { menuItems } from "../../layout/HomeLayout";
import "./mobileSider.css";
import styled from "styled-components";


const MobileSider = ({ isMobileSideBarOpen, setMobileSideBarOpen }) => {

    const navigate = useNavigate();

    //making delay on click for effects
    const handleClick = () => {
        setTimeout(() => {
            setMobileSideBarOpen(false)
        }, 300);
    }


    const antdSiderMobileView = {
        // background: colorBgContainer,
        height: "100vh",
        zIndex: 100,
        borderRadius: "0 10px 10px 0",
    }

    return (
        <div
            className={
                isMobileSideBarOpen
                    ? "sidebar-open sidebar-default"
                    : "sidebar sidebar-default"
            }
            onClick={() => handleClick()}
        >

            <Sider
                theme="light"
                // trigger={null}
                style={antdSiderMobileView}
                width={200}
            >
                {/* <div style={buttonContainer} > */}

                <StyledCloseAntdBtn
                    icon={<CloseOutlined />}
                    onClick={() => {
                        setMobileSideBarOpen(false);
                    }}
                    type="text"
                />
                {/* </div> */}


                <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={menuItems}
                    style={{
                        height: "100%",
                        borderRadius: "20px",
                        margin: "18px 0",
                        overflow: "auto",
                        paddingBottom: "100px",
                    }}
                    selectable
                    onSelect={(item, key) => {
                        console.log(item.key);
                        navigate("/" + item.key);
                    }}
                />

            </Sider>
        </div>
    )
}

const StyledCloseAntdBtn = styled(Button)`
        float: right;
    margin: 5px 5px 0 0;
    color: #1E6DE8;
`

export default MobileSider