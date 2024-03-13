import Wallpaper from "../components/Wallpaper.jsx";
import { uid } from "../utils/utils.js";
import CharacterThumbnail from "../components/CharacterThumbnail.jsx";
import CharacterProfile from "../components/CharacterProfile.jsx";
import { images } from "../datasource/index.js";
import styled from "styled-components";
import { useState } from "react";
import config from "../config/config.js";
const { wallpaper } = images;

// display a row of PC thumbnails with names
// when clicked, each thumbnail creates a character page to pop up
const CharacterGallery = () => {
	const [displayCharacter, setDisplayCharacter] = useState("");

	const profile = config["player characters"].find(
		({ name }) => name === displayCharacter
	);
	const name = profile?.name ?? undefined;
	const img = profile?.img ?? undefined;
	const description = profile?.description ?? undefined;
	const backstory = profile?.backstory ?? undefined;

	return displayCharacter ? (
		<Wallpaper src={wallpaper}>
			<CharacterProfile
				name={name}
				portrait={img}
				description={description}
				backstory={backstory}
				setDisplayCharacter={setDisplayCharacter}
			/>
		</Wallpaper>
	) : (
		<Wallpaper src={wallpaper}>
			<ThumbnailsContainer>
				{config["player characters"].map(({ name, img }) => {
					return (
						<ClickableContainer
							key={uid()}
							onClick={() => setDisplayCharacter(name)}>
							<CharacterThumbnail name={name} portrait={img} />
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
