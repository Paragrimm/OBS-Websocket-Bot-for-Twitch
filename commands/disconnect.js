const { obs } = require("../bot.js");

exports.run = (client, message, args, context, channel, self) => {
	if (context.mod || context.badges["broadcaster"] === "1") {
		obs.disconnect();
		return true;
	}
};
