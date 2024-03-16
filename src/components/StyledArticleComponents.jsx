import styled from "styled-components";

const BodyText = styled.div`
	font-family: Optima, sans serif;
	font-size: 16pt;
	color: rgb(239, 233, 203);
	line-height: 1.5em;
	white-space: pre-line;
`;

const Header = styled(BodyText)`
	margin: 20px 0 10px;
	text-align: center;
	line-height: 1em;
	font-size: 34pt;
	font-weight: bold;
	color: rgb(213, 194, 103);
`;

const Subheader = styled(BodyText)`
	font-size: 22pt;
	text-align: left;
	font-weight: bold;
	font-style: italic;
	margin: 0px;
	color: rgb(213, 194, 103);
`;

export { BodyText, Header, Subheader };
