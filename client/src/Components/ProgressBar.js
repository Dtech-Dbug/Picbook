import React from "react";
import useStorage from "../Hooks/useStrorage";

const ProgressBar = ({ file, setFile }) => {
	const { url, progress } = useStorage(file);
	console.log(progress, url);
	return (
		<div>
			<p>progress</p>
		</div>
	);
};

export default ProgressBar;
