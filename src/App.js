import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterGallery from "./pages/CharacterGallery";
import Navbar from "./components/Navbar";
import LoreWiki from "./pages/LoreWiki";
import Home from "./article-components/Home";
import Echomora from "./article-components/Echomora";
import Gods from "./article-components/Gods";
import Archaedra from "./article-components/Archaedra";
import Srd from "./pages/Srd";

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
					<Route
						path="/lore/gods"
						element={<LoreWiki article={Gods} />}
					/>
					<Route
						path="/lore/archaedra"
						element={<LoreWiki article={Archaedra} />}
					/>
					<Route path="/srd" element={<Srd />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
