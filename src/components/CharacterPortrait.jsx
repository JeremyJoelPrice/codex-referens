import styled from "styled-components";
import { images } from "../datasource/index.js";
const { frame } = images;

const CharacterPortrait = ({ portraitSize, portrait }) => {
	return (
		<StyledCharacterPortrait size={portraitSize}>
			<Frame src={frame} />
			<Image src={portrait} />
		</StyledCharacterPortrait>
	);
};

export default CharacterPortrait;

const StyledCharacterPortrait = styled.div`
	float: left;
	position: relative;
	width: ${(props) => props.size};
	height: ${(props) => props.size};
	overflow: hidden;
	margin: 0 10px;

	@media (max-width: 750px) {
		max-width: 100%;
		max-height: 100%;
	}
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
