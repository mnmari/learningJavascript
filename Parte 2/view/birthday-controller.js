'use strict';

let input = require("./util/console-extension");
let list = require("../business/birthday/list");
let write = require("../business/birthday/write");
let find = require("../business/birthday/find");
let remove = require("../business/birthday/delete");

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

			case "find":
				console.log("Please insert the birthday id.");
				const answerFind = await input.ask("$ ");
				
				try {
					console.log(await find.run(answerFind));
				}

				catch(error) {
					if (error.message === "find_undefined"){
						console.log("This birthday id doesn't exist!");
					} 
					else {
						console.log("There was an error.");
					}
				}

				case "delete":
					console.log("Please insert the birthday id.");
					const answerDelete = await input.ask("$ ");

					try {
						console.log(await remove.run(answerDelete));
						console.log("The birthday id '" + answerDelete + "' was successfully deleted!")
					}

					catch(error) {
						if (error.message === "delete_undefined"){
							console.log("This birthday id doesn't exist!");
						} 
						else {
							console.log("There was an error.");
						}
					}

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

