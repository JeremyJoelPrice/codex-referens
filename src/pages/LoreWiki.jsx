import styled from "styled-components";
import Wallpaper from "../components/Wallpaper";
import TestArticle from "../article-components/TestArticle";
import { images } from "../datasource/index.js";
const { wallpaper } = images;

const LoreWiki = () => {
	return (
		<Wallpaper src={wallpaper}>
			<StyledLoreWiki>
				<ContentColumn>
					<TestArticle />
				</ContentColumn>
			</StyledLoreWiki>
		</Wallpaper>
	);
};

export default LoreWiki;

const StyledLoreWiki = styled.div`
	border: 1pt solid rgb(73, 70, 50);
	width: 80%;

	margin: 10px auto 100px;
	padding: 20px;

	background-color: rgba(20, 20, 20, 0.8);
	border-radius: 5px;
`;

const ContentColumn = styled.div`
	padding: 0 100px;
`;
