// Add in logic for every logo
import { IconHamburger } from "../IconHamburger";
import { IconSpotify } from "./IconSpotify";

type IconLogoProps = {
	type: string;
};

export const IconLogo = ({ type }: IconLogoProps) => {
	switch (type) {
		case "spotify":
			return <IconSpotify />;
		case "hamburger":
			return <IconHamburger />;
		default:
			return;
	}
};
