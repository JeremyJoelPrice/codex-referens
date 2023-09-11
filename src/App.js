import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterGallery from "./pages/CharacterGallery";

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/character-gallery" element={<CharacterGallery />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
