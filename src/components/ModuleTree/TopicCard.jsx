import { CheckOutlined, LockOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { FaPlay } from "react-icons/fa";
import styled from "styled-components";

const TopicCard = ({ topic, lock, time, checked }) => {

    return (
        <StyledTopicCard>
            <p className="topic">{topic}</p>
            <Space >
                {lock ?
                    <i> <LockOutlined /></i> :
                    (
                        checked ?
                            <i><CheckOutlined style={{ color: '#1E6DE8' }} /></i> :
                            <i><FaPlay /></i>

                    )
                }
                <p className="time">{time}</p>
            </Space>
        </StyledTopicCard>
    )
}

const StyledTopicCard = styled.div`
    display: flex;
    justify-content: space-between;
    .topic{
        color: #1D2026;
        font-family: "DM Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; 
    }
.time{
    font-family: Inter;
    color: #A1A5B3;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; 
    letter-spacing: -0.14px;
}
i{
    color: #A1A5B3;
}
`

export default TopicCard;
