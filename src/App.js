import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterGallery from "./pages/CharacterGallery";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<CharacterGallery />}
					/>
					<Route
						path="/character-gallery"
						element={<CharacterGallery />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
