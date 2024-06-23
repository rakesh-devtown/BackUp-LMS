import Player from "../components/Video/Player";
import VideoPlayerProvider from "../context/VideoPlayerContext";

const Test=()=>{
    return (
        <VideoPlayerProvider><Player/></VideoPlayerProvider>
    )
}
export default Test;