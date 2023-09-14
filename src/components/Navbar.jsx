import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
	return (
		<StyledNavbar>
			<NavLinkContainer>
				<NavLink>Lore Wiki</NavLink>
				<StyledLink to="/character-gallery">
					<NavLink>Character Gallery</NavLink>
				</StyledLink>
				<NavLink>SRD</NavLink>
			</NavLinkContainer>
		</StyledNavbar>
	);
};

export default Navbar;

const StyledNavbar = styled.div`
	position: absolute;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 60px;
	background-color: red;
	z-index: 1;

	background-color: rgb(15, 15, 15);
`;

const NavLinkContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: 10px 0;
`;

const NavLink = styled.div`
	font-family: Georgia, "Times New Roman", Times, serif;
	font-size: 18pt;
	color: rgb(213, 194, 103);
	line-height: 1.5em;
	white-space: pre-line;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
`;
