import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Layout, theme } from 'antd';
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowUpOutlined } from '@ant-design/icons';
import VideoBox from '../../components/Video/VideoBox';
import useWindowSize from '../../hooks/useWindowSize';
import RightSiderMenu from '../../components/RightSiderMenu/RightSiderMenu';
import FolderDetailsCard from '../../components/Cards/video/FolderDetailsCard';
import CousreProgress from '../../components/Cards/module/CousreProgress';

const Module = () => {

    const { width } = useWindowSize();
    const { Content, Sider } = Layout;
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const mySiderStyle = {
        background: colorBgContainer,
        zIndex: width < 992 ? 123456 : null,
        overflow: 'auto',
        height: width < 992 ? '100vh' : '85vh',
        position: 'fixed',
        right: width < 992 ? 0 : '20px',
        top: width < 992 ? 0 : '136px',
        scrollbarWidth: "none",
    }

    const rightSidebarWidth = (width >= 992) ? "60px" : "0"


    return (
        <Layout >
            <Helmet>
                <title>Module</title>
                <meta name="settings" content="settings" />
                <link rel="canonical" href="https://www.learn.devtown.in/setting" />
            </Helmet>
            <Content>

                {/* {
                        width < 992 && <ModuleSiderOpener handleCollapsed={handleCollapsed} />
                    } */}
                <MainContainer width={width} rightSidebarWidth={rightSidebarWidth} >
                    <ModuleTop>
                        <Link><Button type='link' className='back-btn' > <ArrowLeftOutlined /> Back </Button></Link>
                        <h1>Full Stack Web Development Industrial Training program</h1>
                        <FolderDetailsCard />
                        <CousreProgress />
                    </ModuleTop>
                    <ModuleBody>
                        <h5>Modules will over in this course:</h5>
                    </ModuleBody>
                </MainContainer>
            </Content>


            {/* right sidebar to show modules */}
            {
                width >= 992 &&
                <Sider
                    collapsedWidth="0"
                    width={rightSidebarWidth}
                    style={mySiderStyle} >
                    <RightSiderMenu />

                </Sider>
            }
        </Layout>
    )
}

const MainContainer = styled.section`
    /* adjusting middle bar size according to sidebar */
    margin-right: ${props => (props.width < 992) ? null : `calc(${props.rightSidebarWidth} + 20px)`};
    padding: 24px;
    border-radius: 25px;
    border: 1px solid #E9EAF0;
`

const ModuleTop = styled.div`
display: flex;
gap: 16px;
flex-direction: column;
align-items: flex-start;
margin-bottom: 32px;
h1{
    color: #1D2026;
    font-family: "DM Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.back-btn{
    padding: 0;
    .anticon{
        margin: 0;
    }
}
`

const ModuleBody = styled.div`
    h5{
        padding: 16px;
        color: #252525;
        font-family: "DM Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        border-radius: 8px;
        background: #E6EBF3;
    }
    `


export default Module;