'use strict';

let input = require("./view/util/console-extension");
let pingController = require("./view/ping-controller");
let birthdayController = require("./view/birthday-controller");

mainLoop()
	.then(() => {
		console.log("See you soon, stranger!");
		process.exit(0)
	})
	.catch((error) => {
		console.log(error);
		process.exit(error.code);
	})

async function mainLoop() {
	let shouldContinue = true;
	while (shouldContinue) {
		console.clear();
		console.log("Good morning, stranger!\nHow can I help you today?");
		const answer = await input.ask("$ ");

		switch (answer) {
			case "ping":
				await pingController.route();
				break;
			case "birthday":
				await birthdayController.route();
				break;
			case "exit":
				shouldContinue = false;
				break;
			default:
				console.log("That option wasn't implemented!");
				await input.timeout(500);
		}
	}
}


