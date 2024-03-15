import Wallpaper from "../components/Wallpaper.jsx";
import { uid } from "../utils/utils.js";
import CharacterThumbnail from "../components/CharacterThumbnail.jsx";
import CharacterProfile from "../components/CharacterProfile.jsx";
import styled from "styled-components";
import config from "../config/config.js";
import wallpaper from "../datasource/img/wallpaper.jpg";

// display a row of PC thumbnails with names
// when clicked, each thumbnail creates a character page to pop up
const CharacterGallery = ({ displayCharacter, setDisplayCharacter }) => {
	return displayCharacter ? (
		<div onClick={() => setDisplayCharacter()}>
			<Wallpaper src={wallpaper}>
				<CharacterProfile
					displayCharacter={displayCharacter}
					setDisplayCharacter={setDisplayCharacter}
				/>
			</Wallpaper>
		</div>
	) : (
		<Wallpaper src={wallpaper}>
			<ThumbnailsContainer>
				{config["player characters"].map((pc) => {
					return (
						<ClickableContainer
							key={uid()}
							onClick={(event) => {
								event.stopPropagation();
								setDisplayCharacter(pc);
							}}>
							<CharacterThumbnail
								name={pc.name}
								portrait={pc.img}
							/>
						</ClickableContainer>
					);
				})}
			</ThumbnailsContainer>
		</Wallpaper>
	);
};

export default CharacterGallery;

const ThumbnailsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;

	width: 80%;
	margin: 50px auto;
	padding-bottom: 50px;
	justify-content: space-between;

	row-gap: 50px;
`;

const ClickableContainer = styled.div`
	&:hover {
		cursor: pointer;
	}
`;
