'use strict';

const repository = require("../../data/birthday/birthday-repository");

module.exports.run = async (value) => {

	let element = await repository.find(value);

	if (element !== null) {
		return element;	
	}
	else {
		throw new Error("find_undefined");
	}
};
