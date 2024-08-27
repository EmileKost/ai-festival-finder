const axios = require("axios");

const getAmsterdamFestivalData = async () => {
	try {
		const response = await axios.get(
			"https://api.data.amsterdam.nl/v1/evenementen/evenementen",
			{
				headers: {
					"X-api-key": process.env.AMSTERDAM_DATA_API_KEY,
				},
			}
		);
		const data = await response.data;
		console.log(data);
		return data;
	} catch (err) {
		console.log({ err });
		throw err;
	}
};

module.exports = getAmsterdamFestivalData;
