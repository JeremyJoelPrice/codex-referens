/* Images */

// Character Portraits
import mayPortrait from "../datasource/img/may-portrait.jpeg";
import liliPortrait from "../datasource/img/lili-portrait.jpg";
import amaraPortrait from "../datasource/img/amara-portrait.png";
import volrinPortrait from "../datasource/img/null-portrait.png";
import novaPortrait from "../datasource/img/nova-portrait.jpeg";
import premPortrait from "../datasource/img/prem-seal.jpeg";

// Wallpapers
import wallpaper from "../datasource/img/wallpaper.png";

// Other
import frame from "../datasource/img/portrait-frame.png";
import niamhAlt from "../datasource/img/lili-portrait-2.jpg";

export const images = {
	frame,
	wallpaper,
	misc: { niamhAlt }
};

export const pcProfiles = {
	jen: {
		name: "Mayonniase",
		img: mayPortrait
	},
	niamh: {
		name: "Lili Nimblefoot",
		img: liliPortrait
	},
	em: {
		name: "Amara Galanodel",
		img: amaraPortrait
	},
	sophie: {
		name: "Nova Abyssus",
		img: novaPortrait
	},
	owyn: {
		name: "Volrin Ironspring",
		img: volrinPortrait
	},
	prem: {
		name: "Prem",
		img: premPortrait
	}
};
