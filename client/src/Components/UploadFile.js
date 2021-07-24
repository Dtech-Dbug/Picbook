import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadFile = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const imageTypes = ["image/png", "image/jpeg"];

	const handleFileUpload = (e) => {
		const uploadedFile = e.target.files[0];

		if (uploadedFile && imageTypes.includes(uploadedFile.type)) {
			console.log(uploadedFile);
			//set error to null, if the file type is roght
			setError(null);

			//store the seleted file in a local state
			setFile(uploadedFile);
		} else {
			console.log("No");
			setError("Invalid File Format. Please use (png/jpeg)");
		}
	};
	return (
		<form>
			<input type="file" onChange={handleFileUpload}></input>

			<>
				{error && <div className="error">{error}</div>}
				{file && <div>{file.name}</div>}
				{file && (
					<div>
						<ProgressBar />
					</div>
				)}
			</>
		</form>
	);
};

export default UploadFile;
