import styled from "styled-components";
import { images } from "../datasource/index.js";
const { frame } = images;

const CharacterThumbnail = ({ name, portrait }) => {
	return (
		<ThumbnailWrapper>
			<StyledCharacterThumbnail>
				<Frame src={frame} />
				<Image src={portrait} />
			</StyledCharacterThumbnail>
			<StyledNameTag>{name}</StyledNameTag>
		</ThumbnailWrapper>
	);
};

export default CharacterThumbnail;

const imageSize = "250px";

const StyledCharacterThumbnail = styled.div`
	position: relative;
	min-width: ${imageSize};
	max-width: ${imageSize};
	min-height: ${imageSize};
	overflow: hidden;
`;

const Frame = styled.img`
	position: absolute;
	z-index: 1;
	width: 100%;
	height: 100%;
`;

const Image = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

const StyledNameTag = styled.p`
	font-family: Georgia, "Times New Roman", Times, serif;
	justify-content: center;
	align-self: center;
	line-height: 1em;
	font-size: 25pt;
	color: rgb(213, 194, 103);
`;

const ThumbnailWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
`;
