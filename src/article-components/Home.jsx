import styled from "styled-components";
import {
	BodyText,
	Header,
	Subheader
} from "../components/StyledArticleComponents";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	const handleClick = (route) => {
		navigate(route);
	};

	return (
		<>
			<Header>Echomoroa Lore Wiki</Header>
			<BodyText>
				Welcome to the Echomoroa Lore Wiki. This resource offers a brief
				glimpse into the lore of our campaign world, and provides a
				basic understanding of Echomoroa's history, characters, and key
				themes. Use it as a starting point to immerse yourself in the
				world's atmosphere and plotlines.
			</BodyText>
			<Subheader>Contents</Subheader>
			<BodyText>
				<ul>
					<Link onClick={() => handleClick("/lore/echomora")}>
						The World of Echomora
					</Link>
					<Link onClick={() => handleClick("/lore/gods")}>
						The Gods
					</Link>
					<Link onClick={() => handleClick("/lore/archaedra")}>
						Archaedra, Former Home of Dwarves & Gnomes
					</Link>
				</ul>
			</BodyText>
		</>
	);
};

export default Home;

const Link = styled.li`
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;
