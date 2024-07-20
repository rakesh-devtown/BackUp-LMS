import ReactPlayer from 'react-player'
import styled from 'styled-components'
import useWindowSize from '../../hooks/useWindowSize'
import VideoPlayerProvider, { VideoPlayerContext } from '../../context/VideoPlayerContext'
import Player from './Player'

const VideoPlayer = ({url,id}) => {

    const { width } = useWindowSize()
    return (
        <>          
                <VideoWrapper width={width}>
                    <VideoPlayerProvider><Player url={url} videoId={id}/></VideoPlayerProvider>
                </VideoWrapper>
        </>
    )
}

const VideoWrapper = styled.div`
margin: 12px 0;
display: flex;
justify-content: center;
.react_player{
    border-radius: 16px;
    overflow: hidden;
width: ${props => props.width >= 1400 ? "936px" : (props.width >= 768 ? "640px" : "402px")};
    height: ${props => props.width >= 1400 ? "544px" : (props.width >= 768 ? "360px" : "242px")};
}
`

export default VideoPlayer;