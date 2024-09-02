import { useEffect, useState } from "react";

export const useBreakPointValues = () => {
	const [screenSizes, setScreenSizes] = useState({});

	const handleResize = () => {
		setScreenSizes({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	});

	return screenSizes;
};
