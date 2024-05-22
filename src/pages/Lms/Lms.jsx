import { Layout, Tabs } from "antd";
import Courses from "./Course";
import TabBtn from "../../components/Buttons/LmsTabBtn";
import styled from "styled-components";


function Lms() {


    const items = [
        {
            key: "1",
            label: <TabBtn text={"Live"} lock={true} />,
            disabled: true,

        },
        {
            key: "2",
            label: <TabBtn text={"Self Paced"} lock={false} />,
            children: <Courses />

        }
    ]
    return (
        <Layout>
            <StyledTabs items={items} defaultActiveKey="2" centered={true} size={"large"} indicatorSize={0} />

        </Layout>
    );
}

const StyledTabs = styled(Tabs)`   
.ant-tabs-tab-active i {
    /* border-radius: 34.246px; */
        background: linear-gradient(90deg, #0A5BE0 0%, #FF4E72 104.46%);
        p{
            color: white;
            -webkit-text-fill-color: unset;
        }
}
`
export default Lms;
