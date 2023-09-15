import styled from "styled-components";
import { BodyText, Header } from "../components/StyledArticleComponents";
import { images } from "../datasource";
const { eruption } = images.misc;

const Home = () => {
	return (
		<>
			<Header>Echmora</Header>
			<BodyText>
				Echomora, a once-stable realm, was irrevocably altered by the
				cataclysmic eruption of the dormant magic volcano, Archaedra.
				This event shattered the barriers separating Echomora from the
				treacherous Ashlands, ushering in a tide of enigmatic beings and
				races that now challenge its denizens. As the Ashlands encroach,
				they bring with them unforeseen dangers, mysteries, and
				unbridled magic, reshaping the land's very essence.
			</BodyText>
			<BlockLevelImage src={eruption} />
			<BodyText>
				Moreover, the eruption unlocked the gates to magic, transforming
				it from an elusive pursuit into a newfound and accessible power
				within Echomora. This surge in magical potential has both
				intrigued and unnerved its inhabitants, leading to a landscape
				where hidden factions wage secret wars beneath the veneer of
				apparent unity. Echomora, at the intersection of magic's
				resurgence and covert conflicts, stands poised for a
				transformative journey, where its destiny teeters on the
				precipice of the unknown.
			</BodyText>
		</>
	);
};

export default Home;

const BlockLevelImage = styled.img`
	display: block;
	margin: 20px auto;
	width: 70%;
`;
