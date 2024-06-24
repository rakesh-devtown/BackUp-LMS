import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

const QualityControl = ({ videoPlayerRef, url }) => {
	const [videoQuality, setVideoQuality] = useState({
		options: {
			Auto: url,
		},
		selected: "Auto",
	});
	const handleQualityChange = (selected) => {
		const hlsPlayer = videoPlayerRef.current.getInternalPlayer("hls");
		const availableLevels = hlsPlayer.levels;
		for (let levelIndex in availableLevels) {
			if (availableLevels[levelIndex].width.toString() === selected) {
				hlsPlayer.currentLevel = levelIndex;
				console.log(hlsPlayer.currentLevel, levelIndex );
				console.log(typeof hlsPlayer.currentLevel, typeof levelIndex );
			}
		}
		setVideoQuality({ ...videoQuality, selected: selected.toString() });
		console.log(videoQuality, selected);
		console.log("dfgdrggda", videoQuality.options[videoQuality.selected]);
	};

	const getQuality = async () => {
		try {
			const hlsPlayer = videoPlayerRef.current.getInternalPlayer("hls");
			const qualityOptions = {};
			const availableLevels = hlsPlayer.levels;
			console.log(availableLevels);
			for (let levelIndex in availableLevels) {
				qualityOptions[availableLevels[levelIndex].width] = levelIndex;
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
					}}
				>
					<IoMdSettings />
				</button>

				<div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
					<div className="absolute right-0 bottom-10 w-40 sm:h-auto  mt-2 h-40  overflow-y-auto bg-black bg-opacity-60 border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
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
