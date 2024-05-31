import VideoHeaderCard from "./VideoHeaderCard";

const VideoCard = () => {
    return (
        <>
            <VideoHeaderCard />
            <VideoPlr></VideoPlr>
            <VideoSubSection />
        </>
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

export default VideoCard;