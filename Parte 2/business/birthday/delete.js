'use strict';

const repository = require("../../data/birthday/birthday-repository");

module.exports.run = async (value) => {

	let element = await repository.delete(value);

	if (element !== null) {
		return element;
	}
	else {
		throw new Error("delete_undefined");
	}
};
