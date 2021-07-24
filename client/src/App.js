import { useState } from "react/cjs/react.development";
import ImageGrid from "./Components/ImageGrid";
import Modal from "./Components/Modal";
import UploadFile from "./Components/UploadFile";

function App() {
	const [selectedImage, setSelectedImage] = useState(null);
	return (
		<div className="App">
			<h1>PicBook</h1>
			<UploadFile />
			<ImageGrid
				selectedImage={selectedImage}
				setSelectedImage={setSelectedImage}
			/>
			<Modal selectedImage={selectedImage} />
		</div>
	);
}

export default App;
