import ReactPlayer from 'react-player'
import styled from 'styled-components'
import useWindowSize from '../../hooks/useWindowSize'

const VideoPlayer = () => {

    const { width } = useWindowSize()
    const url = "https://youtu.be/TLfLOqt7S54"
    return (
        <>
            <VideoWrapper width={width}>
                <div className='react_player'>
                    <ReactPlayer url={url} controls width={"100%"} height={"100%"} />
                </div>
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