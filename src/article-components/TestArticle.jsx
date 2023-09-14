import styled from "styled-components";
import {
	BodyText,
	Header,
	Subheader
} from "../components/StyledArticleComponents";
import { images } from "../datasource/index.js";
const { astrion } = images.misc;

const TestArticle = () => {
	return (
		<>
			<Header>Header</Header>
			<Subheader>Subheader</Subheader>
			<BodyText>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
				volutpat condimentum quam, dictum rutrum massa vehicula non.
				Quisque non consectetur nibh. Donec lacus libero, rhoncus non
				sem vitae, tincidunt faucibus mi. Praesent vel dapibus sem.
				Vestibulum orci elit, pharetra sit amet volutpat eu, hendrerit
				at mauris. Curabitur id maximus sapien. Fusce aliquet, urna
				vitae rhoncus scelerisque, elit leo placerat neque, ac sodales
				libero sem ut ipsum. Donec ultrices, tortor non viverra
				convallis, nibh lacus vehicula sem, et tempor mauris velit et
				urna. Vestibulum hendrerit mi sit amet dolor semper facilisis.
			</BodyText>
			<BodyText>
				Fusce luctus enim leo, vel elementum turpis faucibus id.
				Vestibulum viverra ante quam, in tempor nulla viverra vel.
				Vivamus sapien lorem, scelerisque eget convallis consequat,
				accumsan vitae ex. Suspendisse sit amet diam felis. Phasellus
				luctus augue in justo elementum ornare. Aliquam tincidunt tellus
				et nibh tristique fringilla. Pellentesque vehicula nec tellus a
				eleifend. Phasellus vel commodo enim, non malesuada lorem.
			</BodyText>
		</>
	);
};

export default TestArticle;

const InlineImage = styled.img`
	float: left;
	width: 150px;
`;
