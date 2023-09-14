import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterGallery from "./pages/CharacterGallery";
import Navbar from "./components/Navbar";
import LoreWiki from "./pages/LoreWiki";
import Home from "./article-components/Home";
import Echomora from "./article-components/Echomora";

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
					<Route path="/lore" element={<LoreWiki article={Home} />} />
					<Route
						path="/lore/echomora"
						element={<LoreWiki article={Echomora} />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
