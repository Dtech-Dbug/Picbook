import React, { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

//creating a custom hook
//resposnible to handle file uploads in firebase

const useStorage = (file) => {
	const [error, setError] = useState(null);
	const [progress, setProgress] = useState(0);
	const [url, setUrl] = useState(null);

	useEffect(() => {
		//referance to a file inside firebase storage
		let storageRef = projectStorage.ref(file.name);

		//use put method to upload the file in the refrenace location
		//async function, whhc will trigger sevral events
		//we can take care of those events

		//.on is a event listener which takes a cpuple of args
		// arg1 : the event
		//...rest args : callbacks

		storageRef.put(file).on(
			"state_changed",
			(snap) => {
				let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
				setProgress(percentage);
			},
			(err) => {
				setError(err);
			},
			async () => {
				const url = await storageRef.getDownloadURL();
				setUrl(url);
			}
		);
	}, [file]);

	return { progress, url, error };
};

export default useStorage;
