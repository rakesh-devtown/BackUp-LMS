import styled from "styled-components";
import VideoHeaderCard from "../Cards/video/VideoHeaderCard";
import VideoPlayer from "./VideoPlayer";
import { Col, Row } from "antd";

const VideoBox = () => {
    return (
        <Row>
            <Col span={24} order={2} lg={{ order: 1 }} >
                <VideoHeaderCard />
            </Col>

            <Col span={24} order={1} lg={{ order: 2 }}>
                <VideoPlayer />
            </Col>
        </Row>
    )
}

const VideoPlr = styled.div`
    display: flex;
height: 544px;
padding: 8.387px;
justify-content: flex-end;
align-items: flex-end;
gap: 8.387px;
align-self: stretch;
border-radius: 16px;
/* background: url(<path-to-image>) lightgray 50% / contain no-repeat, radial-gradient(50% 50% at 50% 50%, #2C456F 0%, #000 100%); */
`

export default VideoBox;