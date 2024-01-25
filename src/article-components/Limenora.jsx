import styled from "styled-components";
import {
	BodyText,
	Header,
	Subheader
} from "../components/StyledArticleComponents";
import { images } from "../datasource";
const { limenora } = images.misc;

const Limenora = () => {
	return (
		<>
			<Header>Limenora</Header>
			<CenterestSubheader>Sancta Sedes Borealis</CenterestSubheader>
			<BodyText>
				Limenora, perched on the precarious frontier between the
				encroaching Ashlands and the waning influence of Paxsinistra,
				stands as a turbulent melting pot of factions and intrigue. Its
				cobbled streets echo with the footsteps of spies, rebels, and
				treasure hunters, each seeking their fortune amidst the turmoil.
				Here, crumbling stone walls are a stark reminder of the city's
				tenuous existence, while the looming presence of the Ashlands
				fuels a constant sense of urgency.
			</BodyText>
			<BlockLevelImage src={limenora} />
		</>
	);
};

export default Limenora;

const CenterestSubheader = styled(Subheader)`
	text-align: center;
`;

const BlockLevelImage = styled.img`
	display: block;
	margin: 20px auto;
	width: 70%;
`;
