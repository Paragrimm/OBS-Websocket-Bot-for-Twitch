const { obs } = require("../bot.js");
const { io } = require("../bot.js");

exports.run = (client, message, args, context, channel, self) => {
	if (args.length === 0) return;
	io.emit("queueAdd", {
		message: message,
		context: context,
	});
};
