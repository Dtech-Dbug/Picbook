import React, { useEffect } from "react";
import useStorage from "../Hooks/useStrorage";

const ProgressBar = ({ file, setFile }) => {
	const { url, progress } = useStorage(file);

	//console.log(progress, url);
	//how to remove the progress bar once fileis uploaded?
	// set file to null again, bcz progress bar fires when there is file
	//we can setFile t null once we get the Image URL

	useEffect(() => {
		if (url) setFile(null);
	}, [url, setFile]);

	return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
