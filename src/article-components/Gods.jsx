import styled from "styled-components";
import {
	BodyText,
	Header,
	Subheader
} from "../components/StyledArticleComponents";
import { images } from "../datasource";
const { astrion, tymora, mystrelle } = images.misc;

const Gods = () => {
	return (
		<>
			<Header>The Gods</Header>
			<FloatingImage src={tymora} />
			<Subheader>Tymora, the Lady of Luck</Subheader>
			<BodyText>
				Tymora is a whimsical and capricious goddess who governs luck,
				fortune, and good fortune. She is often depicted as a playful
				figure, holding a pair of dice or a spinning wheel of fate.
				<br />
				Themes: Luck, Fortune, Playfulness, Freedom vs. Destiny.
			</BodyText>
			<ClearFloat />
			<br />
			<br />
			<FloatingImage src={astrion} />
			<Subheader>Astrion, the Arbiter of Law</Subheader>
			<BodyText>
				Astrion embodies the principles of order, justice, and law. They
				are often depicted as a stern and impartial figure, holding the
				scales of justice in one hand and a sword in the other.
				<br />
				Themes: Law vs. Chaos, Order, Justice, Discipline.
			</BodyText>
			<ClearFloat />
			<br />
			<br />
			<FloatingImage src={mystrelle} />
			<Subheader>Mystrelle, the Weaver of Destiny</Subheader>
			<BodyText>
				Mystrelle is a mysterious and enigmatic deity who controls the
				threads of fate and destiny. She is often associated with
				weaving and tapestries, symbolizing the intricate and
				interconnected nature of all things.
				<br />
				Themes: Fate, Destiny, Intrigue, Weaving the Threads of Life.
			</BodyText>
			<ClearFloat />
		</>
	);
};

export default Gods;

const FloatingImage = styled.img`
	float: right;
	margin: 20px auto;
	width: 200px;
	height: 200px;
	object-fit: cover;
	object-position: top center;
`;

const ClearFloat = styled.div`
	clear: both;
`;
