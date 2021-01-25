const { obs } = require("../bot.js");
const { socket } = require("../bot.js");

exports.run = (client, message, args, context, channel, self) => {
	if (args.length === 0) return;

	socket.emit("queueAdd", {
		username: context.username,
		value: args,
	});
};
