'use strict';

const repository = require("../../data/birthday/birthday-repository");

module.exports.run = async (name, birthdayDate) => {

	return await repository.list(name, birthdayDate);
};
