import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterGallery from "./pages/CharacterGallery";
import Navbar from "./components/Navbar";
import LoreWiki from "./pages/LoreWiki";

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<CharacterGallery />} />
					<Route
						path="/character-gallery"
						element={<CharacterGallery />}
					/>
					<Route path="/lore" element={<LoreWiki />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
