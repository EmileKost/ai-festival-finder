const axios = require("axios");

// Later think of better API optons
const getAmsterdamFestivalData = async () => {
	try {
		const response = await axios.get(
			"https://api.data.amsterdam.nl/v1/evenementen/evenementen",
			{
				headers: {
					"X-api-key": process.env.AMSTERDAM_DATA_API_KEY,
					"Content-Type": "application/json",
				},
			}
		);
		const data = await response.data;

		return data.evenementen;
	} catch (err) {
		console.log({ err });
		throw err;
	}
};

module.exports = getAmsterdamFestivalData;
