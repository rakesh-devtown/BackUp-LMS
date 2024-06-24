import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

const SettingsController = ({ type, data, handleQualityChange }) => {
	return (
		<div className="text-3xl cursor-pointer relative mx-2">
			<div className="inline-block text-left dropdown">
				<button className="w-full text-2xl font-medium transition duration-150 ease-in-out">
					{type === "quality" ? (
						<IoMdSettings />
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M13 2.05v2c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97zM5.67 19.74A9.994 9.994 0 0 0 11 22v-2a8.002 8.002 0 0 1-3.9-1.63zm1.43-14c1.12-.9 2.47-1.48 3.9-1.68v-2c-1.95.19-3.81.94-5.33 2.2zM5.69 7.1L4.26 5.67A9.885 9.885 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9M4.06 13h-2c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 4.06 13M10 16.5l6-4.5l-6-4.5z"
							></path>
						</svg>
					)}
				</button>

				<div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
					<div className="absolute z-20 right-0 bottom-10 w-40 sm:h-auto  mt-2 h-40  overflow-y-auto bg-black bg-opacity-60 border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
						{Object.keys(data.options).map((key, index) => (
							<div
								className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left items-center"
								key={index}
								onClick={() => handleQualityChange(key)}
							>
								<div>{key}</div>
								<div className="">{data.selected === key && <FaCheck />}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SettingsController;
