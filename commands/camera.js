const { obs } = require("../bot.js");

function run(client, message, args, context, channel, self) {
	const camerapositions = require("../json/camerapos.json");
	if (args.length === 0) return;
	if (context.mod || context.badges["broadcaster"] === "1") {
		if (camerapositions[args] !== undefined) {
			obs.sendCallback(
				"SetSceneItemProperties",
				{
					item: process.env.OBS_ITEMCAMERA,
					position: {
						x: camerapositions[args].x,
						y: camerapositions[args].y,
					},
				},
				(err, data) => {
					if (
						err &&
						err.status === "error" &&
						err.error === "specified scene item doesn't exist"
					) {
						client.say(process.env.KANALNAME, "Diese Quelle existiert nicht.");
						return false;
					}
					if (data && data.status === "ok") {
						return client.say(
							process.env.KANALNAME,
							`Neue Kameraposition: ${args}`
						);
					}
				}
			);
		} else {
			client.say(
				process.env.KANALNAME,
				"Diese Position wurde nicht festgelegt."
			);
			return false;
		}

		return true;
	}
}

exports.run = run;
module.exports = { camera: { run: run } };
