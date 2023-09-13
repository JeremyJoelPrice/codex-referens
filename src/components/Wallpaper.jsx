import styled from "styled-components";

const Wallpaper = ({ src, children }) => {
	return <StyledWallpaper src={src}>{children}</StyledWallpaper>;
};

export default Wallpaper;

const StyledWallpaper = styled.div`
	position: fixed;
	top: 60px;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background-image: url(${({ src }) => src});
	background-size: cover;
	background-attachment: fixed;
	overflow-y: scroll;
	z-index: 0;
`;
