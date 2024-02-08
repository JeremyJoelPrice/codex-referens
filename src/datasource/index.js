/* Images */

// Character Portraits
import eurekaPortrait from "../datasource/img/eureka and yarkarth.jpg";
import liliPortrait from "../datasource/img/lili-portrait.jpg";
import amaraPortrait from "../datasource/img/amara-portrait.png";
import volrinPortrait from "../datasource/img/volrin.jpg";
import novaPortrait from "../datasource/img/nova-portrait.jpeg";
import parasPortrait from "../datasource/img/paras-portrait.png";

// Character Profiles

// Wallpapers
import wallpaper from "../datasource/img/wallpaper.png";

// Other
import frame from "../datasource/img/portrait-frame.png";
import niamhAlt from "../datasource/img/lili-portrait-2.jpg";
import cancel from "../datasource/img/cancel_error_coin_cross_delete_icon_210983.png";
import astrion from "../datasource/img/Astrion.png";
import tymora from "../datasource/img/tyche.jpg";
import mystrelle from "../datasource/img/Mystrelle.png";
import eruption from "../datasource/img/eruption.jpeg";
import limenora from "../datasource/img/limenora.png";

/* PC Details */
import eureka from "./pc-details/eureka";
import lili from "./pc-details/lili";
import amara from "./pc-details/amara";
import nova from "./pc-details/nova";
import volrin from "./pc-details/volrin";
import paras from "./pc-details/paras";

/* Exports */

export const images = {
	frame,
	wallpaper,
	pcPortraits: {
		eurekaPortrait,
		liliPortrait,
		amaraPortrait,
		volrinPortrait,
		novaPortrait,
		parasPortrait
	},
	misc: { astrion, cancel, eruption, mystrelle, tymora, niamhAlt, limenora }
};
export const pcDetails = {
	lili,
	amara,
	nova,
	eureka,
	volrin,
	paras
};
