import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

const MyComponent = () => {
  const playerRef = useRef(null);

  const handlePlayerReady = () => {
    // Once the player is loaded, get the HLS player instance
    const hlsPlayer = playerRef.current.getInternalPlayer('hls');
    
    // Access available quality levels
	const availableLevels = hlsPlayer.levels;
	for (let levelIndex in availableLevels) {
		console.log(availableLevels[levelIndex].width);
		if (availableLevels[levelIndex].width ===320) {
			hlsPlayer.currentLevel = levelIndex;
			
		  }
	}
    
  };
  const clicked=()=>{
	const hlsPlayer = playerRef.current.getInternalPlayer('hls');
    
    // Access available quality levels
	const availableLevels = hlsPlayer.levels;
	for (let levelIndex in availableLevels) {
		console.log(availableLevels[levelIndex].width);
		if (availableLevels[levelIndex].width ===720) {
			hlsPlayer.currentLevel = levelIndex;
			
		  }
	}

  }

  // Helper function to find the index of a desired quality level


  return (
    <>
	<ReactPlayer
      ref={playerRef}
      url = "https://content.jwplatform.com/manifests/yp34SRmf.m3u8"
      controls={true}
      playing={true}
      onReady={handlePlayerReady}
    />
	<button onClick={clicked}>click</button>
	</>
  );
}

export default MyComponent;
