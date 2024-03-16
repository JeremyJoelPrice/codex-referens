import styled from "styled-components";
import CharacterPortrait from "./CharacterPortrait";
import { BodyText, Subheader } from "./StyledArticleComponents";
import cancel from "../datasource/img/cancel_error_coin_cross_delete_icon_210983.png";

const CharacterProfile = ({ displayCharacter, setDisplayCharacter }) => {
	return (
		<StyledCharacterProfile onClick={(event) => event.stopPropagation()}>
			<CharacterPortrait
				portraitSize={"300px"}
				portrait={displayCharacter.img}
			/>
			<CancelButton src={cancel} onClick={() => setDisplayCharacter()} />
			<Subheader>{displayCharacter.name}</Subheader>
			<BodyText>{displayCharacter.backstory}</BodyText>
		</StyledCharacterProfile>
	);
};

export default CharacterProfile;

const StyledCharacterProfile = styled.div`
	border: 1pt solid rgb(73, 70, 50);
	width: 70%;
	min-height: 300px;
	margin: 50px auto 100px;
	padding: 20px;

	background-color: rgba(20, 20, 20, 0.8);
	border-radius: 5px;
`;

const CancelButton = styled.img`
	width: 50px;
	float: right;
	&:hover {
		cursor: pointer;
	}
`;
