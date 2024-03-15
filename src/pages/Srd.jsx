import styled from "styled-components";
import Wallpaper from "../components/Wallpaper";
import {
	BodyText,
	Header,
	Subheader
} from "../components/StyledArticleComponents";
import wallpaper from "../datasource/img/wallpaper.jpg"

const Srd = () => {
	return (
		<Wallpaper src={wallpaper}>
			<StyledSrd>
				<ContentColumn>
					<Header>House Rules & Etiquette</Header>
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
					<Header>Playstyle & Tone As Per Session 0</Header>
					<BodyText>
						We have settled on a game world that is open, where
						there is more adventure and opportunity to be found than
						you will ever be able to complete, and players are
						expected to be self-motivated, and push forward in
						pursuit of their own goals. This world is also filled
						with many factions, who are looking for
						mercenaries/adventurers to hire. The world is also
						gritty, and dangerous. Encounters are not designed to be
						fair, only to be plausible within the game world.
						Characters who rush into combat without preparing or
						researching their opponents will likely get into fights
						they can't win.
					</BodyText>
					<br />
					<BodyText>
						Secondary to the above, this is a game featuring some
						intrigue, an overarching plot that can't be ignored
						indefinitely, and plenty of breathing room for
						slice-of-life moments between the action and drama.
					</BodyText>
					<br />
					<BodyText>
						Remember:
						<ul>
							<li>
								your character sheet doesn't contain the
								solution to every problem
							</li>
							<li>
								your enemies think they're the main characters
							</li>
							<li>
								no amount of hit points can save you from a
								logical death (like a knife in the neck, or a
								fall from a great height).
							</li>
						</ul>
					</BodyText>
					<Header>Variant Game Rules</Header>
					<BodyText>
						<ul>
							<li>
								Base XP earned by attending a session, assuming
								something dramatic and dangerous happens.
							</li>
							<li>
								Bonus XP is earned by discovering hidden areas,
								and discovering NPC aspects (their flaws, bonds,
								etc.)
							</li>
							<li>
								Gritty long/short rest variant However, spell
								casters can prepare their spells after a short
								rest instead of requiring a long rest.
							</li>
							<li>
								Inspiration is awarded for representing your
								personality traits, flaws etc in a way which is
								detrimental and dramatic
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
