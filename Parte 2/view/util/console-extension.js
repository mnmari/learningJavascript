'use strict';

const readLine = require("readline");

// Makes a question and waits for an answer through the console
module.exports.ask = (question) => {
	return new Promise((fulfill, reject) => {
		const input = readLine.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		input.question(question, (answer) => {
			input.close();
			fulfill(answer);
		})
	});
};

module.exports.timeout = (milliseconds) => {
	return new Promise((fulfill, reject) => {
		setTimeout(() => {
			fulfill();
		}, milliseconds);
	});
}
