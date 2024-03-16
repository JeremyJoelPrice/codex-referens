import { Link } from "react-router-dom";
import styled from "styled-components";
import { Subheader } from "./StyledArticleComponents";

const Navbar = () => {
	return (
		<StyledNavbar>
			<NavLinkContainer>
				<StyledLink to="/">
					<NavLink>Character Gallery</NavLink>
				</StyledLink>
				<StyledLink to="/srd">
					<NavLink>SRD</NavLink>
				</StyledLink>
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

const NavLink = styled(Subheader)`
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
