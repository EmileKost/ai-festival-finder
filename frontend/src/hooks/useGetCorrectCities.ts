import { useState, useEffect } from "react";

export const useGetCorrectCities = () => {
	const [cities, setCities] = useState([]);

	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(async (position) => {
				const longitude = position.coords.longitude;
				const latitude = position.coords.latitude;
				console.log("fetch");

				try {
					const response = await fetch(
						`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}`,
						{
							method: "GET",
							headers: {
								"Content-type": "application/json",
								apiKey: "9Ii8HFceml1Y0BsQsdO4",
							},
						}
					);
					const data = await response.json();
					console.log({ data });
				} catch (err) {
					alert("Something went wrong with getting your location");
					console.log(err);
				}
			});
		} else {
			// FETCH on preset filter
			alert("Enable your location for better user experience");
			console.log("NO LOCATION");
		}
	}, []);
};

// const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
// API Key is for some reason wrong?????
