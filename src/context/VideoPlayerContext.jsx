
import React, { createContext, useState, useRef } from "react";
import { formatTime } from "../utils/formatDate";
export const VideoPlayerContext = createContext();

let count = 0
const VideoPlayerProvider = ({ children }) => {
	const videoPlayerRef = useRef(null);
	const controlRef = useRef(null);
	const playerWrapperRef = useRef(null);

	const [videoState, setVideoState] = useState({
		playing: false,
		muted: false,
		volume: 0.5,
		playbackRate: 1.0,
		played: 0,
		seeking: false,
		buffer: false,
		isFullscreen: false,
		isReady: false,
	});

	const [playbackRate, setPlaybackRate] = useState({
		options: {
			"0.25X": 0.25,
			"0.5X": 0.5,
			"0.75X": 0.75,
			"1X": 1,
			"1.25X": 1.25,
			"1.5X": 1.5,
			"1.75X": 1.75,
			"2X": 2,
		},
		selected: "1X",
	});

	const seekHandler = (e) => {
		const value = e.target.value;
		setVideoState({ ...videoState, played: parseFloat(value / 100) });
		videoPlayerRef.current.seekTo(parseFloat(value / 100));
	};

	const volumeSeekUpHandler = (e) => {
		const value = e.target.value;
		const newVolume = parseFloat(value) / 100;

		setVideoState({
			...videoState,
			volume: newVolume,
			muted: newVolume === 0 ? true : false,
		});
	};

	const muteHandler = () => {
		//Mutes the video player
		setVideoState({ ...videoState, muted: !videoState.muted });
	};

	const mouseMoveHandler = () => {
		controlRef.current.style.visibility = "visible";
		count = 0;
	};

	const bufferStartHandler = () => {
		console.log("Buffering.......");
		setVideoState({ ...videoState, buffer: true });
	};

	const bufferEndHandler = () => {
		console.log("buffering stopped ,,,,,,play");
		setVideoState({ ...videoState, buffer: false });
	};
	const handleFullscreen = () => {
		if (!videoState.isFullscreen) {
			playerWrapperRef.current.requestFullscreen();
		} else {
			document.exitFullscreen();
		}
		setVideoState({ ...videoState, isFullscreen: !videoState.isFullscreen });
	};
	const handleKeyPress = (event) => {
		if (event.key === "f") {
			handleFullscreen();
		} else if (event.key === "ArrowRight") {
			handleFastForward();
		} else if (event.key === "ArrowLeft") {
			rewindHandler();
		} else if (event.key === " ") {
			playPauseHandler();
		}
	};

    const playPauseHandler = () => {
		//plays and pause the video (toggling)
		setVideoState({ ...videoState, playing: !videoState.playing });
	};

	const rewindHandler = () => {
		//Rewinds the video player reducing 5
		videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 10);
	};

	const handleFastForward = () => {
		//FastForwards the video player by adding 10
		videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10);
	};

	const progressHandler = (state) => {
		if (count > 3) {
			controlRef.current.style.visibility = "hidden";
		} else if (controlRef.current.style.visibility === "visible") {
			count += 1;
		}
		if (!videoState.seeking) {
			setVideoState({ ...videoState, ...state });
		}

		// const progressPercentage = state.played * 100;
		// if(progressPercentage)
	}

	const currentTime = videoPlayerRef.current
		? videoPlayerRef.current.getCurrentTime()
		: "00:00";
	const duration = videoPlayerRef.current
		? videoPlayerRef.current.getDuration()
		: "00:00";

	const formatCurrentTime = formatTime(currentTime);
	const formatDuration = formatTime(duration);

	const handlePlaybackSpeedChange = (selected) => {
		setPlaybackRate({ ...playbackRate, selected: selected });
		setVideoState({ ...videoState, buffer: false });
	};

	const handlePlayerReady = () => {
		setTimeout(() => {
			controlRef.current.style.visibility = "visible";
		}, 500);
	};

	const contextValues = {
		videoPlayerRef,
		controlRef,
		playerWrapperRef,
		videoState,
		setVideoState,
		playbackRate,
		setPlaybackRate,
		handleKeyPress,
		seekHandler,
		bufferEndHandler,
		bufferStartHandler,
		mouseMoveHandler,
		volumeSeekUpHandler,
		muteHandler,
        progressHandler,
        playPauseHandler,
        rewindHandler,
        handleFastForward,
        handleFullscreen,
		formatCurrentTime,
		formatDuration,
		handlePlaybackSpeedChange,
		handlePlayerReady
	};

	return (
		<VideoPlayerContext.Provider value={contextValues}>
			{children}
		</VideoPlayerContext.Provider>
	);
};

export default VideoPlayerProvider;
