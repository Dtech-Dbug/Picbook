import React from "react";

const Modal = ({ selectedImage }) => {
	return (
		<div className="backdrop">
			<img src={selectedImage} alt="Modal" />
		</div>
	);
};

export default Modal;
