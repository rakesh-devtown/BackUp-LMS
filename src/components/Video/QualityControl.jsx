import React, { useContext, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { VideoPlayerContext } from "../../context/VideoPlayerContext";

const QualityControl = ({ videoPlayerRef, url }) => {
	const { videoQuality, setVideoQuality } = useContext(VideoPlayerContext);

	const qualityOptions = useRef(null);

	const handleQualityChange = (selected) => {
		console.log({ selected });
		const hlsPlayer = videoPlayerRef.current.getInternalPlayer("hls");
		const availableLevels = hlsPlayer.levels;
		console.log({ availableLevels });
		for (let levelIndex in availableLevels) {
			if (availableLevels[levelIndex].width.toString() + "p" === selected) {
				hlsPlayer.currentLevel = levelIndex;
				console.log(hlsPlayer.currentLevel, levelIndex);
				console.log(typeof hlsPlayer.currentLevel, typeof levelIndex);
			}
		}
		setVideoQuality({ ...videoQuality, selected: selected.toString() });
		console.log(videoQuality, selected);
	};

	const getQuality = async () => {
		try {
			const hlsPlayer = videoPlayerRef.current.getInternalPlayer("hls");
			const qualityOptions = {};
			const availableLevels = hlsPlayer.levels;
			for (let levelIndex in availableLevels) {
				qualityOptions[availableLevels[levelIndex].width + "p"] = levelIndex;
			}

			setVideoQuality({
				...videoQuality,
				options: {
					...qualityOptions,
					Auto: url,
				},
			});
		} catch (error) {
			console.error("Error parsing M3U8 playlist:", error);
		}
	};

	return (
		<div className="text-3xl cursor-pointer relative mx-2">
			<div className="inline-block text-left dropdown">
				<button
					className="w-full text-2xl font-medium transition duration-150 ease-in-out"
					onClick={() => {
						getQuality();

						const computedStyle = window.getComputedStyle(
							qualityOptions.current,
						);

						console.log(computedStyle);
						console.log(computedStyle.visibility);
						console.log(computedStyle.opacity);
						if (
							computedStyle.visibility === "visible" &&
							computedStyle.opacity === "1"
						) {
							qualityOptions.current.style.visibility = "hidden";
							qualityOptions.current.style.visibility = "0";
						} else {
							qualityOptions.current.style.visibility = "visible";
							qualityOptions.current.style.transform = "translate(0) scale(1)";
							qualityOptions.current.style.visibility = "1";

						}
						
					}}
				>
					<IoMdSettings />
				</button>

				<div
					className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95"
					ref={qualityOptions}
				>
					<div className="absolute -right-10 md:-left-[140px] bottom-14 w-40 md:w-52  lg:h-auto lg:max-h-60 mt-2 h-40  overflow-y-auto bg-black rounded-lg p-2">
						{Object.keys(videoQuality.options).map((key, index) => (
							<div
								className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left items-center"
								key={index}
								onClick={() => handleQualityChange(key)}
							>
								<div>{key}</div>
								<div className="">
									{videoQuality.selected === key && <FaCheck />}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default QualityControl;
