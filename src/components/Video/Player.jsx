import React, { useContext } from "react";
import ReactPlayer from "react-player";
import {
	IoMdPause,
	IoMdPlay,
	IoMdVolumeHigh,
	IoMdVolumeOff,
} from "react-icons/io"
import { TbRewindBackward10, TbRewindForward10 } from "react-icons/tb";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import SettingsController from "./SettingsController";
import QualityControl from "./QualityControl";
import { VideoPlayerContext } from "../../context/VideoPlayerContext";
import useBatchStore from "../../store/batchStore";


const Player = ({
	url = "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
	videoId,
}) => {
	const {postVideoProgress} = useBatchStore();
	const currentVideo = useBatchStore((state) => state.currentVideo);
	const {
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
	} = useContext(VideoPlayerContext);

	const { playing, muted, volume, played } = videoState;

	const handleVideoStudentProgress = async() => {
		try{
				if(currentVideo?.sectionProgress?.length == 0)
				{
					await postVideoProgress(videoId);
				}
				else if(currentVideo?.sectionProgress?.length > 0 && currentVideo?.sectionProgress[0]?.isCompleted == false)
				{
					await postVideoProgress(videoId);
				}
		}catch(err)
		{
			console.log(err)
		}
	};

	return (
		<div
			className="player-wrapper relative w-full md:w-[70%]"
			onMouseMove={mouseMoveHandler}
			ref={playerWrapperRef}
			onKeyDown={handleKeyPress}
			tabIndex={0}
		>
			<div className=" bg-black" onClick={playPauseHandler}>
				<ReactPlayer
					ref={videoPlayerRef}
					className="player"
					url={url}
					width="100%"
					height="100%"				
					playing={playing}
					light={currentVideo?.videoThumbnail ? <img src={currentVideo?.videoThumbnail} style={{height:"100%", width:"100%"}} alt="thumbnail" /> : false}
					playbackRate={playbackRate.options[playbackRate.selected]}
					volume={volume}
					muted={muted}
					onStart={handleVideoStudentProgress}
					onProgress={progressHandler}
					onBuffer={bufferStartHandler}
					onBufferEnd={bufferEndHandler}
					onReady={handlePlayerReady}
				/>
			</div>
			<div
				className="absolute top-[50%] w-full flex justify-center text-white "
				onClick={playPauseHandler}
			>
				{/* loading play pause */}
				{videoState.buffer ? (
					<svg
						aria-hidden="true"
						className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
				) : !playing ? (
					<IoMdPlay size={40} />
				) : (
					""
				)}
			</div>
			<div
				className="absolute bottom-0 text-white w-[100%] invisible"
				ref={controlRef}
			>
				<div className="mx-4">
					<input
						type="range"
						min="0"
						max="100"
						value={played * 100}
						className="w-full h-1 cursor-pointer"
						onChange={seekHandler}
					/>
					<div className="flex justify-between">
						<div className="flex text-xl items-center">
							<div className="cursor-pointer" onClick={playPauseHandler}>
								{playing ? <IoMdPause /> : <IoMdPlay />}
							</div>

							{/* <div className="ml-2 cursor-pointer">
							<IoMdSkipForward />
						</div> */}
							<div className="ml-2 cursor-pointer" onClick={rewindHandler}>
								<TbRewindBackward10 />
							</div>
							<div className="ml-2 cursor-pointer" onClick={handleFastForward}>
								<TbRewindForward10 />
							</div>
							<div className="ml-2 flex items-center group">
								{muted ? (
									<IoMdVolumeOff
										className="text-xl cursor-pointer"
										onClick={muteHandler}
									/>
								) : (
									<IoMdVolumeHigh
										className="text-xl cursor-pointer"
										onClick={muteHandler}
									/>
								)}
								<input
									type="range"
									min="0"
									max="100"
									value={videoState?.volume * 100}
									className="h-1 w-16 sm:w-0 opacity-100 sm:opacity-0 sm:invisible group-hover:visible group-hover:volumeSeek group-hover:w-20 group-hover:opacity-100 cursor-pointer sm:transition-all sm:duration-300"
									onChange={volumeSeekUpHandler}
								/>
							</div>

							<div className="ml-2 text-xs truncate sm:text-sm font-bold">
								<span>
									{formatCurrentTime} / {formatDuration}
								</span>
							</div>
						</div>
						<div className="flex text-xl items-center">
							<SettingsController
								data={playbackRate}
								handleQualityChange={handlePlaybackSpeedChange}
							/>
							<QualityControl videoPlayerRef={videoPlayerRef} url={url} />

							<div
								className="ml-2 text-3xl cursor-pointer "
								onClick={handleFullscreen}
							>
								{!videoState.isFullscreen ? (
									<MdFullscreen className="viewFullscreen" />
								) : (
									<MdFullscreenExit className="exitFullscreen" />
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Player;
