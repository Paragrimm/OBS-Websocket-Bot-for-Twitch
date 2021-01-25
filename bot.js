/*
	OBS Websocket Bot for Twitch
	Author: derrobin154
	Used Packages: tmi.js@npm, obs-websocket-js@npm, dotenv@npm, node-fetch@npm
 */
const version = "2.0";
const twitch = require("tmi.js");
const dotenv = require("dotenv").config({ path: "./.env" });
const client = new twitch.client({
	connection: {
		reconnect: true,
		secure: true,
	},
	identity: {
		username: process.env.USERNAME,
		password: process.env.OAUTH,
	},
	channels: [process.env.KANALNAME],
});
const commandResolver = require("./functions/commandResolver.js");
const OBSWebSocketJS = require("obs-websocket-js");
const obs = new OBSWebSocketJS();
const fetch = require("node-fetch");
const io = require("socket.io-client").io(
	`${process.env.STREAM_DESIGN_WS_IP}:${process.env.STREAM_DESIGN_WS_PORT}`
);

io.connect();
client.connect();

async function GetLatestReleaseInfo() {
	const release = await fetch(
		"https://api.github.com/repos/paragrimm/OBS-Websocket-Bot-for-Twitch/releases/latest"
	);
	return release.json();
}

GetLatestReleaseInfo().then((data) => {
	if (data.tag_name !== version && data.message !== "Not Found") {
		console.error(
			`UPDATE: Version ${data.tag_name} wurde veröffentlicht.\nBitte gehe auf ${data.html_url} und lade die neuste Version runter.\nBot stoppt.`
		);
	}
});

function TryToConnectToObs() {
	let timer = setInterval(() => {
		obs
			.connect({
				address: `${process.env.OBS_IP}:${process.env.OBS_PORT}`,
				password: process.env.OBS_PASSWORD,
			})
			.then(() => {
				clearInterval(timer);
			});
	}, 10000);
}

client.on("message", (channel, context, message, self) => {
	const prefix = "!";
	if (message.substr(0, prefix.length) === prefix) {
		return commandResolver.resolve(client, channel, context, message, self);
	}
});

client.on("connected", (addr, port) => {
	console.log(`* Connected to ${addr}:${port}`);
	console.log(`Verbindung mit dem Twitch Server hergestellt`);
	TryToConnectToObs();
});
obs.on("error", (err) => {
	console.error("Socket Error:", err);
});

obs.on("Exiting", () => {
	obs.disconnect();
	TryToConnectToObs();
});

module.exports = { obs };
