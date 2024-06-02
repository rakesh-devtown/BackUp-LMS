import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Layout, theme } from 'antd';
import styled from 'styled-components';
import { ArrowUpOutlined } from '@ant-design/icons';
import VideoBox from '../../components/Video/VideoBox';
import Description from '../../components/DescriptionSection/Description';
import ClassNotes from '../../components/ClassNotesSection/ClassNotes';
import ModuleTree from '../../components/ModuleTree';
import useWindowSize from '../../hooks/useWindowSize';
import ModuleSiderOpener from '../../components/Cards/video/ModuleSiderOpener';

const Video = () => {

    const { width } = useWindowSize();
    const [collapsed, setCollapsed] = useState(true);

    const { Content, Sider } = Layout;
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleCollapsed = () => setCollapsed(!collapsed)

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

    const rightSidebarWidth = (width > 1200 || width < 992) ? "300px" : "250px"

    useEffect(() => {
        console.log(width);
        if (width >= 992) {
            setCollapsed(false)
        }
    }, [width])

    return (
        <>
            <Helmet>
                <title>Video</title>
                <meta name="settings" content="settings" />
                <link rel="canonical" href="https://www.learn.devtown.in/setting" />
            </Helmet>
            <StyledLayout width={width} >
                <Content>

                    {
                        width < 992 && <ModuleSiderOpener handleCollapsed={handleCollapsed} />
                    }
                    <MainContainer width={width} rightSidebarWidth={rightSidebarWidth} collapsed={collapsed}>
                        <VideoBox />

                        <StyledButtonBox>
                            <a className='btn' href="#description" >Description</a>
                            <a className='btn' href="#classNotes">Notes</a>

                            {/* showing these buttons only in tablet and laptop view */}
                            {width >= 768 &&
                                <>
                                    <Link className='link'>View Code <ArrowUpOutlined rotate={45} /> </Link>
                                    <Link className='link'>Code Rubiks</Link>
                                </>
                            }
                        </StyledButtonBox>
                        <Description />
                        <ClassNotes />

                    </MainContainer>
                </Content>


                {/* right sidebar to show modules */}
                <Sider
                    collapsed={collapsed}
                    collapsedWidth="0"
                    width={rightSidebarWidth}
                    style={mySiderStyle} >
                    {(width < 992 && !collapsed) &&
                        <div className='shaded-background' onClick={handleCollapsed}></div>
                    }
                    <ModuleTree />
                </Sider>
            </StyledLayout>

        </>
    )
}

const MainContainer = styled.section`
    /* adjusting middle bar size according to sidebar */
    margin-right: ${props => (props.collapsed || (props.width < 992)) ? null : `calc(${props.rightSidebarWidth} + 14px)`};
    padding: 12px 12px 36px 12px;
    border-radius: 25px;
    border: 1px solid #E9EAF0;
    .ant-tabs-tab{
        color: #1D2026;
        font-family: Inter;
        font-weight: 500;
        line-height:22px;
        padding: 20px !important;
    }
`

const StyledLayout = styled(Layout)`
    .ant-layout-sider-children{
        height: unset;
        padding: ${props => props.width >= 992 ? "0 0 100px 0" : "0"};
 }

 .shaded-background{
    position: fixed;
    top: 0;
    right: 0;
    z-index: 50;
    height: 100vh;
    width: 100%;
    background: rgb(0,0,0,0.6) ;
 }
`

const StyledButtonBox = styled.div`
    display: flex;
    .btn,.link{
        width: 150px;
        padding: 20px;
        color: #1D2026;
        text-align: center;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px; /* 137.5% */
        border: none;
        cursor: pointer;
    }
    .btn:focus, .btn:hover {
        border-bottom: 3px solid #0859DE;   
    }
    .link{
        display: flex;
        justify-content: center;
    }
    .link:last-child{
        background: linear-gradient(90deg, #0A5BE0 0%, #FF4E72 104.46%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
}
`

export default Video;