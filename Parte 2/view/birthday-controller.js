'use strict';

let input = require("./util/console-extension");
let list = require("../business/birthday/list")
let write = require("../business/birthday/write")

module.exports.route = async () => {
	let shouldContinue = true;
	while (shouldContinue) {
		console.log("Welcome to the birthday controller!\nHow can I help you today?");
		const answer = await input.ask("$ ");

		switch (answer) {
			case "write":
				console.log("Please insert the name.");
				const answerWriteName = await input.ask("$ ");
				
				console.log("Please insert the birthday date (YYYY-MM-dd).");
				const answerWriteBirthdayDate = await input.ask("$ ");

				console.log(await write.run(answerWriteName, answerWriteBirthdayDate));
				break;
			case "list":
				console.log(await list.run());
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

