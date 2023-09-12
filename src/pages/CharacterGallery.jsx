import Wallpaper from "../components/Wallpaper.jsx";
import { uid } from "../utils/utils.js";
import CharacterThumbnail from "../components/CharacterThumbnail.jsx";
import { pcProfiles } from "../datasource/index.js";
import { images } from "../datasource/index.js";
import styled from "styled-components";
const { wallpaper } = images;

// display a row of PC thumbnails with names
// when clicked, each thumbnail creates a character page to pop up

const CharacterGallery = () => {
	return (
		<Wallpaper src={wallpaper}>
			<PortraitContainer>
				{Object.values(pcProfiles).map(({ name, img }) => {
					return (
						<CharacterThumbnail
							key={uid()}
							name={name}
							portrait={img}></CharacterThumbnail>
					);
				})}
			</PortraitContainer>
		</Wallpaper>
	);
};

export default CharacterGallery;

const PortraitContainer = styled.div`
	display: flex;
	flex-wrap: wrap;

	width: 80%;
	margin: 50px auto;
	justify-content: space-between;

	row-gap: 50px;
`;
