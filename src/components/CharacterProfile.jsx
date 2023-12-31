import styled from "styled-components";
import CharacterPortrait from "./CharacterPortrait";
import { BodyText, Subheader } from "./StyledArticleComponents";
import { images } from "../datasource";
const { cancel } = images.misc;

const CharacterProfile = ({
	name,
	portrait,
	description,
	backstory,
	setDisplayCharacter
}) => {
	return (
		<StyledCharacterProfile>
			<CharacterPortrait portraitSize={"300px"} portrait={portrait} />
			<CancelButton src={cancel} onClick={() => setDisplayCharacter()} />
			<Name>{name}</Name>
			<BodyText>{description}</BodyText>
			<FloatClear />
			<Subheader>Backstory</Subheader>
			<BodyText>{backstory}</BodyText>
		</StyledCharacterProfile>
	);
};

export default CharacterProfile;

const StyledCharacterProfile = styled.div`
	border: 1pt solid rgb(73, 70, 50);
	width: 70%;
	margin: 50px auto 100px;
	padding: 20px;

	background-color: rgba(20, 20, 20, 0.8);
	border-radius: 5px;
`;

const Name = styled.div`
	font-family: Georgia, "Times New Roman", Times, serif;
	margin-bottom: 10px;
	line-height: 1em;
	font-size: 34pt;
	color: rgb(213, 194, 103);
`;

const CancelButton = styled.img`
	width: 50px;
	float: right;
	&:hover {
		cursor: pointer;
	}
`;

const FloatClear = styled.div`
	clear: both;
`;
