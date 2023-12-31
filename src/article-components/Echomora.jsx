import styled from "styled-components";
import { BodyText, Header } from "../components/StyledArticleComponents";
import { images } from "../datasource";
const { eruption } = images.misc;

const Echomora = () => {
	return (
		<>
			<Header>Echmora</Header>
			<BodyText>
				Echomora is a realm where civilisation is a bastion against the
				chaos of the wilderness. The civilised races live in tentative
				harmony, though numerous factions engage in hostile interplay
				against rivals both foreign and domestic. Races more barbaric,
				though no less intelligent, are more openly hostile, acting as
				predators by raiding opportunistically, and attacking anyone who
				strays too far into the wild.
				<br />
				<br />
				The realm was irrevocably altered by the cataclysmic eruption of
				the dormant magic volcano, Archaedra. This event shattered the
				barriers separating Echomora from the treacherous Ashlands,
				ushering in a tide of enigmatic beings and races that now
				challenge its denizens. As the Ashlands encroach, they bring
				with them unforeseen dangers, mysteries, and unbridled magic,
				reshaping the land's very essence.
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

export default Echomora;

const BlockLevelImage = styled.img`
	display: block;
	margin: 20px auto;
	width: 70%;
`;
