'use strict';

const repository = require("../../data/birthday/birthday-repository");

module.exports.run = async (id, name, birthdaydate) => {

	let element = await repository.update(id, name, birthdaydate);
	
	if (element !== null) {
		return element;
	}
	else {
		throw new Error("update_undefined");
	}
};
