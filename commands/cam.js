const { camera } = require("./camera.js");

exports.run = (client, message, args, context, channel, self) => {
	if (context.mod || context.badges["broadcaster"] === "1") {
		return camera.run(client, message, args, context, channel, self);
	}
};
