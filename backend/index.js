const express = require("express");
require("dotenv").config();

const app = express();

const PORT = 8000;

const getAmsterdamFestivalData = require("./modules/getAmsterdamFestivalData");

app.post("/login", (req, res) => {
	// Hanlde login logic here
	res.send("Login route");
});

app.post("/register", (req, res) => {
	// Handle register logic here
	res.send("Register route");
});

app.get("/spotify-login", (req, res) => {
	// Connection to users Spotify account
	// Return all playlists;
	res.send("Authorize user here with Spotify");
});

app.get("/get-playlist", (req, res) => {
	// Request selected playlists
	res.send("Let the user choose playlists and send to this route");
});

app.get("/get-festivals", (req, res) => {
	// Get Amsterdam festival data here
	getAmsterdamFestivalData();
	res.send("Get Amsterdam festival data here");
});

app.listen(PORT, () => {
	console.log(`The app is listening on port:${PORT}`);
});

// All different routes (wip):
// - Register
// - Login
// - Spotify login
// - Spotify get playlist(s)
// - Get Amsterdam festival data
// - ... Verctor database and calculations
