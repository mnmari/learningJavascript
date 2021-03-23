'use strict';

const repository = require("../../data/birthday/birthday-repository");

module.exports.run = async (name, birthdayDate) => {
	
	let list = await repository.list(name, birthdayDate)
	
	//return await repository.list(name, birthdayDate);

	if (list !== null) {
		return list;
	}
	else {
		throw new Error("list_undefined");
	}

};
