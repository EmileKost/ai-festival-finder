const axios = require("axios");

const getAmsterdamFestivalData = async () => {
	try {
		const response = await axios.get(
			"https://api.data.amsterdam.nl/v1/evenementen/"
		);
		const data = await response.json;
		console.log(data);
		return data;
	} catch (err) {
		console.log({ err });
		throw err;
	}
};

module.exports = getAmsterdamFestivalData;
