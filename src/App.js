import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterGallery from "./pages/CharacterGallery";
import Navbar from "./components/Navbar";
import Srd from "./pages/Srd";
import { useState } from "react";
import config from "./config/config";

const App = () => {
	const [displayCharacter, setDisplayCharacter] = useState();

	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<CharacterGallery />} />
					<Route
						path="/character-gallery"
						element={
							<CharacterGallery
								displayCharacter={displayCharacter}
								setDisplayCharacter={setDisplayCharacter}
							/>
						}
					/>
					<Route path="/srd" element={<Srd />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
