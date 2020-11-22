'use strict';

let input = require("./util/console-extension");
let list = require("../business/ping/list");
let write = require("../business/ping/write");

module.exports.route = async () => {
	let shouldContinue = true;
	while (shouldContinue) {
		console.log("Welcome to the ping controller!\nHow can I help you today?");
		const answer = await input.ask("$ ");

		switch (answer) {
			case "list":
				console.log(await list.run());
				break;
			case "write":
				console.log(await write.run());
				break;
			case "exit":
				shouldContinue = false;
				break;
			default:
				console.log("That option wasn't implemented!");
				await input.timeout(500);
		}
	}
};

