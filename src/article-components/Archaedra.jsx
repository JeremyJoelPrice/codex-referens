import styled from "styled-components";
import { BodyText, Header } from "../components/StyledArticleComponents";
import { images } from "../datasource";
const { eruption } = images.misc;

const Archaedra = () => {
	return (
		<>
			<Header>Archaedra</Header>
			<BodyText>
				Archaedra, the imposing magical volcano reigns as the dominant
				feature of Echomora, but its legacy is far more than
				geographical dominance. This ancient edifice epitomized both the
				ingenuity of its inhabitants and the unforeseen consequences of
				their actions.
				<br />
				<br />
				For generations, Archaedra sustained the subterranean
				communities of dwarves and gnomes, serving as the source of
				precious minerals and enchanted resources. Their industrious
				spirit and innovation thrived in its shadow, nurturing a
				prosperous way of life.
				<BlockLevelImage src={eruption} />
				<br />
				<br />
				However, the tide of fortune turned when an invading army,
				apparently lured by the allure of Archaedra's riches, unleashed
				an unimaginable calamity. Their unbridled pillaging awakened
				dormant arcane forces, triggering a cataclysmic eruption that
				reshaped the land. Dwarves and gnomes were displaced from their
				home, magical ability was awakened throughout the common folk,
				and worst of all the Ashlands were now no longer sealed off,
				causing an incursion of its denizens against the civilised races
				of Echomora.
				<br />
				<br />
				Today, Archaedra stands as a silent sentinel, its fractured peak
				and scarred surroundings serving as poignant reminders of the
				consequences of recklessness. Its dormant depths hold both
				mystery and danger, a testament to the enduring impact of the
				past on the ever-evolving world of Echomora.
			</BodyText>
		</>
	);
};

export default Archaedra;

const BlockLevelImage = styled.img`
	display: block;
	margin: 20px auto;
	width: 70%;
`;
