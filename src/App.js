import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterGallery from "./pages/CharacterGallery";
import Navbar from "./components/Navbar";
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
					<Route path="/srd" element={<Srd />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
