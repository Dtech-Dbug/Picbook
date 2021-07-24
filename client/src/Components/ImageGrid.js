import React from "react";
import useFirestore from "../Hooks/useFIrestore";

const ImageGrid = ({ selectedImage, setSelectedImage }) => {
	const { docs } = useFirestore("Images");

	console.log("Docs --->", docs);
	return (
		<div className="img-grid">
			{docs &&
				docs.map((item) => {
					return (
						<div
							className="img-wrap"
							key={item.id}
							onClick={() => setSelectedImage(item.url)}
						>
							<img src={item.url} alt="Oops" />
						</div>
					);
				})}
		</div>
	);
};

export default ImageGrid;
