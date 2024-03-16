import styled from "styled-components";
import CharacterPortrait from "../components/CharacterPortrait";
import { Subheader } from "./StyledArticleComponents";

const CharacterThumbnail = ({ name, portrait }) => {
	return (
		<ThumbnailWrapper>
			<CharacterPortrait
				portrait={portrait}
				portraitSize={"250px"}></CharacterPortrait>
			<StyledNameTag>{name}</StyledNameTag>
		</ThumbnailWrapper>
	);
};

export default CharacterThumbnail;

const StyledNameTag = styled(Subheader)`
	align-self: center;
	text-shadow: 3px 4px 4px rgba(0, 0, 0, 1);
`;

const ThumbnailWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
`;
