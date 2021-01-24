const { obs } = require("../bot.js");

exports.run = (client, message, args, context, channel, self) => {
	if (context.mod || context.badges["broadcaster"] === "1") {
		obs.disconnect();
		obs.connect({
			address: `${process.env.OBS_IP}:${process.env.OBS_PORT}`,
			password: process.env.OBS_PASSWORD,
		});
		return true;
	}
};
