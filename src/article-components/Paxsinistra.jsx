import styled from "styled-components";
import {
	BodyText,
	Header,
	Subheader
} from "../components/StyledArticleComponents";

const Paxsinistra = () => {
	return (
		<>
			<Header>Paxsinistra</Header>
			<CenterestSubheader>
				The Sanctum of Shadows and Faith
			</CenterestSubheader>
			<BodyText>
				Dominating the grand tapestry of Echomoroa's political and
				spiritual landscape is the enigmatic city-state of Paxsinistra.
				Officially proclaimed as the holy seat of both divine and
				political authority, Paxsinistra stands as a beacon of religious
				devotion and temporal might, ruled by a the Pope-King Pontifex
				Maximus Aurelius VIII. Yet, beneath the veneer of piety and
				divine grace, Paxsinistra conceals a labyrinth of intrigue,
				scandal, and ruthless power struggles.
				<br />
				<br />
				Within the hallowed walls of Paxsinistra, spies and clandestine
				factions weave a complex web of deception and manipulation,
				vying for supremacy within this sacred citadel. The city-state's
				influence extends beyond its spiritual dominion, with a
				stranglehold on the world's military might. As it extends its
				faith's reach, it does so with a covert hand that masks its true
				intentions. Paxsinistra embodies a duality that casts shadows
				upon its sanctity, making it a realm where faith, politics, and
				secrets intermingle, and where the line between divine
				enlightenment and worldly ambition blurs into obscurity.
			</BodyText>
		</>
	);
};

export default Paxsinistra;

const CenterestSubheader = styled(Subheader)`
	text-align: center;
`;
