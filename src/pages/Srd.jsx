import styled from "styled-components";
import Wallpaper from "../components/Wallpaper";
import {
	BodyText,
	Header,
	Subheader
} from "../components/StyledArticleComponents";
import wallpaper from "../datasource/img/wallpaper.jpg";

const Srd = () => {
	return (
		<Wallpaper src={wallpaper}>
			<StyledSrd>
				<ContentColumn>
					<CenteredText>
						<CenteredSubheader>
							House Rules & Etiquette
						</CenteredSubheader>
						<BodyText>
							0. Be lush unto one another
							<br />
							1. DM Rulings Are Final
							<br />
							2. No Retconning
							<br />
							3. No PvP Without Consent
							<br />
						</BodyText>
					</CenteredText>
					<CenteredSubheader>"Tactical" Playstyle</CenteredSubheader>
					<BodyText>
						<ul>
							<li>
								The enemies want to win, and will act in their
								own self interest
							</li>
							<li>
								No amount of hit points can save you from a
								logical death (like a knife in the neck, or a
								fall from a great height).
							</li>
						</ul>
					</BodyText>
					<Header>Variant Game Rules</Header>
					<BodyText>
						<ul>
							<li>
								Consistently choosing the quick and easy "evil"
								option will cause alignment to downshift
							</li>
							<li>
								Inspiration is also awarded for doing the
								"morally right" thing when it's inconvenient or
								problematic to do so
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

const CenteredText = styled.div`
	text-align: center;
`;

const CenteredSubheader = styled(Subheader)`
	text-align: center;
`;
