import styled from "styled-components";
import Wallpaper from "../components/Wallpaper";
import { images } from "../datasource/index.js";
import {
	BodyText,
	Header,
	Subheader
} from "../components/StyledArticleComponents";
const { wallpaper } = images;

const Srd = () => {
	return (
		<Wallpaper src={wallpaper}>
			<StyledSrd>
				<ContentColumn>
					<Header>House Rules</Header>
					<Subheader>0. Be lush unto one another</Subheader>
					<BodyText>So continue as you are</BodyText>
					<Subheader>1. DM Rulings Are Final</Subheader>
					<BodyText>
						The official rules are second to the DM's rulings; a
						useful tool but time-consuming to constantly reference
						during play. The DM will look up the official rule after
						the game if there was any doubt, but is never bound by
						what's in the book.
					</BodyText>
					<Subheader>2. No Retconning</Subheader>
					<BodyText>
						If a rule was mis-remembered, and just in general, we
						typically won't undo what's happened in game. Suspension
						of disbelief is almost always more important
					</BodyText>
					<Subheader>3. No PvP Without Consent</Subheader>
					<BodyText>
						If your character wants to take actions which harm
						another PC, we don't engage the rules. Instead, both
						players come to an agreement about what happens next. If
						you can't agree, then nothing happens.
					</BodyText>
					<Subheader>4. Misc Rules Changes</Subheader>
					<BodyText>
						<ul>
							<li>
								Base XP earned by attending a session, assuming
								something dramatic and dangerous happens. Bonus
								XP is earned by discovering hidden areas, and
								discovering NPC aspects (their flaws, bonds,
								etc.)
							</li>
							<li>XP is NOT earned by killing monsters</li>
							<li>Gritty long/short rest variant</li>
							<li>
								Inspiration for representing your personality
								traits, flaws etc in a way which is detrimental
								and dramatic
							</li>
						</ul>
					</BodyText>
				</ContentColumn>
			</StyledSrd>
		</Wallpaper>
	);
};

export default Srd;

const StyledSrd = styled.div`
	border: 1pt solid rgb(73, 70, 50);
	width: 80%;

	margin: 10px auto 100px;
	padding: 20px;

	background-color: rgba(20, 20, 20, 0.8);
	border-radius: 5px;
`;

const ContentColumn = styled.div`
	padding: 0 100px;
	@media (max-width: 750px) {
		padding: 0;
	}
`;
